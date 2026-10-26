// =========================================================================
// js/app.js — Orquestrador Principal do Doc's Lab (Completo e Sem Cortes)
// =========================================================================

let isCurrentlyInCourseView = false;

window.injectDocMascotEverywhere = function() {
  if (typeof window.renderDocPlagueMascotSvg !== 'function') return;
  document.querySelectorAll('.doc-mascot-slot').forEach(el => {
    el.innerHTML = window.renderDocPlagueMascotSvg();
  });
};

// =========================================================================
// 1. SINCRONIZAÇÃO SUPABASE (ISOLAMENTO REAL POR E-MAIL / UID)
// =========================================================================
window.syncAuthenticatedUser = async function(supaUser) {
  if (!supaUser) return;

  const email = (supaUser.email || '').toLowerCase().trim();
  window.isCurrentUserAdmin = (email === window.ADMIN_EMAIL);

  if (window.isCurrentUserAdmin) {
    document.getElementById('topAdminBtn')?.classList.remove('hidden');
    document.getElementById('profileAdminBtn')?.classList.remove('hidden');
    if (localStorage.getItem('docslab_admin_hide_init') !== 'true') {
      window.userState.hideFromLeaderboard = true;
      localStorage.setItem('docslab_admin_hide_init', 'true');
    }
  } else {
    document.getElementById('topAdminBtn')?.classList.add('hidden');
    document.getElementById('profileAdminBtn')?.classList.add('hidden');
  }

  // Verifica se o usuário trocou de conta no navegador comparando com o UID salvo
  const lastLoggedUserId = localStorage.getItem('docslab_current_uid');
  const isDifferentUser = lastLoggedUserId && lastLoggedUserId !== supaUser.id;

  if (isDifferentUser) {
    localStorage.removeItem('docslab_state_v5');
    localStorage.removeItem('docslab_custom_named');
    window.userState = {
      name: 'Estudante',
      xp: 0,
      coins: 120,
      activeCourse: 'psicopatologia',
      studiedDays: [],
      unlockedItems: [
        '#fde6d8', '#f9d4b8', '#e5b887', '#c68642', '#8d5524', '#4b2810',
        '#1e293b', '#451a03', '#92400e', '#facc15',
        '#0f172a', '#78350f', '#0284c7', '#16a34a',
        'style_short', 'style_bob', 'style_long', 'style_curly', 'style_bald',
        'happy', 'confident', 'smile', 'smirk', 'none', 'hoodie', 'tshirt',
        '#2563eb', '#7c3aed', '#1e1b4b', '#064e3b', '#3b0764'
      ],
      stageHistory: {},
      unlockedModulesBonus: {},
      unlockedGrimorioTopics: {},
      isOnboarded: false,
      hideFromLeaderboard: window.isCurrentUserAdmin,
      stats: {
        lifetimeCoinsEarned: 120,
        totalQuestionsCorrect: 0,
        totalTopicsRead: 0,
        totalFlashcardsMastered: 0,
        currentStreakDays: 0,
        maxStreakDays: 0,
        lastStudyDateISO: null,
        claimedAchievementTiers: {},
        courseStats: {
          psicofarmacologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
          epidemiologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
          psicopatologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 }
        }
      },
      avatar: {
        skinTone: '#f9d4b8',
        hairColor: '#1e293b',
        eyeColor: '#0f172a',
        head: 'style_short',
        eyes: 'happy',
        mouth: 'smile',
        hat: 'none',
        body: 'hoodie',
        bodyColor: '#16a34a',
        bgColor: '#1e1b4b'
      }
    };
  }
  localStorage.setItem('docslab_current_uid', supaUser.id);

  // Consulta o Supabase para carregar o perfil específico deste UID
  if (window.supabaseClient) {
    try {
      const { data: cloudProfile, error } = await window.supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', supaUser.id)
        .maybeSingle();

      if (!error && cloudProfile) {
        window.userState.name = cloudProfile.username || window.userState.name;
        window.userState.xp = typeof cloudProfile.total_xp === 'number' ? cloudProfile.total_xp : window.userState.xp;
        window.userState.coins = typeof cloudProfile.coins === 'number' ? cloudProfile.coins : window.userState.coins;
        window.userState.activeCourse = cloudProfile.last_course || window.userState.activeCourse;
        if (cloudProfile.avatar_json && Object.keys(cloudProfile.avatar_json).length > 0) {
          window.userState.avatar = { ...window.userState.avatar, ...cloudProfile.avatar_json };
        }
        if (cloudProfile.state_json && Object.keys(cloudProfile.state_json).length > 0) {
          window.userState.studiedDays = cloudProfile.state_json.studiedDays || window.userState.studiedDays;
          window.userState.unlockedItems = cloudProfile.state_json.unlockedItems || window.userState.unlockedItems;
          window.userState.stageHistory = cloudProfile.state_json.stageHistory || window.userState.stageHistory;
          window.userState.unlockedModulesBonus = cloudProfile.state_json.unlockedModulesBonus || window.userState.unlockedModulesBonus;
          window.userState.unlockedGrimorioTopics = cloudProfile.state_json.unlockedGrimorioTopics || window.userState.unlockedGrimorioTopics;
          if (cloudProfile.state_json.stats) {
            window.userState.stats = { ...window.userState.stats, ...cloudProfile.state_json.stats };
          }
        }
        window.userState.isOnboarded = Boolean(cloudProfile.is_onboarded);
        if (typeof cloudProfile.hide_from_leaderboard === 'boolean') {
          window.userState.hideFromLeaderboard = cloudProfile.hide_from_leaderboard;
        }
        window.saveUserState();
      } else {
        const prefix = email.split('@')[0];
        window.userState.name = prefix.charAt(0).toUpperCase() + prefix.slice(1);
        window.userState.isOnboarded = false;
        window.saveUserState();
      }
    } catch (e) {
      console.warn('Erro ao buscar perfil no Supabase:', e);
    }
  }

  if (!window.userState.isOnboarded) {
    openFirstTimeOnboarding();
  }

  updateAdminUI();
  window.updateAllUserUI();
  window.renderHomeCatalog();
  window.fetchSupabaseLeaderboard();
};

