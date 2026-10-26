// =========================================================================
// js/study_engines.js — Motores de Estudo (Trilha, Grimório, Quiz, Flashcards, Simulado)
// =========================================================================

window.loadedCourseData = { topics: [], tree: [], flashcards: [], quiz: [], simulado: [] };
window.generatedCourseModules = [];

// 1. Carregamento Dinâmico dos Scripts do Curso
window.loadActiveCourseScripts = function(courseKey, callback) {
  const meta = window.CATALOG_COURSES[courseKey] || window.CATALOG_COURSES.psicopatologia;
  window.userState.activeCourse = meta.id;
  window.saveUserState();

  document.querySelectorAll('script[data-dynamic-course]').forEach(s => s.remove());
  window.studyData = undefined;
  window.questionsData = undefined;

  const s1 = document.createElement('script');
  s1.src = meta.dtPath;
  s1.setAttribute('data-dynamic-course', 'dt');

  s1.onload = () => {
    const s2 = document.createElement('script');
    s2.src = meta.qPath;
    s2.setAttribute('data-dynamic-course', 'q');
    s2.onload = () => {
      window.loadedCourseData.topics = (typeof studyData !== 'undefined' && studyData.topics) ? studyData.topics : [];
      window.loadedCourseData.tree = (typeof studyData !== 'undefined' && studyData.tree) ? studyData.tree : [];
      window.loadedCourseData.flashcards = (typeof studyData !== 'undefined' && studyData.flashcards) ? studyData.flashcards : [];
      window.loadedCourseData.quiz = (typeof questionsData !== 'undefined' && questionsData.quiz) ? questionsData.quiz : [];
      window.loadedCourseData.simulado = (typeof questionsData !== 'undefined' && questionsData.simulado) ? questionsData.simulado : [];
      window.buildStructuredModules();
      if (callback) callback();
    };
    document.body.appendChild(s2);
  };
  document.body.appendChild(s1);
};

// 2. Construção dos Módulos (4 Etapas por Módulo + Simulado Final)
window.buildStructuredModules = function() {
  window.generatedCourseModules = [];
  const cId = window.userState.activeCourse;

  if (window.loadedCourseData.topics.length > 0) {
    window.userState.unlockedGrimorioTopics[`${cId}_${window.loadedCourseData.topics[0].id}`] = true;
  }

  window.loadedCourseData.topics.forEach((topic, idx) => {
    const cleanTitle = topic.title.replace(/^\d+\.\s*/, '');
    const allParagraphs = topic.content.split('\n').map(p => p.trim()).filter(Boolean);
    const half = Math.max(1, Math.ceil(allParagraphs.length / 2));
    const part1Paragraphs = allParagraphs.slice(0, half);
    const part2Paragraphs = allParagraphs.slice(half).length > 0 ? allParagraphs.slice(half) : allParagraphs;

    let moduleCards = window.loadedCourseData.flashcards.filter(fc => fc.topicId === topic.id);
    if (moduleCards.length < 3) {
      moduleCards = [...moduleCards, ...window.loadedCourseData.flashcards.slice(0, 4)].slice(0, 4);
    }

    const stages = [
      {
        stageId: `${cId}_m${idx + 1}_read1`,
        moduleIndex: idx,
        topicId: topic.id,
        type: 'reading',
        customParagraphs: part1Paragraphs,
        badge: `Etapa 1/4 • Teoria Base`,
        title: `📖 Fundamentos: ${cleanTitle}`,
        icon: 'fa-book-open',
        baseXp: 15,
        baseCoins: 6
      },
      {
        stageId: `${cId}_m${idx + 1}_read2`,
        moduleIndex: idx,
        topicId: topic.id,
        type: 'reading',
        customParagraphs: part2Paragraphs,
        badge: `Etapa 2/4 • Aprofundamento`,
        title: `🔬 Clínica & Prática: ${cleanTitle}`,
        icon: 'fa-microscope',
        baseXp: 15,
        baseCoins: 6
      },
      {
        stageId: `${cId}_m${idx + 1}_quiz`,
        moduleIndex: idx,
        topicId: topic.id,
        type: 'quiz',
        badge: `Etapa 3/4 • Prática Clínica`,
        title: `🩺 Questões: ${cleanTitle}`,
        icon: 'fa-stethoscope',
        baseXp: 30,
        baseCoins: 15
      },
      {
        stageId: `${cId}_m${idx + 1}_fc`,
        moduleIndex: idx,
        topicId: topic.id,
        type: 'flashcards',
        cardsPool: moduleCards,
        badge: `Etapa 4/4 • Fixação Rápida`,
        title: `🃏 Flashcards: ${cleanTitle}`,
        icon: 'fa-layer-group',
        baseXp: 25,
        baseCoins: 12
      }
    ];

    window.generatedCourseModules.push({
      moduleIndex: idx,
      moduleNumber: idx + 1,
      topicId: topic.id,
      title: cleanTitle,
      stages
    });
  });

  window.generatedCourseModules.push({
    moduleIndex: window.generatedCourseModules.length,
    moduleNumber: window.generatedCourseModules.length + 1,
    topicId: 'simulado_final',
    title: `Simulado Integrado de ${window.CATALOG_COURSES[cId].title}`,
    stages: [
      {
        stageId: `${cId}_simulado_final`,
        moduleIndex: window.generatedCourseModules.length,
        topicId: 'simulado_final',
        type: 'simulado',
        badge: `Exame Final da Trilha`,
        title: `🏆 Simulado Oficial Comentado`,
        icon: 'fa-trophy',
        baseXp: 60,
        baseCoins: 30
      }
    ]
  });
};

