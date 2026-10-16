document.addEventListener("DOMContentLoaded", () => {
  
  // LÓGICA DO MENU LATERAL (SIDEBAR)
  const menuToggle = document.getElementById("menu-toggle");
  const closeSidebar = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  function toggleMenu() {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  }

  if(menuToggle) menuToggle.addEventListener("click", toggleMenu);
  if(closeSidebar) closeSidebar.addEventListener("click", toggleMenu);
  if(overlay) overlay.addEventListener("click", toggleMenu);

  // 1. MODO ESCURO (DARK MODE) COM ÍCONES SVG
  const themeBtn = document.getElementById("theme-toggle");
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");
  
  function updateThemeIcons(isDark) {
    if(!iconMoon || !iconSun) return;
    if (isDark) {
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
    } else {
      iconMoon.style.display = "block";
      iconSun.style.display = "none";
    }
  }

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcons(true);
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        updateThemeIcons(false);
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        updateThemeIcons(true);
      }
    });
  }

  // 2. NAVEGAÇÃO ENTRE ABAS
  const navBtns = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".tab-content");

  function switchTab(tabId) {
    navBtns.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
    const activeSec = document.getElementById(tabId);
    
    if(activeBtn) activeBtn.classList.add("active");
    if(activeSec) activeSec.classList.add("active");
  }

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  function jumpToTopic(topicId) {
    switchTab("resumos");
    const targetCard = document.getElementById(`topic-${topicId}`);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      targetCard.classList.add("highlight");
      setTimeout(() => targetCard.classList.remove("highlight"), 1500);
    }
  }

  // 3. RENDERIZAR RESUMOS (EXPLICAÇÕES)
  const articlesContainer = document.getElementById("articles-container");
  if (articlesContainer && typeof studyData !== 'undefined') {
    studyData.topics.forEach(topic => {
      const card = document.createElement("div");
      card.className = "article-card";
      card.id = `topic-${topic.id}`;
      
      const formattedContent = topic.content
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, '<br>');

      card.innerHTML = `
        <h3>${topic.title}</h3>
        <p>${formattedContent}</p>
        <div class="mnemonic-box">${topic.mnemonic}</div>
      `;
      articlesContainer.appendChild(card);
    });
  }

  // 4. RENDERIZAR MAPA MENTAL
  const mindmapContainer = document.getElementById("mindmap-container");
  if (mindmapContainer && typeof studyData !== 'undefined') {
    const levels = {};
    studyData.tree.forEach(node => {
      if (!levels[node.level]) levels[node.level] = [];
      levels[node.level].push(node);
    });

    Object.keys(levels).sort().forEach(levelNum => {
      const levelRow = document.createElement("div");
      levelRow.className = "mindmap-level";
      
      levels[levelNum].forEach(node => {
        const nodeEl = document.createElement("div");
        nodeEl.className = "mindmap-node";
        nodeEl.innerHTML = `
          <h4>${node.title}</h4>
          <span>Ver documentação</span>
        `;
        nodeEl.addEventListener("click", () => jumpToTopic(node.id));
        levelRow.appendChild(nodeEl);
      });
      mindmapContainer.appendChild(levelRow);
    });
  }

  // 5. LÓGICA DOS FLASHCARDS
  let currentFcIndex = 0;
  const fcElement = document.getElementById("flashcard");
  const fcCategory = document.getElementById("fc-category");
  const fcQuestion = document.getElementById("fc-question");
  const fcAnswer = document.getElementById("fc-answer");
  const fcCounter = document.getElementById("fc-counter");
  const fcMoreBtn = document.getElementById("fc-more-btn");

  function loadFlashcard(index) {
    if (!fcElement || typeof studyData === 'undefined' || !studyData.flashcards.length) return;
    fcElement.classList.remove("flipped");
    setTimeout(() => {
      const card = studyData.flashcards[index];
      if(fcCategory) fcCategory.textContent = card.category;
      if(fcQuestion) fcQuestion.textContent = card.question;
      if(fcAnswer) fcAnswer.textContent = card.answer;
      if(fcCounter) fcCounter.textContent = `${index + 1} / ${studyData.flashcards.length}`;
      if(fcMoreBtn) fcMoreBtn.onclick = (e) => {
        e.stopPropagation();
        jumpToTopic(card.topicId);
      };
    }, 150);
  }

  if (fcElement) {
    fcElement.addEventListener("click", () => fcElement.classList.toggle("flipped"));
    document.getElementById("fc-prev")?.addEventListener("click", () => {
      currentFcIndex = (currentFcIndex > 0) ? currentFcIndex - 1 : studyData.flashcards.length - 1;
      loadFlashcard(currentFcIndex);
    });
    document.getElementById("fc-next")?.addEventListener("click", () => {
      currentFcIndex = (currentFcIndex < studyData.flashcards.length - 1) ? currentFcIndex + 1 : 0;
      loadFlashcard(currentFcIndex);
    });
    loadFlashcard(0);
  }

  // 6. LÓGICA DO QUIZ
  let quizQuestions = [];
  let currentQuizIndex = 0;
  let score = 0;
  let timerInterval = null;
  let isTimerEnabled = false;
  let timePerQuestion = 20;
  let quizMode = "normal";
  let lives = 3;

  const quizConfig = document.getElementById("quiz-config");
  const quizPlay = document.getElementById("quiz-play");
  const quizResult = document.getElementById("quiz-result");
  const configNormal = document.getElementById("config-normal");
  const configSurvival = document.getElementById("config-survival");
  const livesDisplay = document.getElementById("quiz-lives-display");

  document.querySelectorAll('input[name="quiz-mode"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      quizMode = e.target.value;
      if (quizMode === "normal") {
        if(configNormal) configNormal.style.display = "block";
        if(configSurvival) configSurvival.style.display = "none";
      } else {
        if(configNormal) configNormal.style.display = "none";
        if(configSurvival) configSurvival.style.display = "block";
      }
    });
  });

  document.querySelectorAll('input[name="timer-enable"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      isTimerEnabled = e.target.value === "yes";
      const timerGroup = document.getElementById("timer-val-group");
      if(timerGroup) timerGroup.style.display = isTimerEnabled ? "block" : "none";
    });
  });

  function abortQuiz() {
    clearInterval(timerInterval);
    if(quizPlay) quizPlay.style.display = "none";
    if(quizResult) quizResult.style.display = "none";
    if(quizConfig) quizConfig.style.display = "block";
  }

  document.getElementById("btn-abort-quiz")?.addEventListener("click", abortQuiz);
  document.getElementById("btn-restart-quiz")?.addEventListener("click", abortQuiz);

  document.getElementById("btn-start-quiz")?.addEventListener("click", () => {
    if(typeof studyData === 'undefined' || !studyData.quiz.length) return;
    score = 0;
    currentQuizIndex = 0;
    timePerQuestion = parseInt(document.getElementById("quiz-seconds")?.value) || 20;
    
    const shuffled = [...studyData.quiz].sort(() => 0.5 - Math.random());

    if (quizMode === "normal") {
      const qCount = parseInt(document.getElementById("quiz-count")?.value) || 10;
      quizQuestions = shuffled.slice(0, Math.min(qCount, shuffled.length));
      if(livesDisplay) livesDisplay.style.display = "none";
    } else {
      lives = parseInt(document.getElementById("quiz-lives")?.value) || 5;
      quizQuestions = shuffled; 
      if(livesDisplay) {
        livesDisplay.style.display = "inline-block";
        updateLivesDisplay();
      }
    }

    if(quizConfig) quizConfig.style.display = "none";
    if(quizResult) quizResult.style.display = "none";
    if(quizPlay) quizPlay.style.display = "block";
    
    renderQuestion();
  });

  function updateLivesDisplay() {
    if(livesDisplay) livesDisplay.textContent = `Vidas: ${lives}`;
  }

  function renderQuestion() {
    clearInterval(timerInterval);
    const q = quizQuestions[currentQuizIndex];
    
    const progressText = document.getElementById("quiz-progress-text");
    if (progressText) {
      progressText.textContent = (quizMode === "normal") 
        ? `Questão ${currentQuizIndex + 1} de ${quizQuestions.length}` 
        : `Questão ${currentQuizIndex + 1}`;
    }
    
    const qText = document.getElementById("quiz-question-text");
    if(qText) qText.textContent = q.question;
    
    const feedbackBox = document.getElementById("quiz-feedback");
    if(feedbackBox) feedbackBox.style.display = "none";

    const hintContainer = document.getElementById("hint-container");
    const hintText = document.getElementById("hint-text");
    const btnShowHint = document.getElementById("btn-show-hint");
    
    if (hintContainer && hintText && btnShowHint) {
      if (q.hint) {
        hintContainer.style.display = "block";
        hintText.style.display = "none";
        hintText.textContent = q.hint;
        btnShowHint.onclick = () => { hintText.style.display = "block"; };
      } else {
        hintContainer.style.display = "none";
      }
    }

    const optionsGrid = document.getElementById("quiz-options");
    if (optionsGrid) {
      optionsGrid.innerHTML = "";
      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(idx, btn);
        optionsGrid.appendChild(btn);
      });
    }

    const timerDisplay = document.getElementById("quiz-timer-display");
    if (timerDisplay) {
      if (isTimerEnabled) {
        let timeLeft = timePerQuestion;
        timerDisplay.textContent = `${timeLeft}s`;
        timerInterval = setInterval(() => {
          timeLeft--;
          timerDisplay.textContent = `${timeLeft}s`;
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
          }
        }, 1000);
      } else {
        timerDisplay.textContent = "";
      }
    }
  }

  function disableOptions() {
    document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
  }

  function checkAnswer(selectedIndex, btnElement) {
    clearInterval(timerInterval);
    disableOptions();
    const q = quizQuestions[currentQuizIndex];
    const isCorrect = (selectedIndex === q.correct);
    const allBtns = document.querySelectorAll(".option-btn");

    if (isCorrect) {
      btnElement.classList.add("correct");
      score++;
      showFeedback("Resposta Correta.", true, q.topicId);
    } else {
      btnElement.classList.add("wrong");
      if(allBtns[q.correct]) allBtns[q.correct].classList.add("correct");
      
      if (quizMode === "survival") {
        lives--;
        updateLivesDisplay();
      }
      showFeedback("Resposta Incorreta.", false, q.topicId);
    }
  }

  function handleTimeOut() {
    disableOptions();
    const q = quizQuestions[currentQuizIndex];
    const allBtns = document.querySelectorAll(".option-btn");
    if(allBtns[q.correct]) allBtns[q.correct].classList.add("correct");
    
    if (quizMode === "survival") {
      lives--;
      updateLivesDisplay();
    }
    showFeedback("Limite de tempo excedido.", false, q.topicId);
  }

  function showFeedback(msg, isSuccess, topicId) {
    const fbBox = document.getElementById("quiz-feedback");
    const fbMsg = document.getElementById("feedback-msg");
    const btnNext = document.getElementById("btn-quiz-next");

    if(!fbBox || !fbMsg || !btnNext) return;

    fbBox.style.display = "block";
    fbMsg.textContent = msg;
    fbMsg.style.color = isSuccess ? "var(--status-success)" : "var(--status-danger)";

    const btnExplain = document.getElementById("btn-quiz-explain");
    if(btnExplain) btnExplain.onclick = () => jumpToTopic(topicId);

    if (quizMode === "survival" && lives <= 0) {
      btnNext.textContent = "Ver Relatório Final";
      btnNext.onclick = endQuiz;
    } else {
      btnNext.textContent = "Avançar";
      btnNext.onclick = nextQuestion;
    }
  }

  function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
      renderQuestion();
    } else {
      if (quizMode === "survival") {
        const reshuffled = [...studyData.quiz].sort(() => 0.5 - Math.random());
        quizQuestions = quizQuestions.concat(reshuffled);
        renderQuestion();
      } else {
        endQuiz();
      }
    }
  }

  function endQuiz() {
    if(quizPlay) quizPlay.style.display = "none";
    if(quizResult) quizResult.style.display = "block";
    
    const resultTitle = document.getElementById("result-title");
    const finalScore = document.getElementById("final-score");
    const survivalStats = document.getElementById("survival-stats");

    if (quizMode === "survival") {
      if(resultTitle) resultTitle.textContent = "Sessão Terminada (Vidas Esgotadas)";
      if(finalScore) finalScore.textContent = `${score} respostas corretas`;
      if(survivalStats) survivalStats.textContent = `Total de questões enfrentadas: ${currentQuizIndex + 1}`;
    } else {
      if(resultTitle) resultTitle.textContent = "Avaliação Concluída";
      if(finalScore) finalScore.textContent = `${score} / ${quizQuestions.length}`;
      if(survivalStats) {
        const pct = Math.round((score / quizQuestions.length) * 100);
        survivalStats.textContent = `Aproveitamento global: ${pct}%`;
      }
    }
  }
});
