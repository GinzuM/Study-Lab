document.addEventListener("DOMContentLoaded", () => {
  // Unifica os dados de dt_(curso).js e q_(curso).js com fallback seguro
  const topicsList = (typeof studyData !== "undefined" && studyData.topics) ? studyData.topics : [];
  const treeList = (typeof studyData !== "undefined" && studyData.tree) ? studyData.tree : [];
  const flashcardsList = (typeof studyData !== "undefined" && studyData.flashcards) ? studyData.flashcards : [];
  
  const quizList = (typeof questionsData !== "undefined" && questionsData.quiz)
    ? questionsData.quiz
    : ((typeof studyData !== "undefined" && studyData.quiz) ? studyData.quiz : []);

  const simuladoList = (typeof questionsData !== "undefined" && questionsData.simulado)
    ? questionsData.simulado
    : ((typeof studyData !== "undefined" && studyData.simulado) ? studyData.simulado : []);

  // ==========================================
  // 0. CONTROLE DO MENU LATERAL (SIDEBAR)
  // ==========================================
  const openSidebarBtn = document.getElementById("open-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  function toggleSidebar() {
    if (sidebar && overlay) {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  if (openSidebarBtn) openSidebarBtn.addEventListener("click", toggleSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", toggleSidebar);

  // ==========================================
  // 1. TEMA CLARO / ESCURO
  // ==========================================
  const themeToggle = document.getElementById("theme-toggle");
  const bodyEl = document.body;
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  if (localStorage.getItem("theme") === "dark") {
    bodyEl.setAttribute("data-theme", "dark");
    if (iconSun && iconMoon) {
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = bodyEl.getAttribute("data-theme") === "dark";
      if (isDark) {
        bodyEl.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        if (iconSun && iconMoon) {
          iconSun.style.display = "none";
          iconMoon.style.display = "block";
        }
      } else {
        bodyEl.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        if (iconSun && iconMoon) {
          iconMoon.style.display = "none";
          iconSun.style.display = "block";
        }
      }
    });
  }

  // ==========================================
  // 2. NAVEGAÇÃO DE ABAS (TABS)
  // ==========================================
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Oculta o botão da aba Simulado automaticamente se o curso não tiver simulado
  const simTabBtn = document.querySelector('[data-tab="simulado"]');
  if (simTabBtn && (!simuladoList || simuladoList.length === 0)) {
    simTabBtn.style.display = "none";
  }

  function switchTab(tabId) {
    tabContents.forEach(tab => tab.classList.remove("active"));
    navBtns.forEach(btn => btn.classList.remove("active"));

    const targetTab = document.getElementById(tabId);
    const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
    if (targetTab) targetTab.classList.add("active");
    if (targetBtn) targetBtn.classList.add("active");
  }

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  window.goToExplanation = function(topicId) {
    switchTab("resumos");
    setTimeout(() => {
      const el = document.getElementById(`art-${topicId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.style.borderColor = "var(--brand-primary)";
        setTimeout(() => { el.style.borderColor = "var(--border-color)"; }, 2000);
      }
    }, 100);
  };

  // ==========================================
  // 3. RENDERIZAR EXPLICAÇÕES (COM NEGRITO MARKDOWN)
  // ==========================================
  function formatMarkdownText(text) {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  const articlesContainer = document.getElementById("articles-container");
  if (articlesContainer) {
    articlesContainer.innerHTML = topicsList.map(topic => `
      <article class="article-card" id="art-${topic.id}">
        <h3>${topic.title}</h3>
        <p style="white-space: pre-line;">${formatMarkdownText(topic.content)}</p>
        <div class="mnemonic-box">${formatMarkdownText(topic.mnemonic)}</div>
      </article>
    `).join("");
  }

  // ==========================================
  // 4. RENDERIZAR MAPA MENTAL
  // ==========================================
  const treeContainer = document.getElementById("mindmap-container");
  function renderMindmap() {
    if (!treeContainer) return;
    treeContainer.innerHTML = "";
    const levels = {};
    treeList.forEach(node => {
      if (!levels[node.level]) levels[node.level] = [];
      levels[node.level].push(node);
    });

    Object.keys(levels).forEach(level => {
      const levelDiv = document.createElement("div");
      levelDiv.className = "map-level";
      levels[level].forEach(node => {
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "map-node";
        nodeDiv.innerHTML = `
          <h4>${node.title}</h4>
          <p>Ler explicação detalhada →</p>
        `;
        nodeDiv.addEventListener("click", () => window.goToExplanation(node.id));
        levelDiv.appendChild(nodeDiv);
      });
      treeContainer.appendChild(levelDiv);
    });
  }
  renderMindmap();

  // ==========================================
  // 5. LÓGICA DOS FLASHCARDS (BOTÃO NA FRENTE)
  // ==========================================
  let currentCardIndex = 0;
  const flashcardEl = document.getElementById("flashcard");
  const fcCategory = document.getElementById("fc-category");
  const fcQuestion = document.getElementById("fc-question");
  const fcAnswer = document.getElementById("fc-answer");
  const fcCounter = document.getElementById("fc-counter");
  const fcMoreBtns = document.querySelectorAll("#fc-more-btn, .fc-topic-btn");

  const shuffledFlashcards = [...flashcardsList].sort(() => 0.5 - Math.random());

  function updateFlashcard() {
    if (shuffledFlashcards.length === 0) return;
    if (flashcardEl) flashcardEl.classList.remove("flipped");

    const current = shuffledFlashcards[currentCardIndex];
    if (fcCategory) fcCategory.textContent = current.category;
    if (fcQuestion) fcQuestion.textContent = current.question;
    if (fcAnswer) fcAnswer.textContent = current.answer;
    if (fcCounter) fcCounter.textContent = `${currentCardIndex + 1} / ${shuffledFlashcards.length}`;

    fcMoreBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation(); // Impede que o card vire ao clicar em Ver Tópico
        window.goToExplanation(current.topicId);
      };
    });
  }

  if (flashcardEl) {
    flashcardEl.addEventListener("click", () => flashcardEl.classList.toggle("flipped"));
  }

  const fcPrev = document.getElementById("fc-prev");
  if (fcPrev) {
    fcPrev.addEventListener("click", () => {
      currentCardIndex = (currentCardIndex > 0) ? currentCardIndex - 1 : shuffledFlashcards.length - 1;
      updateFlashcard();
    });
  }

  const fcNext = document.getElementById("fc-next");
  if (fcNext) {
    fcNext.addEventListener("click", () => {
      currentCardIndex = (currentCardIndex < shuffledFlashcards.length - 1) ? currentCardIndex + 1 : 0;
      updateFlashcard();
    });
  }

  if (shuffledFlashcards.length > 0) updateFlashcard();

  // ==========================================
  // 6. LÓGICA DO QUIZ
  // ==========================================
  const quizConfigBox = document.getElementById("quiz-config");
  const quizPlayBox = document.getElementById("quiz-play");
  const quizResultBox = document.getElementById("quiz-result");
  const btnStartQuiz = document.getElementById("btn-start-quiz");

  const timerGroup = document.getElementById("timer-val-group");
  const configNormal = document.getElementById("config-normal");
  const configSurvival = document.getElementById("config-survival");
  const quizCountInput = document.getElementById("quiz-count");

  if (quizCountInput && quizList.length > 0) {
    quizCountInput.max = quizList.length;
    const countLabel = document.querySelector('label[for="quiz-count"]');
    if (countLabel) countLabel.textContent = `Número de Questões (Máx: ${quizList.length})`;
  }

  document.querySelectorAll('input[name="quiz-mode"]').forEach(r => {
    r.addEventListener("change", (e) => {
      if (e.target.value === "survival") {
        if (configNormal) configNormal.style.display = "none";
        if (configSurvival) configSurvival.style.display = "block";
      } else {
        if (configNormal) configNormal.style.display = "block";
        if (configSurvival) configSurvival.style.display = "none";
      }
    });
  });

  document.querySelectorAll('input[name="timer-enable"]').forEach(r => {
    r.addEventListener("change", (e) => {
      if (timerGroup) timerGroup.style.display = e.target.value === "yes" ? "block" : "none";
    });
  });

  let activeQuizQuestions = [];
  let currentQuizIndex = 0;
  let score = 0;
  let lives = 0;
  let isSurvival = false;
  let timerInterval = null;
  let timeLeft = 0;

  function abortQuiz() {
    clearInterval(timerInterval);
    if (quizPlayBox) quizPlayBox.style.display = "none";
    if (quizResultBox) quizResultBox.style.display = "none";
    if (quizConfigBox) quizConfigBox.style.display = "block";
  }

  const btnAbort = document.getElementById("btn-abort-quiz");
  if (btnAbort) btnAbort.addEventListener("click", abortQuiz);

  if (btnStartQuiz) {
    btnStartQuiz.addEventListener("click", () => {
      const modeInput = document.querySelector('input[name="quiz-mode"]:checked');
      isSurvival = modeInput ? modeInput.value === "survival" : false;

      const shuffledQuiz = [...quizList].sort(() => 0.5 - Math.random());

      if (isSurvival) {
        activeQuizQuestions = shuffledQuiz;
        const livesEl = document.getElementById("quiz-lives");
        lives = livesEl ? parseInt(livesEl.value) || 5 : 5;
      } else {
        const qCountEl = document.getElementById("quiz-count");
        const qCount = qCountEl ? parseInt(qCountEl.value) || 10 : 10;
        activeQuizQuestions = shuffledQuiz.slice(0, Math.min(qCount, shuffledQuiz.length));
      }

      currentQuizIndex = 0;
      score = 0;

      if (quizConfigBox) quizConfigBox.style.display = "none";
      if (quizResultBox) quizResultBox.style.display = "none";
      if (quizPlayBox) quizPlayBox.style.display = "block";

      loadQuizQuestion();
    });
  }

  function updateLivesDisplay() {
    const livesDisplay = document.getElementById("quiz-lives-display");
    if (livesDisplay) {
      if (isSurvival) {
        livesDisplay.style.display = "inline-flex";
        livesDisplay.innerHTML = `<span style="color:var(--error); margin-right:4px;">❤️</span> ${lives}`;
      } else {
        livesDisplay.style.display = "none";
      }
    }
  }

  function loadQuizQuestion() {
    clearInterval(timerInterval);
    updateLivesDisplay();

    if (isSurvival && currentQuizIndex >= activeQuizQuestions.length) {
      currentQuizIndex = 0;
      activeQuizQuestions = activeQuizQuestions.sort(() => 0.5 - Math.random());
    }

    const q = activeQuizQuestions[currentQuizIndex];
    if (!q) return;

    const progressText = document.getElementById("quiz-progress-text");
    if (progressText) {
      progressText.textContent = isSurvival
        ? `Modo Sobrevivência | ${score} Acertos`
        : `Questão ${currentQuizIndex + 1} de ${activeQuizQuestions.length}`;
    }

    const questionText = document.getElementById("quiz-question-text");
    if (questionText) questionText.textContent = q.question;

    const timerInput = document.querySelector('input[name="timer-enable"]:checked');
    const hasTimer = timerInput ? timerInput.value === "yes" : false;
    const timerDisplay = document.getElementById("quiz-timer-display");

    if (hasTimer) {
      const secInput = document.getElementById("quiz-seconds");
      timeLeft = secInput ? parseInt(secInput.value) || 20 : 20;
      if (timerDisplay) timerDisplay.innerHTML = `⏱️ ${timeLeft}s`;
      timerInterval = setInterval(() => {
        timeLeft--;
        if (timerDisplay) timerDisplay.innerHTML = `⏱️ ${timeLeft}s`;
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          handleAnswer(-1);
        }
      }, 1000);
    } else {
      if (timerDisplay) timerDisplay.textContent = "Tempo Livre";
    }

    const optionsContainer = document.getElementById("quiz-options");
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      const feedbackBox = document.getElementById("quiz-feedback");
      if (feedbackBox) feedbackBox.style.display = "none";

      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx);
        optionsContainer.appendChild(btn);
      });
    }
  }

  function handleAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const q = activeQuizQuestions[currentQuizIndex];
    const optionBtns = document.querySelectorAll(".option-btn");

    optionBtns.forEach(btn => { btn.disabled = true; });

    const feedbackBox = document.getElementById("quiz-feedback");
    const feedbackMsg = document.getElementById("feedback-msg");
    const btnExplain = document.getElementById("btn-quiz-explain");

    if (feedbackBox) feedbackBox.style.display = "block";

    if (selectedIndex === q.correct) {
      score++;
      if (optionBtns[selectedIndex]) optionBtns[selectedIndex].classList.add("correct");
      if (feedbackMsg) {
        feedbackMsg.innerHTML = "✅ Resposta Correta!";
        feedbackMsg.style.color = "var(--success)";
      }
    } else {
      if (isSurvival) lives--;
      if (selectedIndex >= 0 && optionBtns[selectedIndex]) {
        optionBtns[selectedIndex].classList.add("wrong");
      }
      if (optionBtns[q.correct]) optionBtns[q.correct].classList.add("correct");
      if (feedbackMsg) {
        feedbackMsg.innerHTML = "❌ Resposta Incorreta.";
        feedbackMsg.style.color = "var(--error)";
      }
    }

    updateLivesDisplay();
    if (btnExplain) btnExplain.onclick = () => window.goToExplanation(q.topicId);

    const btnNext = document.getElementById("btn-quiz-next");
    if (btnNext) {
      btnNext.textContent = (isSurvival && lives <= 0) ? "Ver Resultados Finais" : "Avançar";
    }
  }

  const btnQuizNext = document.getElementById("btn-quiz-next");
  if (btnQuizNext) {
    btnQuizNext.addEventListener("click", () => {
      if (isSurvival) {
        if (lives > 0) {
          currentQuizIndex++;
          loadQuizQuestion();
        } else {
          endQuiz();
        }
      } else {
        currentQuizIndex++;
        if (currentQuizIndex < activeQuizQuestions.length) {
          loadQuizQuestion();
        } else {
          endQuiz();
        }
      }
    });
  }

  function endQuiz() {
    if (quizPlayBox) quizPlayBox.style.display = "none";
    if (quizResultBox) quizResultBox.style.display = "block";

    const finalScoreEl = document.getElementById("final-score");
    if (finalScoreEl) finalScoreEl.textContent = score;

    const statsEl = document.getElementById("survival-stats");
    const resultTitleEl = document.getElementById("result-title");

    if (isSurvival) {
      if (resultTitleEl) resultTitleEl.textContent = "Sessão Encerrada";
      if (statsEl) statsEl.textContent = `Pontuação final: ${score} respostas corretas no Modo Sobrevivência.`;
    } else {
      if (resultTitleEl) resultTitleEl.textContent = "Avaliação Concluída";
      if (statsEl) statsEl.textContent = `Você acertou ${score} de ${activeQuizQuestions.length} questões.`;
    }
  }

  const btnRestart = document.getElementById("btn-restart-quiz");
  if (btnRestart) btnRestart.addEventListener("click", abortQuiz);

  // ==========================================
  // 7. MOTOR UNIVERSAL DO SIMULADO
  // ==========================================
  const simuladoRoot = document.getElementById("simulado-root");
  if (simuladoRoot && simuladoList && simuladoList.length > 0) {
    let totalQuestionsCount = 0;
    simuladoList.forEach(m => { totalQuestionsCount += (m.questions ? m.questions.length : 0); });

    simuladoRoot.innerHTML = `
      <div class="section-header text-center">
        <h2>Simulado Interativo</h2>
        <p class="text-muted">Módulos progressivos com questões objetivas e questões discursivas com autoavaliação.</p>
      </div>

      <div class="simulado-toolbar">
        <div>
          <strong>Progresso:</strong> <span id="sim-stat-progress">0 / ${totalQuestionsCount} respondidas</span> &nbsp;|&nbsp;
          <strong>Nota:</strong> <span id="sim-stat-score">0.0 / ${totalQuestionsCount.toFixed(1)} pts</span>
        </div>
        <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
          <select id="sim-mod-filter" class="select-input" style="width:auto; padding:0.45rem 0.75rem;">
            <option value="all">Ver Todos os Módulos (${simuladoList.length})</option>
          </select>
          <button id="sim-reset-all" class="btn secondary small">Reiniciar Simulado</button>
        </div>
      </div>

      <div id="simulado-modules-list"></div>
    `;

    const filterSelect = document.getElementById("sim-mod-filter");
    const resetBtn = document.getElementById("sim-reset-all");
    const listContainer = document.getElementById("simulado-modules-list");
    const progressEl = document.getElementById("sim-stat-progress");
    const scoreEl = document.getElementById("sim-stat-score");

    let simState = {};

    simuladoList.forEach(mod => {
      const opt = document.createElement("option");
      opt.value = mod.moduleId;
      opt.textContent = mod.title;
      filterSelect.appendChild(opt);
    });

    function updateSimStats() {
      const keys = Object.keys(simState);
      let pts = 0;
      keys.forEach(k => { pts += simState[k].points || 0; });
      progressEl.textContent = `${keys.length} / ${totalQuestionsCount} respondidas`;
      scoreEl.textContent = `${pts.toFixed(1)} / ${totalQuestionsCount.toFixed(1)} pts`;
    }

    function renderSimList() {
      listContainer.innerHTML = "";
      const fVal = filterSelect.value;
      const mods = fVal === "all"
        ? simuladoList
        : simuladoList.filter(m => String(m.moduleId) === String(fVal));

      mods.forEach(mod => {
        const card = document.createElement("div");
        card.className = "simulado-mod-card";

        card.innerHTML = `
          <div class="simulado-mod-title">${mod.title}</div>
          <div class="simulado-exp-box">
            <strong>${mod.explanationNumber}. Texto de Explicação:</strong><br>
            ${mod.explanation}
          </div>
        `;

        mod.questions.forEach(q => {
          const qCard = document.createElement("div");
          qCard.className = "simulado-q-card";
          const saved = simState[q.number];

          if (q.type === "mc") {
            qCard.innerHTML = `
              <span class="simulado-badge">Item ${q.number} • ${q.label}</span>
              <div class="simulado-q-title">${q.question}</div>
              <div class="simulado-opts-list" id="sim-q-opts-${q.number}"></div>
              <div id="sim-q-fb-${q.number}" style="margin-top:0.75rem; font-weight:600; display:${saved ? 'block' : 'none'};"></div>
            `;
            card.appendChild(qCard);

            const optsBox = qCard.querySelector(`#sim-q-opts-${q.number}`);
            const fbBox = qCard.querySelector(`#sim-q-fb-${q.number}`);

            q.options.forEach((optText, idx) => {
              const btn = document.createElement("button");
              btn.className = "simulado-opt";
              btn.textContent = optText;

              if (saved) {
                btn.disabled = true;
                if (idx === q.correct) btn.classList.add("is-correct");
                else if (idx === saved.selected) btn.classList.add("is-wrong");
              }

              btn.addEventListener("click", () => {
                const isRight = idx === q.correct;
                simState[q.number] = { type: "mc", selected: idx, points: isRight ? 1.0 : 0.0 };

                optsBox.querySelectorAll(".simulado-opt").forEach((b, bIdx) => {
                  b.disabled = true;
                  if (bIdx === q.correct) b.classList.add("is-correct");
                  else if (bIdx === idx) b.classList.add("is-wrong");
                });

                fbBox.style.display = "block";
                fbBox.innerHTML = isRight
                  ? `<span style="color:var(--success);">✅ Correto! (+1.0 pt)</span>`
                  : `<span style="color:var(--error);">❌ Incorreto. Gabarito: ${q.options[q.correct]} (0.0 pt)</span>`;

                updateSimStats();
              });

              optsBox.appendChild(btn);
            });

            if (saved) {
              fbBox.innerHTML = saved.points === 1
                ? `<span style="color:var(--success);">✅ Correto! (+1.0 pt)</span>`
                : `<span style="color:var(--error);">❌ Incorreto. Gabarito: ${q.options[q.correct]} (0.0 pt)</span>`;
            }
          } else {
            const userTxt = saved ? saved.userText : "";
            const isRev = saved ? saved.revealed : false;
            const evalSt = saved ? saved.evalStatus : null;

            qCard.innerHTML = `
              <span class="simulado-badge">Item ${q.number} • ${q.label}</span>
              <div class="simulado-q-title">${q.question}</div>
              <textarea class="simulado-input-area" id="sim-ta-${q.number}" placeholder="Escreva a sua resposta aqui antes de ver o gabarito...">${userTxt}</textarea>
              <div>
                <button class="btn primary small" id="sim-rev-btn-${q.number}">Mostrar Gabarito para Comparar</button>
              </div>
              <div class="simulado-answer-box" id="sim-ans-box-${q.number}" style="display:${isRev ? 'block' : 'none'};">
                <strong>📝 Resposta Esperada (Gabarito Oficial):</strong>
                <p style="margin-top:0.4rem; line-height:1.55;">${q.expectedAnswer}</p>
                <p style="margin-top:0.8rem; font-weight:600; font-size:0.9rem;">Compare com a sua resposta e marque como você foi:</p>
                <div class="simulado-eval-btns">
                  <button class="simulado-eval-btn ${evalSt === 'certo' ? 'active-certo' : ''}" data-status="certo">✅ Certo (+1.0 pt)</button>
                  <button class="simulado-eval-btn ${evalSt === 'meio' ? 'active-meio' : ''}" data-status="meio">⚖️ Meio Certo (+0.5 pt)</button>
                  <button class="simulado-eval-btn ${evalSt === 'errado' ? 'active-errado' : ''}" data-status="errado">❌ Errado (0.0 pt)</button>
                </div>
              </div>
            `;
            card.appendChild(qCard);

            const ta = qCard.querySelector(`#sim-ta-${q.number}`);
            const revBtn = qCard.querySelector(`#sim-rev-btn-${q.number}`);
            const ansBox = qCard.querySelector(`#sim-ans-box-${q.number}`);
            const evalBtns = qCard.querySelectorAll(".simulado-eval-btn");

            revBtn.addEventListener("click", () => {
              ansBox.style.display = "block";
              if (!simState[q.number]) {
                simState[q.number] = { type: "written", userText: ta.value, revealed: true, evalStatus: null, points: 0 };
              } else {
                simState[q.number].userText = ta.value;
                simState[q.number].revealed = true;
              }
            });

            ta.addEventListener("input", () => {
              if (simState[q.number]) simState[q.number].userText = ta.value;
            });

            evalBtns.forEach(b => {
              b.addEventListener("click", () => {
                const st = b.getAttribute("data-status");
                const pts = st === "certo" ? 1.0 : st === "meio" ? 0.5 : 0.0;

                simState[q.number] = { type: "written", userText: ta.value, revealed: true, evalStatus: st, points: pts };

                evalBtns.forEach(btnEl => {
                  btnEl.classList.remove("active-certo", "active-meio", "active-errado");
                });
                b.classList.add(`active-${st}`);

                updateSimStats();
              });
            });
          }
        });

        listContainer.appendChild(card);
      });
    }

    filterSelect.addEventListener("change", renderSimList);
    resetBtn.addEventListener("click", () => {
      simState = {};
      updateSimStats();
      renderSimList();
    });

    renderSimList();
  }
});