function openFirstTimeOnboarding() {
  window.userState.avatar.hat = 'none';
  const previewBox = document.getElementById('onboardingAvatarPreview');
  if (previewBox) previewBox.innerHTML = window.renderAvatarSvg(window.userState.avatar);
  const nameInput = document.getElementById('onboardingNameInput');
  if (nameInput) nameInput.value = '';
  document.getElementById('onboardingModal')?.classList.remove('hidden');
}

window.completeOnboardingStep1 = function() {
  const typed = document.getElementById('onboardingNameInput')?.value.trim();
  if (!typed) {
    alert('Por favor, digite o seu apelido para continuar!');
    return;
  }
  window.userState.name = typed;
  window.userState.isOnboarded = true;
  localStorage.setItem('docslab_custom_named', 'true');
  window.saveUserState();
  window.updateAllUserUI();

  document.getElementById('onboardingModal')?.classList.add('hidden');
  window.openAvatarStudio();
};

// =========================================================================
// 2. RENDERIZAÇÃO DA HOME EM GRID DE CARDS ESTILO APPS
// =========================================================================
window.renderHomeCatalog = function() {
  const grid = document.getElementById('homeCoursesGrid');
  if (!grid) return;
  const query = (document.getElementById('homeCourseSearch')?.value || '').toLowerCase().trim();

  const courses = Object.values(window.CATALOG_COURSES).filter(c =>
    c.title.toLowerCase().includes(query) ||
    c.category.toLowerCase().includes(query)
  );

  grid.innerHTML = courses.map(c => {
    const prog = window.getCourseProgressInfo(c.id);
    return `
      <div onclick="openCourseTrail('${c.id}')" class="duo-card hover:border-emerald-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col items-center text-center justify-between p-4 sm:p-5 group">
        <span class="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${c.badgeColor}">
          ${c.category}
        </span>

        <div class="w-20 h-20 sm:w-24 sm:h-24 my-3 rounded-3xl bg-gradient-to-br ${c.accentBg} border-2 ${c.accentBorder} flex items-center justify-center text-4xl sm:text-5xl shadow-lg group-hover:scale-105 transition">
          ${c.icon}
        </div>

        <div class="w-full space-y-1">
          <h3 class="text-sm sm:text-base font-bold leading-tight">${c.title}</h3>
          <p class="text-[11px] font-bold opacity-60">${prog.completedModules}/${c.totalModules} Módulos</p>
        </div>

        <div class="w-full mt-3 space-y-1">
          <div class="flex justify-between text-[10px] font-extrabold opacity-75">
            <span>Progresso</span>
            <span class="text-emerald-400">${prog.percent}%</span>
          </div>
          <div class="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div class="h-full bg-emerald-400 rounded-full transition-all" style="width: ${Math.max(6, prog.percent)}%;"></div>
          </div>
        </div>

        <button class="w-full btn-3d btn-green py-2 mt-3.5 text-xs">
          Abrir Curso
        </button>
      </div>
    `;
  }).join('');
};