window.isModuleUnlocked = function(modIdx) {
  if (modIdx === 0) return true;
  const prevMod = window.generatedCourseModules[modIdx - 1];
  if (!prevMod) return true;
  return prevMod.stages.every(st => {
    const h = window.userState.stageHistory[st.stageId];
    return h && h.completedCount > 0;
  });
};

window.getStageRewardInfo = function(stage) {
  const hist = window.userState.stageHistory[stage.stageId];
  if (!hist || hist.completedCount === 0) {
    return { xp: stage.baseXp, coins: stage.baseCoins, label: `🌟 +${stage.baseXp} XP` };
  }
  const daysElapsed = (Date.now() - hist.lastCompletedTimestamp) / (1000 * 60 * 60 * 24);
  if (daysElapsed >= 7) {
    const revXp = Math.round(stage.baseXp * 0.7);
    return { xp: revXp, coins: Math.round(stage.baseCoins * 0.7), label: `🧠 Revisão (+${revXp} XP)` };
  }
  const repXp = Math.max(3, Math.round(stage.baseXp * 0.2));
  return { xp: repXp, coins: 2, label: `🔁 Repetir (+${repXp} XP)` };
};

window.markStageCompleted = function(stage, earnedXp, earnedCoins, reasonLabel) {
  if (!window.userState.stageHistory[stage.stageId]) {
    window.userState.stageHistory[stage.stageId] = { completedCount: 0, lastCompletedTimestamp: 0 };
  }
  window.userState.stageHistory[stage.stageId].completedCount += 1;
  window.userState.stageHistory[stage.stageId].lastCompletedTimestamp = Date.now();

  const cId = window.userState.activeCourse;
  window.userState.unlockedGrimorioTopics[`${cId}_${stage.topicId}`] = true;

  window.markDayStudied();
  window.addReward(earnedXp, earnedCoins, reasonLabel);

  const currentMod = window.generatedCourseModules[stage.moduleIndex];
  if (currentMod) {
    const allDone = currentMod.stages.every(s => window.userState.stageHistory[s.stageId]?.completedCount > 0);
    const bonusKey = `${cId}_mod_bonus_${currentMod.moduleNumber}`;
    if (allDone && !window.userState.unlockedModulesBonus[bonusKey]) {
      window.userState.unlockedModulesBonus[bonusKey] = true;
      const nextTopic = window.loadedCourseData.topics[stage.moduleIndex + 1];
      if (nextTopic) {
        window.userState.unlockedGrimorioTopics[`${cId}_${nextTopic.id}`] = true;
      }
      setTimeout(() => {
        window.soundSuccess();
        confetti({ particleCount: 90, spread: 100, origin: { y: 0.5 } });
        window.addReward(25, 15, `🔓 Módulo ${currentMod.moduleNumber} Completo! Bônus`);
      }, 650);
    }
  }

  window.saveUserState();
  window.renderTrilhaPath();
  window.renderGrimorioList();
  if (typeof window.renderHomeCatalog === 'function') window.renderHomeCatalog();
};

