// =========================================================================
// MOTOR UNIVERSAL: PSICOFARMACOLOGIA (STUDY LAB)
// Gerencia Navegação, Mapa Mental, Flashcards, Quiz e Tema
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------------------------------------
  // 1. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
  // -----------------------------------------------------------------------
  const themeToggle = document.getElementById("theme-toggle");
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");

  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add("theme-dark");
      if (iconMoon) iconMoon.style.display = "none";
      if (iconSun) iconSun.style.display = "block";
    } else {
      document.body.classList.remove("theme-dark");
      if (iconMoon) iconMoon.style.display = "block";
      if (iconSun) iconSun.style.display = "none";
    }
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme === "dark" || (!savedTheme && prefersDark));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isCurrentlyDark = document.body.classList.contains("theme-dark");
      const targetDark = !isCurrentlyDark;
      applyTheme(targetDark);
      localStorage.setItem("theme", targetDark ? "dark" : "light");
    });
  }

  // -----------------------------------------------------------------------
  // 2. NAVEGAÇÃO ENTRE ABAS
  // -----------------------------------------------------------------------
  const navButtons = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  function switchTab(tabId) {
    navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabId));
    tabContents.forEach(tab => tab.classList.toggle("active", tab.id === tabId));
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // -----------------------------------------------------------------------
  // 3. MAPA MENTAL & EXPLICAÇÕES DINÂMICAS
  // -----------------------------------------------------------------------
  const mindmapContainer = document.getElementById("mindmap-container");
  const articlesContainer = document.getElementById("articles-container");

  function renderKnowledgeBase() {
    if (!studyData || !studyData.topics) return;

    // Renderiza artigos detalhados na aba de Explicações
    if (articlesContainer) {
      articlesContainer.innerHTML = "";
      studyData.topics.forEach(t => {
        const article = document.createElement("article");
        article.className = "article-card";
        article.id = `doc-${t.id}`;
        
        // Conversão leve de quebras de linha e negrito markdown
        let parsedContent = t.content
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\n/g, "<br>");

        article.innerHTML = `
          <h3>${t.title}</h3>
          <div class="article-body">${parsedContent}</div>
          ${t.mnemonic ? `<div class="mnemonic-tag">${t.mnemonic}</div>` : ""}
        `;
        articlesContainer.appendChild(article);
      });
    }

    // Renderiza os nós do Mapa Mental organizado por níveis
    if (mindmapContainer && studyData.tree) {
      mindmapContainer.innerHTML = "";
      
      // Agrupa os itens por nível
      const levels = {};
      studyData.tree.forEach(node => {
        if (!levels[node.level]) levels[node.level] = [];
        levels[node.level].push(node);
      });

      Object.keys(levels).sort().forEach(lvl => {
        const col = document.createElement("div");
        col.className = "mindmap-level";
        
        levels[lvl].forEach(node => {
          const item = document.createElement("div");
          item.className = "mindmap-node";
          item.dataset.id = node.id;
          item.innerHTML = `
            <strong>${node.title}</strong>
            <span class="node-action">Ler Explicação ➔</span>
          `;
          item.addEventListener("click", () => {
            switchTab("resumos");
            const targetDoc = document.getElementById(`doc-${node.id}`);
            if (targetDoc) {
              targetDoc.scrollIntoView({ behavior: "smooth", block: "start" });
              targetDoc.classList.add("highlight");
              setTimeout(() => targetDoc.classList.remove("highlight"), 1800);
            }
          });
          col.appendChild(item);
        });

        mindmapContainer.appendChild(col);
      });
    }
  }

  // -----------------------------------------------------------------------
  // 4. MOTOR DE FLASHCARDS
  // -----------------------------------------------------------------------
  const flashcardEl = document.getElementById("flashcard");
  const fcCategory = document.getElementById("fc-category");
  const fcQuestion = document.getElementById("fc-question");
  const fcAnswer = document.getElementById("fc-answer");
  const fcCounter = document.getElementById("fc-counter");
  const fcPrevBtn = document.getElementById("fc-prev");
  const fcNextBtn = document.getElementById("fc-next");
  const fcMoreBtn = document.getElementById("fc-more-btn");

  let currentCardIndex = 0;

  function updateFlashcardView() {
    if (!studyData.flashcards || studyData.flashcards.length === 0) return;
    
    // Remove o giro antes de mudar a pergunta
    flashcardEl.classList.remove("flipped");

    const card = studyData.flashcards[currentCardIndex];
    if (fcCategory) fcCategory.textContent = card.category || "Geral";
    if (fcQuestion) fcQuestion.textContent = card.question;
    if (fcAnswer) fcAnswer.textContent = card.answer;
    if (fcCounter) fcCounter.textContent = `${currentCardIndex + 1} / ${studyData.flashcards.length}`;
  }

  if (flashcardEl) {
    flashcardEl.addEventListener("click", (e) => {
      if (e.target.id === "fc-more-btn") return;
      flashcardEl.classList.toggle("flipped");
    });
  }

  if (fcPrevBtn) {
    fcPrevBtn.addEventListener("click", () => {
      if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcardView();
      }
    });
  }

  if (fcNextBtn) {
    fcNextBtn.addEventListener("click", () => {
      if (currentCardIndex < studyData.flashcards.length - 1) {
        currentCardIndex++;
        updateFlashcardView();
      }
    });
  }

  if (fcMoreBtn) {
    fcMoreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = studyData.flashcards[currentCardIndex];
      switchTab("resumos");
      const targetDoc = document.getElementById(`doc-${card.topicId}`);
      if (targetDoc) {
        targetDoc.scrollIntoView({ behavior: "smooth", block: "start" });
        targetDoc.classList.add("highlight");
        setTimeout(() => targetDoc.classList.remove("highlight"), 1800);
      }
    });
  }

  // -----------------------------------------------------------------------
  // 5. MOTOR DO QUIZ (MODO NORMAL E SOBREVIVÊNCIA)
  // -----------------------------------------------------------------------
  const quizConfigBox = document.getElementById("quiz-config");
  const quizPlayBox = document.getElementById("quiz-play");
  const quizResultBox = document.getElementById("quiz-result");

  const modeRadios = document.querySelectorAll('input[name="quiz-mode"]');
  const timerRadios = document.querySelectorAll('input[name="timer-enable"]');
  const configNormal = document.getElementById("config-normal");
  const configSurvival = document.getElementById("config-survival");
  const timerValGroup = document.getElementById("timer-val-group");

  const startQuizBtn = document.getElementById("btn-start-quiz");
  const abortQuizBtn = document.getElementById("btn-abort-quiz");
  const restartQuizBtn = document.getElementById("btn-restart-quiz");

  const questionText = document.getElementById("quiz-question-text");
  const optionsGrid = document.getElementById("quiz-options");
  const feedbackBox = document.getElementById("quiz-feedback");
  const feedbackMsg = document.getElementById("feedback-msg");
  const quizNextBtn = document.getElementById("btn-quiz-next");
  const quizExplainBtn = document.getElementById("btn-quiz-explain");
  const quizProgressText = document.getElementById("quiz-progress-text");
  const quizLivesDisplay = document.getElementById("quiz-lives-display");
  const timerBadge = document.getElementById("quiz-timer-display");
  const finalScoreEl = document.getElementById("final-score");
  const survivalStatsEl = document.getElementById("survival-stats");

  let activeQuizQuestions = [];
  let quizIndex = 0;
  let correctCount = 0;
  let quizMode = "normal";
  let lives = 5;
  let isTimerOn = false;
  let secondsPerQ = 20;
  let timerInterval = null;
  let currentTimeLeft = 0;

  // Alterna visualizadores de configurações
  modeRadios.forEach(r => {
    r.addEventListener("change", (e) => {
      quizMode = e.target.value;
      if (configNormal) configNormal.style.display = quizMode === "normal" ? "block" : "none";
      if (configSurvival) configSurvival.style.display = quizMode === "survival" ? "block" : "none";
    });
  });

  timerRadios.forEach(r => {
    r.addEventListener("change", (e) => {
      isTimerOn = e.target.value === "yes";
      if (timerValGroup) timerValGroup.style.display = isTimerOn ? "block" : "none";
    });
  });

  function startQuiz() {
    const rawBank = [...studyData.quiz];
    if (rawBank.length === 0) return;

    // Embaralha as questões
    activeQuizQuestions = rawBank.sort(() => Math.random() - 0.5);

    quizIndex = 0;
    correctCount = 0;

    if (quizMode === "normal") {
      const countInput = document.getElementById("quiz-count");
      const desiredCount = parseInt(countInput ? countInput.value : 10, 10);
      activeQuizQuestions = activeQuizQuestions.slice(0, Math.min(desiredCount, activeQuizQuestions.length));
      if (quizLivesDisplay) quizLivesDisplay.textContent = "";
    } else {
      const livesSelect = document.getElementById("quiz-lives");
      lives = parseInt(livesSelect ? livesSelect.value : 5, 10);
      updateLivesBadge();
    }

    if (isTimerOn) {
      const sInput = document.getElementById("quiz-seconds");
      secondsPerQ = parseInt(sInput ? sInput.value : 20, 10);
      if (timerBadge) timerBadge.style.display = "inline-block";
    } else {
      if (timerBadge) timerBadge.style.display = "none";
    }

    quizConfigBox.style.display = "none";
    quizResultBox.style.display = "none";
    quizPlayBox.style.display = "block";

    loadQuestion();
  }

  function updateLivesBadge() {
    if (quizLivesDisplay) {
      quizLivesDisplay.textContent = "❤️".repeat(Math.max(0, lives));
    }
  }

  function resetTimer() {
    clearInterval(timerInterval);
    if (!isTimerOn) return;
    currentTimeLeft = secondsPerQ;
    if (timerBadge) timerBadge.textContent = `⏱️ ${currentTimeLeft}s`;

    timerInterval = setInterval(() => {
      currentTimeLeft--;
      if (timerBadge) timerBadge.textContent = `⏱️ ${currentTimeLeft}s`;
      if (currentTimeLeft <= 0) {
        clearInterval(timerInterval);
        handleAnswer(-1); // Tempo esgotado
      }
    }, 1000);
  }

  function loadQuestion() {
    resetTimer();
    feedbackBox.style.display = "none";

    const q = activeQuizQuestions[quizIndex];
    if (quizProgressText) {
      quizProgressText.textContent = quizMode === "normal"
        ? `Questão ${quizIndex + 1} de ${activeQuizQuestions.length}`
        : `Questão ${quizIndex + 1} (Acertos: ${correctCount})`;
    }

    if (questionText) questionText.textContent = q.question;
    if (optionsGrid) {
      optionsGrid.innerHTML = "";
      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleAnswer(idx));
        optionsGrid.appendChild(btn);
      });
    }
  }

  function handleAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const q = activeQuizQuestions[quizIndex];
    const buttons = optionsGrid.querySelectorAll(".option-btn");
    buttons.forEach(b => b.disabled = true);

    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) {
      correctCount++;
      if (selectedIndex >= 0) buttons[selectedIndex].classList.add("correct");
      feedbackMsg.textContent = "Excelente! Resposta correta.";
      feedbackBox.className = "feedback-box success";
    } else {
      if (selectedIndex >= 0) buttons[selectedIndex].classList.add("incorrect");
      if (q.correct < buttons.length) buttons[q.correct].classList.add("correct");
      
      feedbackMsg.textContent = selectedIndex === -1 
        ? "Tempo esgotado! Veja a alternativa correta destacada em verde."
        : `Incorreto. A opção adequada era: "${q.options[q.correct]}".`;
      feedbackBox.className = "feedback-box danger";

      if (quizMode === "survival") {
        lives--;
        updateLivesBadge();
      }
    }

    feedbackBox.style.display = "flex";

    // Botão de consultar resumo
    if (quizExplainBtn) {
      quizExplainBtn.onclick = () => {
        switchTab("resumos");
        const docEl = document.getElementById(`doc-${q.topicId}`);
        if (docEl) {
          docEl.scrollIntoView({ behavior: "smooth", block: "start" });
          docEl.classList.add("highlight");
          setTimeout(() => docEl.classList.remove("highlight"), 1800);
        }
      };
    }
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener("click", () => {
      if (quizMode === "survival" && lives <= 0) {
        endQuiz(false);
        return;
      }

      quizIndex++;
      if (quizIndex < activeQuizQuestions.length) {
        loadQuestion();
      } else {
        endQuiz(true);
      }
    });
  }

  function endQuiz(completedAll) {
    clearInterval(timerInterval);
    quizPlayBox.style.display = "none";
    quizResultBox.style.display = "block";

    if (finalScoreEl) {
      finalScoreEl.textContent = `${correctCount} acertos`;
    }

    if (survivalStatsEl) {
      if (quizMode === "survival") {
        survivalStatsEl.textContent = completedAll 
          ? "Incrível! Você respondeu a todo o banco sem perder todas as vidas!"
          : "Fim das vidas! Revise os tópicos onde houve dúvidas e tente novamente.";
      } else {
        survivalStatsEl.textContent = `Aproveitamento: ${Math.round((correctCount / activeQuizQuestions.length) * 100)}%`;
      }
    }
  }

  if (startQuizBtn) startQuizBtn.addEventListener("click", startQuiz);
  if (abortQuizBtn) {
    abortQuizBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      quizPlayBox.style.display = "none";
      quizConfigBox.style.display = "block";
    });
  }
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener("click", () => {
      quizResultBox.style.display = "none";
      quizConfigBox.style.display = "block";
    });
  }

  // -----------------------------------------------------------------------
  // INICIALIZAÇÃO
  // -----------------------------------------------------------------------
  renderKnowledgeBase();
  updateFlashcardView();
});
