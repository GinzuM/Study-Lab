// =========================================================================
// js/achievements.js — Motor de Insígnias Evolutivas (Tiers I a V)
// =========================================================================

const TIER_STYLES = [
  { roman: 'I', name: 'Bronze', bg: 'from-amber-900/40 to-orange-950/50', border: 'border-amber-600/60', badge: 'bg-amber-600 text-slate-950', bar: 'bg-amber-500' },
  { roman: 'II', name: 'Prata', bg: 'from-slate-700/40 to-slate-900/60', border: 'border-slate-300/70', badge: 'bg-slate-200 text-slate-950', bar: 'bg-slate-300' },
  { roman: 'III', name: 'Ouro', bg: 'from-yellow-600/30 to-amber-900/50', border: 'border-yellow-400', badge: 'bg-yellow-400 text-slate-950', bar: 'bg-yellow-400' },
  { roman: 'IV', name: 'Esmeralda', bg: 'from-emerald-700/35 to-teal-950/60', border: 'border-emerald-400', badge: 'bg-emerald-400 text-slate-950', bar: 'bg-emerald-400' },
  { roman: 'V', name: 'Diamante', bg: 'from-purple-600/40 to-indigo-950/70', border: 'border-purple-400 ring-2 ring-purple-500/30', badge: 'bg-gradient-to-r from-purple-400 to-cyan-300 text-slate-950', bar: 'bg-gradient-to-r from-purple-400 to-cyan-400' }
];

// 1. Catálogo de Conquistas Gerais Evolutivas (8 Categorias x 5 Tiers = 40 Marcos!)
const GENERAL_EVOLVING_ACHIEVEMENTS = [
  {
    id: 'ach_xp',
    icon: '⚡',
    title: 'Sábio do Laboratório',
    descTemplate: 'Acumule {target} de XP Total na sua conta',
    getMetric: () => window.userState.xp || 0,
    tiers: [
      { target: 50, xpReward: 15, coinsReward: 10 },
      { target: 250, xpReward: 30, coinsReward: 20 },
      { target: 750, xpReward: 60, coinsReward: 35 },
      { target: 1500, xpReward: 120, coinsReward: 60 },
      { target: 3500, xpReward: 250, coinsReward: 120 }
    ]
  },
  {
    id: 'ach_lifetime_coins',
    icon: '🧪',
    title: 'Magnata da Alquimia',
    descTemplate: 'Ganhe um total histórico de {target} Moedas (gastar na loja não diminui!)',
    getMetric: () => window.userState.stats?.lifetimeCoinsEarned || 120,
    tiers: [
      { target: 150, xpReward: 15, coinsReward: 10 },
      { target: 350, xpReward: 30, coinsReward: 20 },
      { target: 700, xpReward: 50, coinsReward: 35 },
      { target: 1500, xpReward: 100, coinsReward: 60 },
      { target: 3000, xpReward: 200, coinsReward: 100 }
    ]
  },
  {
    id: 'ach_streak_days',
    icon: '🔥',
    title: 'Chama Inabalável (Dias Seguidos)',
    descTemplate: 'Estude por {target} dias seguidos',
    getMetric: () => Math.max(window.userState.stats?.maxStreakDays || 0, window.userState.studiedDays.length > 0 ? 1 : 0),
    tiers: [
      { target: 2, xpReward: 20, coinsReward: 10 },
      { target: 5, xpReward: 40, coinsReward: 25 },
      { target: 10, xpReward: 80, coinsReward: 45 },
      { target: 20, xpReward: 150, coinsReward: 80 },
      { target: 30, xpReward: 300, coinsReward: 150 }
    ]
  },
  {
    id: 'ach_total_days',
    icon: '📅',
    title: 'Guardião do Calendário (Dias Totais)',
    descTemplate: 'Registre {target} dias ativos de estudo no calendário',
    getMetric: () => window.userState.studiedDays?.length || 0,
    tiers: [
      { target: 1, xpReward: 15, coinsReward: 10 },
      { target: 5, xpReward: 35, coinsReward: 20 },
      { target: 12, xpReward: 70, coinsReward: 40 },
      { target: 22, xpReward: 130, coinsReward: 70 },
      { target: 40, xpReward: 250, coinsReward: 130 }
    ]
  },
  {
    id: 'ach_questions_correct',
    icon: '🎯',
    title: 'Cirurgião Clínico (Acertos no Quiz)',
    descTemplate: 'Acerte {target} questões práticas nos Quizzes',
    getMetric: () => window.userState.stats?.totalQuestionsCorrect || 0,
    tiers: [
      { target: 5, xpReward: 15, coinsReward: 10 },
      { target: 20, xpReward: 35, coinsReward: 20 },
      { target: 50, xpReward: 75, coinsReward: 40 },
      { target: 100, xpReward: 140, coinsReward: 75 },
      { target: 250, xpReward: 280, coinsReward: 140 }
    ]
  },
  {
    id: 'ach_topics_read',
    icon: '📖',
    title: 'Devorador de Grimórios (Leituras)',
    descTemplate: 'Conclua a leitura guiada de {target} tópicos/capítulos',
    getMetric: () => window.userState.stats?.totalTopicsRead || 0,
    tiers: [
      { target: 2, xpReward: 15, coinsReward: 10 },
      { target: 6, xpReward: 30, coinsReward: 20 },
      { target: 15, xpReward: 65, coinsReward: 35 },
      { target: 30, xpReward: 120, coinsReward: 65 },
      { target: 60, xpReward: 240, coinsReward: 120 }
    ]
  },
  {
    id: 'ach_flashcards',
    icon: '🃏',
    title: 'Mestre da Memória (Flashcards)',
    descTemplate: 'Domine {target} cartões de revisão nas trilhas',
    getMetric: () => window.userState.stats?.totalFlashcardsMastered || 0,
    tiers: [
      { target: 5, xpReward: 15, coinsReward: 10 },
      { target: 15, xpReward: 30, coinsReward: 20 },
      { target: 35, xpReward: 60, coinsReward: 35 },
      { target: 75, xpReward: 110, coinsReward: 60 },
      { target: 150, xpReward: 220, coinsReward: 110 }
    ]
  },
  {
    id: 'ach_cosmetics',
    icon: '🎭',
    title: 'Colecionador do Ateliê',
    descTemplate: 'Desbloqueie {target} itens/cores para o seu personagem',
    getMetric: () => Math.max(0, (window.userState.unlockedItems?.length || 22) - 22),
    tiers: [
      { target: 1, xpReward: 20, coinsReward: 15 },
      { target: 3, xpReward: 40, coinsReward: 25 },
      { target: 7, xpReward: 80, coinsReward: 45 },
      { target: 14, xpReward: 150, coinsReward: 80 },
      { target: 25, xpReward: 300, coinsReward: 150 }
    ]
  }
];