window.formatRichText = function(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-400 font-extrabold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-purple-300">$1</em>');
};

// 3. Renderização da Trilha e do Grimório
window.renderTrilhaPath = function() {
  const container = document.getElementById('trilhaNodesContainer');
  if (!container) return;
  container.innerHTML = '';

  const offsets = [0, 46, 0, -46];
  let foundCurrentActiveStage = false;

  window.generatedCourseModules.forEach((mod, modIdx) => {
    const modUnlocked = window.isModuleUnlocked(modIdx);
    const modDone = mod.stages.every(s => window.userState.stageHistory[s.stageId]?.completedCount > 0);

    const modBanner = document.createElement('div');
    modBanner.className = `w-full max-w-lg my-4 p-4 rounded-3xl border-2 flex items-center justify-between gap-3 ${
      modDone
        ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
        : modUnlocked
          ? 'bg-slate-900/90 border-purple-500/50 text-white shadow-lg'
          : 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-65'
    }`;

    modBanner.innerHTML = `
      <div class="space-y-0.5">
        <div class="text-[10px] font-extrabold uppercase tracking-widest ${modDone ? 'text-emerald-400' : modUnlocked ? 'text-purple-400' : 'text-slate-500'}">
          ${modDone ? '✅ Módulo Concluído' : modUnlocked ? `🔓 Módulo 0${mod.moduleNumber} Ativo` : `🔒 Módulo 0${mod.moduleNumber} Bloqueado`}
        </div>
        <h3 class="text-sm sm:text-base font-bold leading-snug">${mod.title}</h3>
      </div>
      <div class="text-right shrink-0">
        <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-xl border ${
          modDone ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300' : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
        }">
          ${modDone ? 'Bônus Recebido' : '🎁 +25 XP / +15 🧪'}
        </span>
      </div>
    `;
    container.appendChild(modBanner);

    mod.stages.forEach((stage, stIdx) => {
      const hist = window.userState.stageHistory[stage.stageId];
      const isDone = hist && hist.completedCount > 0;
      const rewardInfo = window.getStageRewardInfo(stage);

      let stateClass = 'node-available';
      if (isDone) {
        stateClass = 'node-completed';
      } else if (modUnlocked && !foundCurrentActiveStage) {
        stateClass = 'node-current';
        foundCurrentActiveStage = true;
      }

      const wrapper = document.createElement('div');
      wrapper.className = `path-node-wrapper ${!modUnlocked ? 'opacity-50' : ''}`;
      wrapper.style.transform = `translateX(${offsets[stIdx % offsets.length]}px)`;

      wrapper.innerHTML = `
        <button class="btn-3d path-node-btn ${stateClass}" onclick="launchTrailStage('${stage.stageId}', ${modUnlocked})">
          <i class="fa-solid ${isDone ? 'fa-check' : !modUnlocked ? 'fa-lock' : stage.icon}"></i>
        </button>
        <div class="mt-2 text-center max-w-[210px]">
          <span class="text-[9px] font-extrabold uppercase tracking-wider opacity-65 block">${stage.badge}</span>
          <div class="text-xs font-extrabold leading-tight">${stage.title}</div>
          <span class="inline-block mt-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400">
            ${rewardInfo.label}
          </span>
        </div>
      `;
      container.appendChild(wrapper);
    });
  });
};

window.launchTrailStage = function(stageId, modUnlocked) {
  if (!modUnlocked && !window.isCurrentUserAdmin) {
    window.soundError();
    alert('🔒 Conclua todas as 4 etapas do módulo anterior para desbloquear este módulo e ganhar seu bônus!');
    return;
  }

  let foundStage = null;
  window.generatedCourseModules.forEach(m => {
    m.stages.forEach(s => {
      if (s.stageId === stageId) foundStage = s;
    });
  });
  if (!foundStage) return;

  if (foundStage.type === 'reading') {
    window.openPaginatedReading(foundStage.topicId, foundStage);
  } else if (foundStage.type === 'quiz') {
    startStageQuiz(foundStage);
  } else if (foundStage.type === 'flashcards') {
    openStageFlashcards(foundStage);
  } else if (foundStage.type === 'simulado') {
    openStageSimulado(foundStage);
  }
};