window.filterHomeCourses = function() {
  window.renderHomeCatalog();
};

function updateNavigationContextUI() {
  const deskGrimorio = document.getElementById('deskNavGrimorio');
  const mobGrimorio = document.getElementById('mobNavGrimorio');
  const topBackBtn = document.getElementById('topBackToHomeBtn');
  const topIcon = document.getElementById('topContextIcon');
  const topTitle = document.getElementById('topContextTitle');

  const deskTrilhaIcon = document.getElementById('deskNavTrilhaIcon');
  const deskTrilhaLabel = document.getElementById('deskNavTrilhaLabel');
  const mobTrilhaIcon = document.getElementById('mobNavTrilhaIcon');
  const mobTrilhaLabel = document.getElementById('mobNavTrilhaLabel');

  if (!isCurrentlyInCourseView) {
    deskGrimorio?.classList.add('hidden');
    mobGrimorio?.classList.add('hidden');
    mobGrimorio?.classList.remove('flex');
    topBackBtn?.classList.add('hidden');

    if (topIcon) topIcon.textContent = '🏠';
    if (topTitle) topTitle.textContent = 'Central de Cursos';
    if (deskTrilhaIcon) deskTrilhaIcon.className = 'fa-solid fa-house text-base w-6';
    if (deskTrilhaLabel) deskTrilhaLabel.textContent = 'Início (Cursos)';
    if (mobTrilhaIcon) mobTrilhaIcon.className = 'fa-solid fa-house text-base';
    if (mobTrilhaLabel) mobTrilhaLabel.textContent = 'Início';
  } else {
    const meta = window.CATALOG_COURSES[window.userState.activeCourse] || window.CATALOG_COURSES.psicopatologia;
    deskGrimorio?.classList.remove('hidden');
    mobGrimorio?.classList.remove('hidden');
    mobGrimorio?.classList.add('flex');
    topBackBtn?.classList.remove('hidden');

    if (topIcon) topIcon.textContent = meta.icon;
    if (topTitle) topTitle.textContent = meta.title;
    if (deskTrilhaIcon) deskTrilhaIcon.className = 'fa-solid fa-map-location-dot text-base w-6';
    if (deskTrilhaLabel) deskTrilhaLabel.textContent = `Trilha: ${meta.title}`;
    if (mobTrilhaIcon) mobTrilhaIcon.className = 'fa-solid fa-map-location-dot text-base';
    if (mobTrilhaLabel) mobTrilhaLabel.textContent = 'Trilha';
  }
}

window.handlePrimaryNavClick = function() {
  window.switchMainTab('trilha');
};

window.goToHomeCatalog = function() {
  isCurrentlyInCourseView = false;
  updateNavigationContextUI();
  window.switchMainTab('trilha');
  document.getElementById('homeCatalogView')?.classList.remove('hidden');
  document.getElementById('courseTrailView')?.classList.add('hidden');
  window.renderHomeCatalog();
};

