// =========================================================================
// js/state.js — Gerenciamento de Estado, Estatísticas Vitalícias e Nuvem
// =========================================================================

window.ADMIN_EMAIL = 'rphsaraiva@gmail.com';

window.CATALOG_COURSES = {
  psicofarmacologia: {
    id: 'psicofarmacologia',
    title: 'Psicofarmacologia',
    icon: '🧠',
    accentBg: 'from-pink-500/25 to-purple-600/20',
    accentBorder: 'border-pink-500/40',
    badgeColor: 'text-pink-300 bg-pink-500/20',
    category: 'Neurociência',
    totalModules: 6,
    totalStages: 25,
    dtPath: 'cursos/psicofarmacologia/dt_psicofarmacologia.js',
    qPath: 'cursos/psicofarmacologia/q_psicofarmacologia.js'
  },
  epidemiologia: {
    id: 'epidemiologia',
    title: 'Epidemiologia',
    icon: '📊',
    accentBg: 'from-sky-500/25 to-emerald-600/20',
    accentBorder: 'border-sky-500/40',
    badgeColor: 'text-sky-300 bg-sky-500/20',
    category: 'Saúde Coletiva',
    totalModules: 8,
    totalStages: 33,
    dtPath: 'cursos/epidemiologia/dt_epidemiologia.js',
    qPath: 'cursos/epidemiologia/q_epidemiologia.js'
  },
  psicopatologia: {
    id: 'psicopatologia',
    title: 'Psicopatologia',
    icon: '🧩',
    accentBg: 'from-emerald-500/25 to-teal-600/20',
    accentBorder: 'border-emerald-500/40',
    badgeColor: 'text-emerald-300 bg-emerald-500/20',
    category: 'Saúde Mental',
    totalModules: 8,
    totalStages: 33,
    dtPath: 'cursos/psicopatologia/dt_psicopatologia.js',
    qPath: 'cursos/psicopatologia/q_psicopatologia.js'
  }
};

const DEFAULT_UNLOCKED_ITEMS = [
  '#fde6d8', '#f9d4b8', '#e5b887', '#c68642', '#8d5524', '#4b2810',
  '#1e293b', '#451a03', '#92400e', '#facc15',
  '#0f172a', '#78350f', '#0284c7', '#16a34a',
  'style_short', 'style_bob', 'style_long', 'style_curly', 'style_bald',
  'happy', 'confident', 'smile', 'smirk', 'none', 'hoodie', 'tshirt',
  '#2563eb', '#7c3aed', '#1e1b4b', '#064e3b', '#3b0764'
];

function createDefaultStats() {
  return {
    lifetimeCoinsEarned: 120, // Sobe sempre que ganha moeda, nunca desce ao gastar!
    totalQuestionsCorrect: 0,
    totalTopicsRead: 0,
    totalFlashcardsMastered: 0,
    currentStreakDays: 0,
    maxStreakDays: 0,
    lastStudyDateISO: null,
    claimedAchievementTiers: {}, // { 'ach_xp_tier_0': true }
    courseStats: {
      psicofarmacologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      epidemiologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      psicopatologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 }
    }
  };
}