function isTopicUnlockedInGrimorio(topicId, topicIdx) {
  if (window.isCurrentUserAdmin) return true;
  const cId = window.userState.activeCourse;
  if (topicIdx === 0) return true;
  if (window.userState.unlockedGrimorioTopics[`${cId}_${topicId}`]) return true;
  return window.isModuleUnlocked(topicIdx);
}

window.renderGrimorioList = function() {
  const listEl = document.getElementById('grimorioTopicsList');
  if (!listEl) return;
  const query = (document.getElementById('grimorioSearchInput')?.value || '').toLowerCase().trim();
  listEl.innerHTML = '';

  window.loadedCourseData.topics.forEach((topic, idx) => {
    const unlocked = isTopicUnlockedInGrimorio(topic.id, idx);
    if (query && !topic.title.toLowerCase().includes(query) && !topic.content.toLowerCase().includes(query)) {
      return;
    }

    const card = document.createElement('div');
    if (unlocked) {
      card.className = 'duo-card hover:border-purple-400 transition cursor-pointer flex items-center justify-between gap-4';
      card.onclick = () => window.openPaginatedReading(topic.id, null);
      card.innerHTML = `
        <div class="space-y-1 flex-1">
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <i class="fa-solid fa-unlock mr-1"></i> Capítulo 0${idx + 1} Liberado
          </span>
          <h3 class="text-base font-bold mt-1">${topic.title}</h3>
          <p class="text-xs opacity-70 line-clamp-2">${topic.content.replace(/\*\*/g, '')}</p>
        </div>
        <button class="btn-3d btn-purple px-4 py-2.5 text-xs shrink-0">
          <i class="fa-solid fa-book-open"></i> Ler Etapas
        </button>
      `;
    } else {
      card.className = 'duo-card opacity-55 border-dashed flex items-center justify-between gap-4 select-none';
      card.innerHTML = `
        <div class="space-y-1 flex-1">
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-lg bg-slate-800 text-slate-400">
            <i class="fa-solid fa-lock mr-1"></i> Capítulo 0${idx + 1} Bloqueado
          </span>
          <h3 class="text-base font-bold mt-1">${topic.title}</h3>
          <p class="text-xs opacity-75">Complete o Módulo 0${idx} na Trilha para desbloquear este capítulo.</p>
        </div>
        <div class="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
          <i class="fa-solid fa-lock"></i>
        </div>
      `;
    }
    listEl.appendChild(card);
  });
};

// 4. Motor de Leitura Paginada (Dr. Bubo + Corvo Edgar)
let activeReadingPages = [];
let currentReaderPageIdx = 0;
let activeReadingStageObj = null;
let activeReadingTopicObj = null;

const CROW_COMMENTS_POOL = [
  'Sublinhe mentalmente os termos em destaque verde: as bancas adoram cobrar exatamente esses conceitos!',
  'Repare na distinção que o Dr. Bubo acabou de fazer. Não confunda a definição geral com o exemplo prático!',
  'Dica do Corvo Edgar: Tente resumir este parágrafo em uma frase antes de avançar para a próxima página!',
  'Guarde esta palavra-chave! Ela vai aparecer nas questões práticas e nos flashcards deste módulo!'
];

window.openPaginatedReading = function(topicId, stageObj = null) {
  const topic = window.loadedCourseData.topics.find(t => t.id === topicId) || window.loadedCourseData.topics[0];
  if (!topic) return;

  activeReadingTopicObj = topic;
  activeReadingStageObj = stageObj;

  const paragraphsToUse = (stageObj && stageObj.customParagraphs && stageObj.customParagraphs.length > 0)
    ? stageObj.customParagraphs
    : topic.content.split('\n').map(p => p.trim()).filter(Boolean);

  activeReadingPages = paragraphsToUse.map((p, idx) => ({
    text: p,
    crowTip: (idx === paragraphsToUse.length - 1 && topic.mnemonic)
      ? topic.mnemonic.replace(/^💡\s*Mnemônico:\s*/i, '')
      : CROW_COMMENTS_POOL[idx % CROW_COMMENTS_POOL.length]
  }));

  currentReaderPageIdx = 0;
  document.getElementById('readerTitle').textContent = stageObj ? stageObj.title : topic.title;
  document.getElementById('grimorioReaderModal').classList.remove('hidden');
  renderCurrentReaderPage();
};