window.openCourseTrail = function(courseId) {
  isCurrentlyInCourseView = true;
  window.userState.activeCourse = courseId;
  updateNavigationContextUI();
  window.switchMainTab('trilha');
  document.getElementById('homeCatalogView')?.classList.add('hidden');
  document.getElementById('courseTrailView')?.classList.remove('hidden');

  window.loadActiveCourseScripts(courseId, () => {
    const meta = window.CATALOG_COURSES[window.userState.activeCourse];
    document.getElementById('bannerCourseCategory').textContent = meta.category;
    document.getElementById('bannerCourseTitle').textContent = `${meta.icon} ${meta.title}`;
    document.getElementById('grimorioCourseHeader').textContent = `Grimório de ${meta.title}`;

    window.renderTrilhaPath();
    window.renderGrimorioList();
    window.updateAllUserUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.playTone(540, 'triangle', 0.1);
  });
};

// =========================================================================
// 3. ATUALIZAÇÃO DE INTERFACE, PERFIL, PLACAR E CALENDÁRIO
// =========================================================================
window.updateAllUserUI = function() {
  const meta = window.CATALOG_COURSES[window.userState.activeCourse] || window.CATALOG_COURSES.psicopatologia;
  const level = Math.floor(window.userState.xp / 60) + 1;

  document.getElementById('topXpValue').textContent = window.userState.xp;
  document.getElementById('topCoinsValue').textContent = window.userState.coins;
  document.getElementById('profileDisplayName').textContent = window.userState.name;
  document.getElementById('deskProfileName').textContent = window.userState.name;
  document.getElementById('profileLevelNum').textContent = level;
  document.getElementById('deskLevel').textContent = level;
  document.getElementById('profileLastCourseBadge').textContent = `${meta.icon} ${meta.title}`;
  document.getElementById('profileStatXp').textContent = window.userState.xp;
  document.getElementById('profileStatCoins').textContent = `${window.userState.coins} 🧪`;
  document.getElementById('profileStatDays').textContent = `${window.userState.studiedDays.length} Dias`;

  const svgHtml = window.renderAvatarSvg(window.userState.avatar);
  const pBox = document.getElementById('profileAvatarBox');
  const dMini = document.getElementById('deskMiniAvatar');
  if (pBox) pBox.innerHTML = svgHtml;
  if (dMini) dMini.innerHTML = svgHtml;

  if (typeof window.renderAchievementsSection === 'function') window.renderAchievementsSection();
  renderMonthCalendar();
};