// 2. Gera Conquistas Evolutivas Específicas para CADA Curso (Leitura, Módulos e Acertos da Matéria)
function buildCourseSpecificAchievements() {
  const list = [];
  Object.values(window.CATALOG_COURSES).forEach(c => {
    const cStats = window.userState.stats?.courseStats?.[c.id] || { readCount: 0, quizCorrect: 0 };
    const progInfo = window.getCourseProgressInfo(c.id);

    // A. Avanço de Módulos no Curso
    list.push({
      id: `course_${c.id}_mods`,
      icon: c.icon,
      title: `Explorador de ${c.title}`,
      descTemplate: `Complete {target} módulos completos na trilha de ${c.title}`,
      getMetric: () => progInfo.completedModules,
      tiers: [
        { target: 1, xpReward: 25, coinsReward: 15 },
        { target: 2, xpReward: 45, coinsReward: 25 },
        { target: 4, xpReward: 85, coinsReward: 45 },
        { target: 6, xpReward: 150, coinsReward: 80 },
        { target: c.totalModules, xpReward: 280, coinsReward: 140 }
      ]
    });

    // B. Leitura de Tópicos do Curso
    list.push({
      id: `course_${c.id}_read`,
      icon: '📚',
      title: `Erudito em ${c.title}`,
      descTemplate: `Conclua {target} leituras guiadas de ${c.title}`,
      getMetric: () => cStats.readCount || 0,
      tiers: [
        { target: 2, xpReward: 15, coinsReward: 10 },
        { target: 5, xpReward: 35, coinsReward: 20 },
        { target: 10, xpReward: 65, coinsReward: 35 },
        { target: 16, xpReward: 110, coinsReward: 60 },
        { target: 24, xpReward: 200, coinsReward: 100 }
      ]
    });

    // C. Questões Acertadas no Curso
    list.push({
      id: `course_${c.id}_quiz`,
      icon: '🩺',
      title: `Especialista Clínico: ${c.title}`,
      descTemplate: `Acerte {target} questões de ${c.title}`,
      getMetric: () => cStats.quizCorrect || 0,
      tiers: [
        { target: 5, xpReward: 20, coinsReward: 10 },
        { target: 15, xpReward: 40, coinsReward: 25 },
        { target: 30, xpReward: 80, coinsReward: 45 },
        { target: 50, xpReward: 140, coinsReward: 75 },
        { target: 80, xpReward: 250, coinsReward: 130 }
      ]
    });
  });
  return list;
}