function renderCurrentReaderPage() {
  const page = activeReadingPages[currentReaderPageIdx];
  if (!page) return;

  const total = activeReadingPages.length;
  const pct = Math.round(((currentReaderPageIdx + 1) / total) * 100);

  document.getElementById('readerPageCounter').textContent = `Página ${currentReaderPageIdx + 1} de ${total}`;
  document.getElementById('readerProgressBar').style.width = `${pct}%`;
  document.getElementById('readerStepContent').innerHTML = window.formatRichText(page.text);
  document.getElementById('readerCrowComment').innerHTML = window.formatRichText(page.crowTip);

  document.getElementById('btnReaderPrev').disabled = currentReaderPageIdx === 0;
  const nextBtn = document.getElementById('btnReaderNext');
  nextBtn.innerHTML = currentReaderPageIdx === total - 1
    ? `<i class="fa-solid fa-check-double"></i> Concluir Etapa (+XP)`
    : `Próxima Página →`;
}

window.prevReaderPage = function() {
  if (currentReaderPageIdx > 0) {
    currentReaderPageIdx--;
    window.playTone(400, 'sine', 0.05);
    renderCurrentReaderPage();
  }
};

window.nextReaderPage = function() {
  if (currentReaderPageIdx < activeReadingPages.length - 1) {
    currentReaderPageIdx++;
    window.playTone(520, 'sine', 0.06);
    renderCurrentReaderPage();
  } else {
    window.soundSuccess();
    confetti({ particleCount: 40, spread: 65, origin: { y: 0.7 } });
    window.recordStudyMetric('read', 1);

    if (activeReadingStageObj) {
      const rw = window.getStageRewardInfo(activeReadingStageObj);
      window.markStageCompleted(activeReadingStageObj, rw.xp, rw.coins, 'Leitura Concluída');
    } else if (activeReadingTopicObj) {
      window.markDayStudied();
      window.addReward(10, 4, 'Revisão no Grimório');
    }
    window.closeGrimorioReader();
  }
};

window.closeGrimorioReader = function() {
  document.getElementById('grimorioReaderModal').classList.add('hidden');
};

// 5. Motor de Quiz Prático
let activeQuizPool = [];
let currentQuizIdx = 0;
let selectedOptionIdx = null;
let activeQuizStage = null;
let skippedQuestionsCount = 0;

function startStageQuiz(stage) {
  activeQuizStage = stage;
  const questions = window.loadedCourseData.quiz.filter(q => q.topicId === stage.topicId);
  activeQuizPool = questions.length > 0 ? [...questions] : [...window.loadedCourseData.quiz.slice(0, 4)];
  currentQuizIdx = 0;
  skippedQuestionsCount = 0;

  const rw = window.getStageRewardInfo(stage);
  document.getElementById('quizXpModeBadge').textContent = rw.label;
  document.getElementById('lessonQuizModal').classList.remove('hidden');
  renderCurrentQuizStep();
}