window.userState = JSON.parse(localStorage.getItem('docslab_state_v5')) || {
  name: 'Estudante',
  xp: 0,
  coins: 120,
  activeCourse: 'psicopatologia',
  studiedDays: [],
  unlockedItems: [...DEFAULT_UNLOCKED_ITEMS],
  stageHistory: {},
  unlockedModulesBonus: {},
  unlockedGrimorioTopics: {},
  isOnboarded: false,
  hideFromLeaderboard: false,
  stats: createDefaultStats(),
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

// Migração segura caso o usuário já tenha dados salvos
if (!window.userState.stats) window.userState.stats = createDefaultStats();
if (!window.userState.stats.courseStats) window.userState.stats.courseStats = createDefaultStats().courseStats;
if (!window.userState.stats.claimedAchievementTiers) window.userState.stats.claimedAchievementTiers = {};
if (typeof window.userState.stats.lifetimeCoinsEarned !== 'number') {
  window.userState.stats.lifetimeCoinsEarned = Math.max(120, window.userState.coins || 120);
}

window.isCurrentUserAdmin = false;
window.friendsList = [];

window.saveUserState = function() {
  localStorage.setItem('docslab_state_v5', JSON.stringify(window.userState));
  window.syncProfileToSupabase();
};

// Incrementa estatísticas específicas de estudo e verifica conquistas
window.recordStudyMetric = function(metricType, amount = 1, courseId = null) {
  const targetCourse = courseId || window.userState.activeCourse;
  if (!window.userState.stats.courseStats[targetCourse]) {
    window.userState.stats.courseStats[targetCourse] = { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 };
  }

  if (metricType === 'read') {
    window.userState.stats.totalTopicsRead += amount;
    window.userState.stats.courseStats[targetCourse].readCount += amount;
  } else if (metricType === 'quiz_correct') {
    window.userState.stats.totalQuestionsCorrect += amount;
    window.userState.stats.courseStats[targetCourse].quizCorrect += amount;
  } else if (metricType === 'flashcard') {
    window.userState.stats.totalFlashcardsMastered += amount;
    window.userState.stats.courseStats[targetCourse].flashcardsDone += amount;
  } else if (metricType === 'simulado') {
    window.userState.stats.courseStats[targetCourse].simuladoDone += amount;
  }

  window.saveUserState();
};

// Registra o dia estudado e calcula dias seguidos (Streak sem reset punitivo no calendário, mas rastreado para conquista)
window.markDayStudied = function() {
  const now = new Date();
  const todayDay = now.getDate();
  const todayISO = now.toISOString().split('T')[0];

  if (!window.userState.studiedDays.includes(todayDay)) {
    window.userState.studiedDays.push(todayDay);
  }

  const lastISO = window.userState.stats.lastStudyDateISO;
  if (lastISO !== todayISO) {
    if (lastISO) {
      const lastDate = new Date(lastISO);
      const diffDays = Math.round((new Date(todayISO) - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        window.userState.stats.currentStreakDays = (window.userState.stats.currentStreakDays || 1) + 1;
      } else {
        window.userState.stats.currentStreakDays = 1;
      }
    } else {
      window.userState.stats.currentStreakDays = 1;
    }
    window.userState.stats.lastStudyDateISO = todayISO;
    window.userState.stats.maxStreakDays = Math.max(
      window.userState.stats.maxStreakDays || 1,
      window.userState.stats.currentStreakDays,
      window.userState.studiedDays.length > 0 ? 1 : 0
    );
  }

  window.saveUserState();
  if (typeof window.updateAllUserUI === 'function') window.updateAllUserUI();
};

window.getCourseProgressInfo = function(courseId) {
  const meta = window.CATALOG_COURSES[courseId];
  if (!meta) return { percent: 0, completedStages: 0, completedModules: 0 };

  const completedKeys = Object.keys(window.userState.stageHistory).filter(k =>
    k.startsWith(`${courseId}_`) && window.userState.stageHistory[k]?.completedCount > 0
  );

  let completedMods = 0;
  for (let m = 1; m <= meta.totalModules; m++) {
    const r1 = window.userState.stageHistory[`${courseId}_m${m}_read1`]?.completedCount > 0;
    const r2 = window.userState.stageHistory[`${courseId}_m${m}_read2`]?.completedCount > 0;
    const qz = window.userState.stageHistory[`${courseId}_m${m}_quiz`]?.completedCount > 0;
    const fc = window.userState.stageHistory[`${courseId}_m${m}_fc`]?.completedCount > 0;
    if (r1 && r2 && qz && fc) completedMods++;
  }

  const pct = Math.min(100, Math.round((completedKeys.length / meta.totalStages) * 100));
  return { percent: pct, completedStages: completedKeys.length, completedModules: completedMods };
};

window.syncProfileToSupabase = async function() {
  if (!window.supabaseClient || !window.currentSessionUser) return;
  try {
    await window.supabaseClient.from('profiles').upsert({
      id: window.currentSessionUser.id,
      email: window.currentSessionUser.email,
      username: window.userState.name,
      total_xp: window.userState.xp,
      coins: window.userState.coins,
      last_course: window.userState.activeCourse,
      avatar_json: window.userState.avatar,
      state_json: {
        studiedDays: window.userState.studiedDays,
        unlockedItems: window.userState.unlockedItems,
        stageHistory: window.userState.stageHistory,
        unlockedModulesBonus: window.userState.unlockedModulesBonus,
        unlockedGrimorioTopics: window.userState.unlockedGrimorioTopics,
        stats: window.userState.stats
      },
      hide_from_leaderboard: Boolean(window.userState.hideFromLeaderboard),
      is_onboarded: Boolean(window.userState.isOnboarded),
      updated_at: new Date().toISOString()
    });
  } catch (e) {}
};

window.fetchSupabaseLeaderboard = async function() {
  const meta = window.CATALOG_COURSES[window.userState.activeCourse] || window.CATALOG_COURSES.psicopatologia;
  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('profiles')
        .select('*')
        .order('total_xp', { ascending: false })
        .limit(30);

      if (!error && data && data.length > 0) {
        const visibleProfiles = data.filter(p => !p.hide_from_leaderboard);
        window.friendsList = visibleProfiles.map(p => {
          const courseObj = window.CATALOG_COURSES[p.last_course] || meta;
          return {
            id: p.id,
            name: p.username || 'Estudante',
            xp: p.total_xp || 0,
            courseIcon: courseObj.icon,
            isMe: window.currentSessionUser && p.id === window.currentSessionUser.id,
            avatar: (p.avatar_json && Object.keys(p.avatar_json).length > 0) ? p.avatar_json : window.userState.avatar
          };
        });
        if (typeof window.renderLeaderboards === 'function') window.renderLeaderboards();
        return;
      }
    } catch (e) {}
  }

  window.friendsList = window.userState.hideFromLeaderboard ? [] : [
    {
      id: 'me',
      name: window.userState.name,
      xp: window.userState.xp,
      courseIcon: meta.icon,
      isMe: true,
      avatar: window.userState.avatar
    }
  ];
  if (typeof window.renderLeaderboards === 'function') window.renderLeaderboards();
};