// Calcula qual Tier está ativo para uma conquista e se há recompensa pronta para resgatar
function evaluateAchievementStatus(ach) {
  const currentVal = ach.getMetric();
  const claimedMap = window.userState.stats.claimedAchievementTiers || {};

  let activeTierIdx = 0;
  let canClaimReward = false;

  for (let i = 0; i < ach.tiers.length; i++) {
    const claimKey = `${ach.id}_t${i}`;
    if (!claimedMap[claimKey]) {
      activeTierIdx = i;
      if (currentVal >= ach.tiers[i].target) {
        canClaimReward = true;
      }
      break;
    }
    if (i === ach.tiers.length - 1) {
      activeTierIdx = i; // Todos os 5 Tiers já foram resgatados (Nível Máximo!)
    }
  }

  const tierObj = ach.tiers[activeTierIdx];
  const isMaxedOut = claimedMap[`${ach.id}_t${ach.tiers.length - 1}`] === true;
  const style = TIER_STYLES[activeTierIdx];
  const pct = Math.min(100, Math.round((currentVal / tierObj.target) * 100));

  return {
    currentVal,
    activeTierIdx,
    tierObj,
    isMaxedOut,
    canClaimReward,
    style,
    pct,
    desc: ach.descTemplate.replace('{target}', tierObj.target)
  };
}

function renderAchievementCardHtml(ach) {
  const st = evaluateAchievementStatus(ach);

  return `
    <div class="p-4 rounded-3xl border-2 bg-gradient-to-br ${st.style.bg} ${st.style.border} transition-all space-y-3 shadow-md">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3.5">
          <!-- Escudo de Insígnia com Nível Romano -->
          <div class="w-14 h-14 rounded-2xl bg-slate-950/80 border-2 ${st.style.border} flex flex-col items-center justify-center shrink-0 relative shadow">
            <span class="text-2xl leading-none">${ach.icon}</span>
            <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded mt-1 ${st.style.badge}">
              Nível ${st.style.roman}
            </span>
          </div>

          <div class="space-y-0.5">
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="text-sm sm:text-base font-bold">${ach.title}</h4>
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-black/40 border border-white/10">
                Insígnia ${st.style.name}
              </span>
            </div>
            <p class="text-xs opacity-85">${st.desc}</p>
          </div>
        </div>

        <!-- Botão de Resgatar ou Status -->
        <div class="shrink-0 text-right">
          ${st.isMaxedOut ? `
            <span class="inline-block text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
              👑 Nível Máx
            </span>
          ` : st.canClaimReward ? `
            <button onclick="claimAchievementTier('${ach.id}', ${st.activeTierIdx}, ${st.tierObj.xpReward}, ${st.tierObj.coinsReward})" class="btn-3d btn-amber px-3.5 py-2 text-xs animate-bounce">
              🎁 Resgatar +${st.tierObj.xpReward} XP
            </button>
          ` : `
            <span class="text-xs font-extrabold opacity-75">
              ${st.currentVal} / ${st.tierObj.target}
            </span>
          `}
        </div>
      </div>

      <!-- Barra de Progresso Evolutiva + Estrelas de Tier -->
      <div class="space-y-1.5">
        <div class="w-full h-3 bg-slate-950/80 rounded-full overflow-hidden p-0.5 border border-white/10">
          <div class="h-full ${st.style.bar} rounded-full transition-all duration-300" style="width: ${Math.max(5, st.pct)}%;"></div>
        </div>
        <div class="flex items-center justify-between text-[10px] font-extrabold opacity-75 px-1">
          <div class="flex items-center gap-1">
            ${[0, 1, 2, 3, 4].map(idx => {
              const done = window.userState.stats.claimedAchievementTiers[`${ach.id}_t${idx}`];
              return `<span class="${done ? 'text-amber-400' : 'opacity-30'}">★</span>`;
            }).join('')}
            <span class="ml-1">Tier ${st.activeTierIdx + 1} de 5</span>
          </div>
          <span>Prêmio do Nível: +${st.tierObj.xpReward} XP & +${st.tierObj.coinsReward} 🧪</span>
        </div>
      </div>
    </div>
  `;
}

window.claimAchievementTier = function(achId, tierIdx, xpReward, coinsReward) {
  const claimKey = `${achId}_t${tierIdx}`;
  if (window.userState.stats.claimedAchievementTiers[claimKey]) return;

  window.userState.stats.claimedAchievementTiers[claimKey] = true;
  window.soundSuccess();
  confetti({ particleCount: 75, spread: 85, origin: { y: 0.6 } });
  window.addReward(xpReward, coinsReward, `Insígnia Nível ${tierIdx + 1}!`);
  window.renderAchievementsSection();
};

window.renderAchievementsSection = function() {
  const genBox = document.getElementById('generalAchievementsContainer');
  const courseBox = document.getElementById('courseAchievementsContainer');
  if (!genBox) return;

  genBox.innerHTML = GENERAL_EVOLVING_ACHIEVEMENTS.map(ach => renderAchievementCardHtml(ach)).join('');

  if (courseBox) {
    const courseAchs = buildCourseSpecificAchievements();
    courseBox.innerHTML = courseAchs.map(ach => renderAchievementCardHtml(ach)).join('');
  }
};