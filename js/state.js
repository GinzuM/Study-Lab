// =========================================================================
// js/state.js — Gerenciamento de Estado, Estatísticas Vitalícias e Nuvem
// =========================================================================

window.ADMIN_EMAIL = 'rphsaraiva@gmail.com';

window.SEASON_CONFIG = {
  id: 'provas_finais',
  title: 'Temporada: Provas de Final de Semestre',
  subtitle: '9 disciplinas completas organizadas em blocos de revisão, quizzes, flashcards e simulados.'
};

window.CATALOG_COURSES = {
  desenvolvimento_humano: {
    id: 'desenvolvimento_humano',
    season: 'provas_finais',
    title: 'Desenvolvimento Humano',
    icon: '🌱',
    accentBg: 'from-lime-500/25 to-emerald-600/20',
    accentBorder: 'border-lime-500/40',
    badgeColor: 'text-lime-300 bg-lime-500/20',
    category: 'Ciclo Vital',
    totalModules: 5,
    totalStages: 21,
    dtPath: 'cursos/desenvolvimento_humano/dt_desenvolvimento_humano.js',
    qPath: 'cursos/desenvolvimento_humano/q_desenvolvimento_humano.js'
  },
  epidemiologia: {
    id: 'epidemiologia',
    season: 'provas_finais',
    title: 'Epidemiologia e Saúde Coletiva',
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
  etica_profissional: {
    id: 'etica_profissional',
    season: 'provas_finais',
    title: 'Ética Profissional e Cidadania',
    icon: '⚖️',
    accentBg: 'from-amber-500/25 to-yellow-600/20',
    accentBorder: 'border-amber-500/40',
    badgeColor: 'text-amber-300 bg-amber-500/20',
    category: 'Deontologia',
    totalModules: 3,
    totalStages: 13,
    dtPath: 'cursos/etica_profissional/dt_etica_profissional.js',
    qPath: 'cursos/etica_profissional/q_etica_profissional.js'
  },
  psicologia_escolar: {
    id: 'psicologia_escolar',
    season: 'provas_finais',
    title: 'Psicologia Escolar e Educacional',
    icon: '🏫',
    accentBg: 'from-orange-500/25 to-red-600/20',
    accentBorder: 'border-orange-500/40',
    badgeColor: 'text-orange-300 bg-orange-500/20',
    category: 'Educação',
    totalModules: 4,
    totalStages: 17,
    dtPath: 'cursos/psicologia_escolar/dt_psicologia_escolar.js',
    qPath: 'cursos/psicologia_escolar/q_psicologia_escolar.js'
  },
  psicopatologia: {
    id: 'psicopatologia',
    season: 'provas_finais',
    title: 'Psicopatologia e Sociedade',
    icon: '🧩',
    accentBg: 'from-emerald-500/25 to-teal-600/20',
    accentBorder: 'border-emerald-500/40',
    badgeColor: 'text-emerald-300 bg-emerald-500/20',
    category: 'Saúde Mental',
    totalModules: 8,
    totalStages: 33,
    dtPath: 'cursos/psicopatologia/dt_psicopatologia.js',
    qPath: 'cursos/psicopatologia/q_psicopatologia.js'
  },
  psicofarmacologia: {
    id: 'psicofarmacologia',
    season: 'provas_finais',
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
  avaliacao_personalidade: {
    id: 'avaliacao_personalidade',
    season: 'provas_finais',
    title: 'Técnicas de Exames e Personalidade',
    icon: '🔍',
    accentBg: 'from-indigo-500/25 to-blue-600/20',
    accentBorder: 'border-indigo-500/40',
    badgeColor: 'text-indigo-300 bg-indigo-500/20',
    category: 'Avaliação Psicológica',
    totalModules: 4,
    totalStages: 17,
    dtPath: 'cursos/avaliacao_personalidade/dt_avaliacao_personalidade.js',
    qPath: 'cursos/avaliacao_personalidade/q_avaliacao_personalidade.js'
  },
  teorias_psicoterapicas: {
    id: 'teorias_psicoterapicas',
    season: 'provas_finais',
    title: 'Teorias e Técnicas Psicoterápicas',
    icon: '🛋️',
    accentBg: 'from-violet-500/25 to-fuchsia-600/20',
    accentBorder: 'border-violet-500/40',
    badgeColor: 'text-violet-300 bg-violet-500/20',
    category: 'Clínica',
    totalModules: 5,
    totalStages: 21,
    dtPath: 'cursos/teorias_psicoterapicas/dt_teorias_psicoterapicas.js',
    qPath: 'cursos/teorias_psicoterapicas/q_teorias_psicoterapicas.js'
  },
  processos_basicos: {
    id: 'processos_basicos',
    season: 'provas_finais',
    title: 'Processos Psicológicos Básicos',
    icon: '⚡',
    accentBg: 'from-cyan-500/25 to-blue-600/20',
    accentBorder: 'border-cyan-500/40',
    badgeColor: 'text-cyan-300 bg-cyan-500/20',
    category: 'Cognição e Neuro',
    totalModules: 5,
    totalStages: 21,
    dtPath: 'cursos/processos_basicos/dt_processos_basicos.js',
    qPath: 'cursos/processos_basicos/q_processos_basicos.js'
  }
};

const DEFAULT_UNLOCKED_ITEMS = [
  '#ffe3d1', '#fcd0b4', '#e8b48a', '#c68642', '#8d5524', '#4b2810',
  '#18181b', '#451a03', '#7f432b', '#eab308',
  '#090d16', '#78350f',
  '#dc2626', '#16a34a', '#2563eb', '#15803d', '#f8fafc',
  '#334155', '#1e3a8a',
  '#1e1b4b', '#bceeff', '#064e3b',
  'sp_short_clean', 'sp_curly_messy', 'sp_bob_long', 'none',
  'shirt_basic', 'shirt_raglan',
  'sp_standard', 'sp_look_side',
  'lid_bored_blush', 'lid_half_skin',
  'brow_normal', 'brow_angry',
  'mouth_frown_small', 'mouth_smile',
  'pants_jeans_stitch', 'pants_plain',
  'shoes_classic_flat', 'shoes_sneakers'
];

const DEFAULT_AVATAR_CONFIG = {
  skinTone: '#fcd0b4',
  hairColor: '#18181b',
  eyeColor: '#090d16',
  bodyColor: '#dc2626',
  stripeColor: '#15803d',
  hatColor: '#2563eb',
  gloveColor: '#dc2626',
  pantsColor: '#334155',
  shoeColor: '#dc2626',
  bgColor: '#1e1b4b',
  hair: 'sp_curly_messy',
  eyelids: 'lid_bored_blush',
  eyes: 'sp_standard',
  eyebrows: 'brow_normal',
  mouth: 'mouth_frown_small',
  body: 'shirt_raglan',
  gloves: 'none',
  pants: 'pants_jeans_stitch',
  shoes: 'shoes_sneakers',
  hat: 'none',
  faceAcc: 'none'
};

function createDefaultStats() {
  return {
    lifetimeCoinsEarned: 120,
    totalQuestionsCorrect: 0,
    totalTopicsRead: 0,
    totalFlashcardsMastered: 0,
    currentStreakDays: 0,
    maxStreakDays: 0,
    lastStudyDateISO: null,
    claimedAchievementTiers: {},
    courseStats: {
      desenvolvimento_humano: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      epidemiologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      etica_profissional: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      psicologia_escolar: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      psicopatologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      psicofarmacologia: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      avaliacao_personalidade: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      teorias_psicoterapicas: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 },
      processos_basicos: { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 }
    }
  };
}

window.userState = JSON.parse(localStorage.getItem('docslab_state_v5')) || {
  name: 'Estudante',
  xp: 0,
  coins: 120,
  activeCourse: 'desenvolvimento_humano',
  studiedDays: [],
  unlockedItems: [...DEFAULT_UNLOCKED_ITEMS],
  stageHistory: {},
  unlockedModulesBonus: {},
  unlockedGrimorioTopics: {},
  isOnboarded: false,
  hideFromLeaderboard: false,
  stats: createDefaultStats(),
  avatar: { ...DEFAULT_AVATAR_CONFIG }
};

if (!window.userState.stats) window.userState.stats = createDefaultStats();
if (!window.userState.stats.courseStats) window.userState.stats.courseStats = createDefaultStats().courseStats;
Object.keys(window.CATALOG_COURSES).forEach(courseId => {
  if (!window.userState.stats.courseStats[courseId]) {
    window.userState.stats.courseStats[courseId] = { readCount: 0, quizCorrect: 0, flashcardsDone: 0, simuladoDone: 0 };
  }
});
if (!window.userState.stats.claimedAchievementTiers) window.userState.stats.claimedAchievementTiers = {};
if (typeof window.userState.stats.lifetimeCoinsEarned !== 'number') {
  window.userState.stats.lifetimeCoinsEarned = Math.max(120, window.userState.coins || 120);
}
if (!Array.isArray(window.userState.unlockedItems)) {
  window.userState.unlockedItems = [...DEFAULT_UNLOCKED_ITEMS];
} else {
  DEFAULT_UNLOCKED_ITEMS.forEach(itemId => {
    if (!window.userState.unlockedItems.includes(itemId)) {
      window.userState.unlockedItems.push(itemId);
    }
  });
}
window.userState.avatar = { ...DEFAULT_AVATAR_CONFIG, ...(window.userState.avatar || {}) };

window.isCurrentUserAdmin = false;
window.friendsList = [];

window.saveUserState = function() {
  localStorage.setItem('docslab_state_v5', JSON.stringify(window.userState));
  window.syncProfileToSupabase();
};

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

window.getSeasonProgressInfo = function(seasonId = 'provas_finais') {
  const courses = Object.values(window.CATALOG_COURSES).filter(c => c.season === seasonId);
  if (courses.length === 0) return { percent: 0, completedCourses: 0, totalCourses: 0 };
  let totalPct = 0;
  let completedCourses = 0;
  courses.forEach(c => {
    const info = window.getCourseProgressInfo(c.id);
    totalPct += info.percent;
    if (info.percent >= 100) completedCourses++;
  });
  return {
    percent: Math.round(totalPct / courses.length),
    completedCourses,
    totalCourses: courses.length
  };
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
  const meta = window.CATALOG_COURSES[window.userState.activeCourse] || window.CATALOG_COURSES.desenvolvimento_humano;
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