window.renderLeaderboards = function() {
  const sorted = [...window.friendsList].sort((a, b) => b.xp - a.xp);
  const fullList = document.getElementById('leaderboardList');
  const miniList = document.getElementById('deskMiniLeaderboard');

  if (fullList) {
    if (sorted.length === 0) {
      fullList.innerHTML = `<div class="p-4 text-center text-xs opacity-70">Nenhum estudante visível no placar ainda (sua conta ADM está oculta).</div>`;
    } else {
      fullList.innerHTML = sorted.map((f, idx) => `
        <div class="p-3.5 rounded-2xl border-2 ${f.isMe ? 'border-emerald-400 bg-emerald-950/20' : 'border-slate-700/80 bg-slate-900/60'} flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="w-6 text-center font-extrabold text-sm ${idx === 0 ? 'text-amber-400' : 'opacity-60'}">${idx + 1}º</span>
            <div class="w-12 h-12 rounded-2xl overflow-hidden border-2 border-slate-600 shrink-0 bg-slate-900">
              ${window.renderAvatarSvg(f.avatar)}
            </div>
            <div>
              <div class="font-bold text-sm flex items-center gap-1.5">
                <span>${f.name}</span>
                <span>${f.courseIcon || '🧩'}</span>
                ${f.isMe ? '<span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-extrabold">Você</span>' : ''}
              </div>
              <div class="text-[11px] font-bold text-emerald-400">
                ⚡ Sincronizado na Nuvem
              </div>
            </div>
          </div>
          <span class="font-extrabold text-sm text-amber-400">${f.xp} XP</span>
        </div>
      `).join('');
    }
  }

  if (miniList) {
    if (sorted.length === 0) {
      miniList.innerHTML = `<div class="text-xs opacity-60 p-2">Conta ADM Oculta do Placar</div>`;
    } else {
      miniList.innerHTML = sorted.slice(0, 5).map((f, idx) => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
          <div class="flex items-center gap-2 min-w-0">
            <span class="font-extrabold text-amber-400">${idx + 1}º</span>
            <div class="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-900">${window.renderAvatarSvg(f.avatar)}</div>
            <span class="font-bold truncate">${f.name}</span>
          </div>
          <span class="font-extrabold text-amber-300 shrink-0">${f.xp} XP</span>
        </div>
      `).join('');
    }
  }
};

function renderMonthCalendar() {
  const grid = document.getElementById('calendarGridContainer');
  if (!grid) return;
  grid.innerHTML = '';

  const now = new Date();
  const todayDay = now.getDate();

  for (let empty = 0; empty < 4; empty++) {
    grid.innerHTML += `<div class="h-10 rounded-xl bg-slate-900/20"></div>`;
  }

  for (let d = 1; d <= 31; d++) {
    const isStudied = window.userState.studiedDays.includes(d);
    const isToday = d === todayDay;
    grid.innerHTML += `
      <div class="h-10 rounded-xl flex flex-col items-center justify-center text-xs font-extrabold border ${
        isStudied
          ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow'
          : 'bg-slate-900/70 border-slate-800 opacity-75'
      } ${isToday ? 'ring-2 ring-amber-400' : ''}">
        <span>${d}</span>
        ${isStudied ? '<span class="text-[8px] leading-none">★</span>' : ''}
      </div>
    `;
  }
}

// =========================================================================
// 4. PAINEL EXCLUSIVO ADMIN (rphsaraiva@gmail.com)
// =========================================================================
function updateAdminUI() {
  const btn = document.getElementById('adminHideToggleBtn');
  if (!btn) return;
  if (window.userState.hideFromLeaderboard) {
    btn.className = 'btn-3d btn-green px-3 py-1.5 text-xs';
    btn.textContent = 'Oculto do Placar: SIM';
  } else {
    btn.className = 'btn-3d btn-surface px-3 py-1.5 text-xs text-amber-300';
    btn.textContent = 'Oculto do Placar: NÃO';
  }
}

window.openAdminModal = function() {
  if (!window.isCurrentUserAdmin) return;
  updateAdminUI();
  document.getElementById('adminPanelModal')?.classList.remove('hidden');
};

window.closeAdminModal = function() {
  document.getElementById('adminPanelModal')?.classList.add('hidden');
};

window.adminToggleLeaderboardVisibility = function() {
  if (!window.isCurrentUserAdmin) return;
  window.userState.hideFromLeaderboard = !window.userState.hideFromLeaderboard;
  window.saveUserState();
  updateAdminUI();
  window.fetchSupabaseLeaderboard();
};

window.adminModifyResources = function(xpDelta, coinsDelta) {
  if (!window.isCurrentUserAdmin) return;
  window.addReward(xpDelta, coinsDelta, 'Admin Boost');
};

window.adminResetMyResources = function() {
  if (!window.isCurrentUserAdmin) return;
  window.userState.xp = 0;
  window.userState.coins = 120;
  window.saveUserState();
  window.updateAllUserUI();
  window.closeAdminModal();
};

window.adminUnlockAllModules = function() {
  if (!window.isCurrentUserAdmin) return;
  window.generatedCourseModules.forEach(m => {
    m.stages.forEach(s => {
      window.userState.stageHistory[s.stageId] = { completedCount: 1, lastCompletedTimestamp: Date.now() };
    });
  });
  window.saveUserState();
  window.renderTrilhaPath();
  window.renderGrimorioList();
  window.renderHomeCatalog();
  window.soundSuccess();
  window.closeAdminModal();
};

// =========================================================================
// 5. NAVEGAÇÃO DE ABAS, TROCA DE NOME E TEMA
// =========================================================================
window.switchMainTab = function(tabName) {
  ['trilha', 'grimorio', 'perfil'].forEach(t => {
    const sec = document.getElementById(`sec${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const mobBtn = document.getElementById(`mobNav${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const deskBtn = document.getElementById(`deskNav${t.charAt(0).toUpperCase() + t.slice(1)}`);

    if (t === tabName) {
      sec?.classList.remove('hidden');
      if (mobBtn) {
        mobBtn.classList.remove('opacity-60', 'font-bold');
        mobBtn.classList.add('text-emerald-400', 'font-extrabold');
      }
      if (deskBtn) deskBtn.classList.replace('btn-surface', 'btn-green');
    } else {
      sec?.classList.add('hidden');
      if (mobBtn) {
        mobBtn.classList.remove('text-emerald-400', 'font-extrabold');
        mobBtn.classList.add('opacity-60', 'font-bold');
      }
      if (deskBtn) deskBtn.classList.replace('btn-green', 'btn-surface');
    }
  });
};

window.switchProfileSubTab = function(subName) {
  ['placar', 'conquistas', 'calendario'].forEach(s => {
    const box = document.getElementById(`profileSub${s.charAt(0).toUpperCase() + s.slice(1)}`);
    const btn = document.getElementById(`subBtn${s.charAt(0).toUpperCase() + s.slice(1)}`);
    if (s === subName) {
      box?.classList.remove('hidden');
      btn?.classList.replace('btn-surface', 'btn-green');
    } else {
      box?.classList.add('hidden');
      btn?.classList.replace('btn-green', 'btn-surface');
    }
  });
};

window.openChangeNameModal = function() {
  const nameInput = document.getElementById('newNameInput');
  if (nameInput) nameInput.value = window.userState.name;
  document.getElementById('changeNameModal')?.classList.remove('hidden');
};

window.closeChangeNameModal = function() {
  document.getElementById('changeNameModal')?.classList.add('hidden');
};

window.confirmNameChange = function() {
  const newName = document.getElementById('newNameInput')?.value.trim();
  if (!newName) return;
  if (window.userState.coins < 50 && !window.isCurrentUserAdmin) {
    window.soundError();
    alert('Você precisa de 50 🧪 Moedas de Alquimia para mudar o apelido!');
    return;
  }
  if (!window.isCurrentUserAdmin) window.userState.coins -= 50;
  window.userState.name = newName;
  localStorage.setItem('docslab_custom_named', 'true');
  window.saveUserState();
  window.soundSuccess();
  window.updateAllUserUI();
  window.fetchSupabaseLeaderboard();
  window.closeChangeNameModal();
};

window.toggleTheme = function() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('docslab_theme', next);
  const iconEl = document.getElementById('themeToggleIcon');
  if (iconEl) {
    iconEl.className = next === 'dark' ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-indigo-600';
  }
};

const MASCOT_QUOTES = [
  '"Doc diz: Suas conquistas têm 5 Níveis de Insígnia (do Bronze ao Diamante)!"',
  '"Doc diz: Gastar moedas na loja não diminui seu progresso na conquista Magnata da Alquimia!"',
  '"Doc diz: Complete as 4 etapas de um módulo para ganhar +25 XP e +15 🧪 de Bônus!"'
];
window.mascotSpeak = function() {
  const q = MASCOT_QUOTES[Math.floor(Math.random() * MASCOT_QUOTES.length)];
  const el = document.getElementById('mascotSpeechText');
  if (el) el.textContent = q;
  window.playTone(620, 'sine', 0.08);
};

window.openApkModal = () => document.getElementById('apkDownloadModal')?.classList.remove('hidden');
window.closeApkModal = () => document.getElementById('apkDownloadModal')?.classList.add('hidden');

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('docslab_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const iconEl = document.getElementById('themeToggleIcon');
  if (iconEl) {
    iconEl.className = savedTheme === 'dark' ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-indigo-600';
  }

  // Injeta o Mascote Único "Doc" em todos os slots da interface
  window.injectDocMascotEverywhere();

  isCurrentlyInCourseView = false;
  updateNavigationContextUI();
  window.renderHomeCatalog();
  window.loadActiveCourseScripts(window.userState.activeCourse, () => {
    window.updateAllUserUI();
    window.renderHomeCatalog();
  });
});