function renderCurrentQuizStep() {
  selectedOptionIdx = null;
  const q = activeQuizPool[currentQuizIdx];
  if (!q) return;

  const pct = Math.round(((currentQuizIdx) / activeQuizPool.length) * 100);
  document.getElementById('quizProgressBar').style.width = `${Math.max(12, pct)}%`;
  document.getElementById('quizStepCounter').textContent = `Questão ${currentQuizIdx + 1} de ${activeQuizPool.length}`;
  document.getElementById('quizQuestionTitle').textContent = q.question;
  document.getElementById('quizHintText').textContent = q.hint ? `💡 Dica: ${q.hint}` : '';

  const optsContainer = document.getElementById('quizOptionsList');
  optsContainer.innerHTML = '';

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'w-full btn-3d btn-surface p-3.5 text-left justify-start text-xs sm:text-sm font-bold quiz-opt-btn';
    btn.innerHTML = `
      <span class="w-7 h-7 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-extrabold shrink-0 text-emerald-400">
        ${String.fromCharCode(65 + idx)}
      </span>
      <span class="flex-1">${optText}</span>
    `;
    btn.onclick = () => {
      document.querySelectorAll('.quiz-opt-btn').forEach(b => {
        b.classList.remove('border-emerald-400', 'ring-2', 'ring-emerald-400/50');
      });
      btn.classList.add('border-emerald-400', 'ring-2', 'ring-emerald-400/50');
      selectedOptionIdx = idx;
      window.playTone(420, 'sine', 0.05);
    };
    optsContainer.appendChild(btn);
  });

  document.getElementById('quizFeedbackContainer').classList.add('hidden');
  document.getElementById('quizWrongActions').classList.add('hidden');
  document.getElementById('btnVerifyAnswer').classList.remove('hidden');
  document.getElementById('btnNextQuestion').classList.add('hidden');
}

window.checkQuizAnswer = function() {
  if (selectedOptionIdx === null) {
    alert('Selecione uma alternativa primeiro!');
    return;
  }
  const q = activeQuizPool[currentQuizIdx];
  const isCorrect = selectedOptionIdx === q.correct;

  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  const fbBox = document.getElementById('quizFeedbackContainer');
  const fbHeader = document.getElementById('quizFeedbackHeader');
  const fbExplain = document.getElementById('quizDetailedExplanation');
  const wrongActions = document.getElementById('quizWrongActions');

  fbBox.classList.remove('hidden');
  document.getElementById('btnVerifyAnswer').classList.add('hidden');

  if (isCorrect) {
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) btn.classList.replace('btn-surface', 'btn-green');
    });

    window.soundSuccess();
    window.recordStudyMetric('quiz_correct', 1);
    fbBox.className = 'p-4 rounded-2xl border-2 space-y-2 bg-emerald-950/70 border-emerald-400 text-emerald-100';
    fbHeader.innerHTML = '✅ Perfeito! Resposta Correta!';
    fbExplain.innerHTML = `<strong>Fundamento:</strong> ${q.explanation || q.hint || 'Conceito exato!'}`;
    wrongActions.classList.add('hidden');
    document.getElementById('btnNextQuestion').classList.remove('hidden');
  } else {
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === selectedOptionIdx) btn.classList.replace('btn-surface', 'btn-red');
    });

    window.soundError();
    fbBox.className = 'p-4 rounded-2xl border-2 space-y-3 bg-amber-950/85 border-amber-400 text-amber-100';
    fbHeader.innerHTML = '❌ Resposta Incorreta! Corrija para garantir 100% do XP:';
    fbExplain.innerHTML = `💡 <strong>Pista:</strong> ${q.hint || 'Consulte a teoria rápida abaixo (sem XP de leitura) e tente novamente!'}`;
    wrongActions.classList.remove('hidden');
    document.getElementById('btnNextQuestion').classList.add('hidden');
  }
};

window.openTheoryFromWrongQuestion = function() {
  const q = activeQuizPool[currentQuizIdx];
  if (!q) return;
  const topic = window.loadedCourseData.topics.find(t => t.id === q.topicId) || window.loadedCourseData.topics[0];

  document.getElementById('lookupTopicTitle').textContent = topic ? topic.title : 'Fundamento Teórico';
  document.getElementById('lookupFocusedExplanation').innerHTML = `
    <div class="text-xs uppercase font-extrabold text-emerald-300 mb-1">🎯 Ponto Exato desta Questão:</div>
    <div>${window.formatRichText(q.explanation || q.hint || '')}</div>
  `;

  const paragraphs = topic ? topic.content.split('\n').map(p => p.trim()).filter(Boolean) : [];
  document.getElementById('lookupTopicBody').innerHTML = paragraphs.map(p => `
    <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">${window.formatRichText(p)}</div>
  `).join('');

  document.getElementById('questionTheoryLookupModal').classList.remove('hidden');
};

window.closeQuestionTheoryLookup = function() {
  document.getElementById('questionTheoryLookupModal').classList.add('hidden');
  window.retryCurrentQuestion();
};

window.retryCurrentQuestion = function() {
  window.playTone(460, 'sine', 0.06);
  renderCurrentQuizStep();
};

window.skipWrongQuestionWithPenalty = function() {
  skippedQuestionsCount++;
  window.playTone(280, 'sawtooth', 0.1);
  window.advanceQuizQuestion();
};

window.advanceQuizQuestion = function() {
  currentQuizIdx++;
  if (currentQuizIdx < activeQuizPool.length) {
    renderCurrentQuizStep();
  } else {
    const rw = window.getStageRewardInfo(activeQuizStage);
    const totalQs = activeQuizPool.length;
    const correctCount = Math.max(0, totalQs - skippedQuestionsCount);
    const accuracyRatio = totalQs > 0 ? (correctCount / totalQs) : 1;

    const finalXp = Math.max(2, Math.round(rw.xp * accuracyRatio));
    const finalCoins = Math.max(1, Math.round(rw.coins * accuracyRatio));

    window.soundSuccess();
    confetti({ particleCount: 65, spread: 80, origin: { y: 0.6 } });

    const label = skippedQuestionsCount === 0
      ? '100% Precisão no Quiz!'
      : `Quiz (${correctCount}/${totalQs} acertos)`;

    window.markStageCompleted(activeQuizStage, finalXp, finalCoins, label);
    window.closeLessonQuiz();
  }
};

window.closeLessonQuiz = function() {
  document.getElementById('lessonQuizModal').classList.add('hidden');
};

// 6. Motor de Flashcards
let activeFlashcardStage = null;
let fcQueue = [];
let fcTotalInitial = 0;
let fcMasteredCount = 0;
let fcFlipped = false;

function openStageFlashcards(stage) {
  activeFlashcardStage = stage;
  fcQueue = [...(stage.cardsPool || window.loadedCourseData.flashcards.slice(0, 4))];
  fcTotalInitial = fcQueue.length;
  fcMasteredCount = 0;
  fcFlipped = false;

  document.getElementById('flashcardsModal').classList.remove('hidden');
  renderFlashcardModalView();
}

window.closeFlashcardsModal = function() {
  document.getElementById('flashcardsModal').classList.add('hidden');
};

function renderFlashcardModalView() {
  const card = fcQueue[0];
  if (!card) return;

  const pct = Math.round((fcMasteredCount / fcTotalInitial) * 100);
  document.getElementById('fcBatchProgressBar').style.width = `${Math.max(10, pct)}%`;
  document.getElementById('fcModalCategory').textContent = `${card.category} • Restam ${fcQueue.length}`;

  const cardBox = document.getElementById('fcCardBox');
  const sideBadge = document.getElementById('fcSideBadge');
  const mainText = document.getElementById('fcModalMainText');
  const sideLabel = document.getElementById('fcModalSideLabel');
  const evalBtns = document.getElementById('fcEvalButtons');
  const flipPrompt = document.getElementById('fcFlipPromptBtn');

  if (!fcFlipped) {
    cardBox.className = 'min-h-[250px] rounded-3xl border-4 p-6 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-200 shadow-xl bg-indigo-950 border-indigo-400 text-indigo-50';
    sideBadge.className = 'text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/40';
    sideBadge.innerHTML = '❓ PERGUNTA (FRENTE)';
    mainText.textContent = card.question;
    sideLabel.textContent = 'Pense na resposta e toque no cartão para virar ↻';
    evalBtns.classList.add('hidden');
    flipPrompt.classList.remove('hidden');
  } else {
    cardBox.className = 'min-h-[250px] rounded-3xl border-4 p-6 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-200 shadow-xl bg-emerald-950 border-emerald-400 text-emerald-50';
    sideBadge.className = 'text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/40';
    sideBadge.innerHTML = '💡 RESPOSTA OFICIAL (VERSO)';
    mainText.textContent = card.answer;
    sideLabel.textContent = 'Avalie abaixo se você lembrou corretamente:';
    evalBtns.classList.remove('hidden');
    flipPrompt.classList.add('hidden');
  }
}

window.flipCurrentFlashcard = function() {
  fcFlipped = !fcFlipped;
  window.playTone(500, 'sine', 0.05);
  renderFlashcardModalView();
};

window.markFlashcardResult = function(remembered) {
  const currentCard = fcQueue.shift();
  if (remembered) {
    fcMasteredCount++;
    window.recordStudyMetric('flashcard', 1);
    window.playTone(620, 'triangle', 0.1);
  } else {
    fcQueue.push(currentCard);
    window.playTone(320, 'sine', 0.1);
  }

  if (fcQueue.length === 0) {
    window.soundSuccess();
    confetti({ particleCount: 55, spread: 70, origin: { y: 0.6 } });
    if (activeFlashcardStage) {
      const rw = window.getStageRewardInfo(activeFlashcardStage);
      window.markStageCompleted(activeFlashcardStage, rw.xp, rw.coins, 'Flashcards Dominados!');
    }
    window.closeFlashcardsModal();
  } else {
    fcFlipped = false;
    renderFlashcardModalView();
  }
};

// 7. Motor de Simulado
let activeSimuladoStage = null;

function openStageSimulado(stage) {
  activeSimuladoStage = stage;
  const body = document.getElementById('simuladoModalBody');

  const simModules = (window.loadedCourseData.simulado && window.loadedCourseData.simulado.length > 0)
    ? window.loadedCourseData.simulado
    : [{
        moduleId: 1,
        title: `Simulado Oficial de ${window.CATALOG_COURSES[window.userState.activeCourse].title}`,
        explanationNumber: 1,
        explanation: 'Avaliação integradora contemplando os conceitos fundamentais da disciplina.',
        questions: window.loadedCourseData.quiz.slice(0, 10).map((q, idx) => ({
          number: idx + 1,
          type: 'mc',
          label: 'Questão Oficial',
          question: q.question,
          options: q.options,
          correct: q.correct
        }))
      }];

  body.innerHTML = simModules.map(mod => `
    <div class="duo-card space-y-4">
      <h4 class="text-base font-bold text-emerald-400 border-b border-slate-700 pb-2">${mod.title}</h4>
      <div class="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/40 text-xs sm:text-sm leading-relaxed">
        <strong>📖 Contexto Clínico:</strong><br>
        ${window.formatRichText(mod.explanation)}
      </div>
      <div class="space-y-3">
        ${mod.questions.map(q => `
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span class="text-[10px] font-extrabold uppercase text-amber-400">Item ${q.number} • ${q.label}</span>
            <p class="text-xs sm:text-sm font-bold">${q.question}</p>
            ${q.type === 'mc' ? `
              <div class="space-y-1.5 pt-1">
                ${q.options.map((opt, oIdx) => `
                  <button onclick="checkSimuladoMc(this, ${oIdx === q.correct})" class="w-full text-left p-2.5 rounded-xl border border-slate-700 hover:border-emerald-400 text-xs font-bold transition">
                    ${opt}
                  </button>
                `).join('')}
              </div>
            ` : `
              <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs mt-2">
                <strong class="text-emerald-400">Gabarito Discursivo Oficial:</strong> ${q.expectedAnswer}
              </div>
            `}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('simuladoModal').classList.remove('hidden');
}

window.checkSimuladoMc = function(btnEl, isRight) {
  if (isRight) {
    window.soundSuccess();
    window.recordStudyMetric('quiz_correct', 1);
    btnEl.className = 'w-full text-left p-2.5 rounded-xl border-2 border-emerald-400 bg-emerald-950/60 text-emerald-200 text-xs font-extrabold';
  } else {
    window.soundError();
    btnEl.className = 'w-full text-left p-2.5 rounded-xl border-2 border-red-400 bg-red-950/60 text-red-200 text-xs font-extrabold';
  }
};

window.finishSimuladoStage = function() {
  window.soundSuccess();
  confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
  window.recordStudyMetric('simulado', 1);
  if (activeSimuladoStage) {
    const rw = window.getStageRewardInfo(activeSimuladoStage);
    window.markStageCompleted(activeSimuladoStage, rw.xp, rw.coins, 'Simulado Concluído!');
  }
  window.closeSimuladoModal();
};

window.closeSimuladoModal = function() {
  document.getElementById('simuladoModal').classList.add('hidden');
};