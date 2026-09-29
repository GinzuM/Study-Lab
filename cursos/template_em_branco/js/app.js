document.addEventListener("DOMContentLoaded", () => {
  /* TEMA E SIDEBAR */
  const themeToggle = document.getElementById("theme-toggle");
  const bodyEl = document.body;
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") { 
      bodyEl.setAttribute("data-theme", "dark"); 
      if(iconSun && iconMoon) { iconMoon.style.display = "none"; iconSun.style.display = "block"; }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (bodyEl.getAttribute("data-theme") === "dark") {
        bodyEl.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        if(iconSun && iconMoon) { iconSun.style.display = "none"; iconMoon.style.display = "block"; }
      } else {
        bodyEl.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        if(iconSun && iconMoon) { iconMoon.style.display = "none"; iconSun.style.display = "block"; }
      }
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const closeSidebar = document.getElementById("close-sidebar");

  function openMenu() { sidebar.classList.add("open"); sidebarOverlay.classList.add("open"); }
  function closeMenu() { sidebar.classList.remove("open"); sidebarOverlay.classList.remove("open"); }

  if(menuToggle) menuToggle.addEventListener("click", openMenu);
  if(closeSidebar) closeSidebar.addEventListener("click", closeMenu);
  if(sidebarOverlay) sidebarOverlay.addEventListener("click", closeMenu);

  /* TABS E RESUMOS */
  const navBtns = document.querySelectorAll(".nav-btn"); const tabContents = document.querySelectorAll(".tab-content");
  function switchTab(tabId) { tabContents.forEach(tab => tab.classList.remove("active")); navBtns.forEach(btn => btn.classList.remove("active")); const targetTab = document.getElementById(tabId); const targetBtn = document.querySelector(`[data-tab="${tabId}"]`); if (targetTab) targetTab.classList.add("active"); if (targetBtn) targetBtn.classList.add("active"); }
  navBtns.forEach(btn => { btn.addEventListener("click", () => switchTab(btn.dataset.tab)); });
  window.goToExplanation = function(topicId) { switchTab("resumos"); setTimeout(() => { const el = document.getElementById(`art-${topicId}`); if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.style.borderColor = "var(--brand-primary)"; setTimeout(() => el.style.borderColor = "var(--border-color)", 2000); } }, 100); };
  
  const articlesContainer = document.getElementById("articles-container");
  if (articlesContainer && typeof studyData !== 'undefined') { articlesContainer.innerHTML = studyData.topics.map(topic => `<article class="article-card" id="art-${topic.id}"><h3>${topic.title}</h3><p style="white-space: pre-line;">${topic.content}</p><div class="mnemonic-box">${topic.mnemonic}</div></article>`).join(""); }
  
  /* MAPA MENTAL */
  const treeContainer = document.getElementById("mindmap-container");
  function renderMindmap() { treeContainer.innerHTML = ""; const levels = {}; studyData.tree.forEach(node => { if (!levels[node.level]) levels[node.level] = []; levels[node.level].push(node); }); Object.keys(levels).forEach(level => { const levelDiv = document.createElement("div"); levelDiv.className = "map-level"; levels[level].forEach(node => { const nodeDiv = document.createElement("div"); nodeDiv.className = "map-node"; nodeDiv.innerHTML = `<h4>${node.title}</h4><p>Ver documentação</p>`; nodeDiv.addEventListener("click", () => window.goToExplanation(node.id)); levelDiv.appendChild(nodeDiv); }); treeContainer.appendChild(levelDiv); }); }
  if (treeContainer && typeof studyData !== 'undefined') renderMindmap();
  
  /* FLASHCARDS */
  let currentCardIndex = 0; const flashcardEl = document.getElementById("flashcard"); const fcCategory = document.getElementById("fc-category"); const fcQuestion = document.getElementById("fc-question"); const fcAnswer = document.getElementById("fc-answer"); const fcCounter = document.getElementById("fc-counter"); const fcMoreBtn = document.getElementById("fc-more-btn");
  let shuffledFlashcards = [];
  if(typeof studyData !== 'undefined') shuffledFlashcards = [...studyData.flashcards].sort(() => 0.5 - Math.random());
  
  function updateFlashcard() { if (shuffledFlashcards.length === 0) return; if (flashcardEl) flashcardEl.classList.remove("flipped"); const current = shuffledFlashcards[currentCardIndex]; if (fcCategory) fcCategory.textContent = current.category; if (fcQuestion) fcQuestion.textContent = current.question; if (fcAnswer) fcAnswer.textContent = current.answer; if (fcCounter) fcCounter.textContent = `${currentCardIndex + 1} / ${shuffledFlashcards.length}`; if (fcMoreBtn) { fcMoreBtn.onclick = (e) => { e.stopPropagation(); window.goToExplanation(current.topicId); }; } }
  if (flashcardEl) { flashcardEl.addEventListener("click", () => flashcardEl.classList.toggle("flipped")); }
  const fcPrev = document.getElementById("fc-prev"); if (fcPrev) { fcPrev.addEventListener("click", () => { currentCardIndex = (currentCardIndex > 0) ? currentCardIndex - 1 : shuffledFlashcards.length - 1; updateFlashcard(); }); }
  const fcNext = document.getElementById("fc-next"); if (fcNext) { fcNext.addEventListener("click", () => { currentCardIndex = (currentCardIndex < shuffledFlashcards.length - 1) ? currentCardIndex + 1 : 0; updateFlashcard(); }); }
  if (shuffledFlashcards.length > 0) updateFlashcard();
  
  /* QUIZ */
  const quizConfigBox = document.getElementById("quiz-config"); const quizPlayBox = document.getElementById("quiz-play"); const quizResultBox = document.getElementById("quiz-result"); const btnStartQuiz = document.getElementById("btn-start-quiz");
  const timerGroup = document.getElementById("timer-val-group"); const configNormal = document.getElementById("config-normal"); const configSurvival = document.getElementById("config-survival");
  document.querySelectorAll('input[name="quiz-mode"]').forEach(r => { r.addEventListener("change", (e) => { if (e.target.value === "survival") { if (configNormal) configNormal.style.display = "none"; if (configSurvival) configSurvival.style.display = "block"; } else { if (configNormal) configNormal.style.display = "block"; if (configSurvival) configSurvival.style.display = "none"; } }); });
  document.querySelectorAll('input[name="timer-enable"]').forEach(r => { r.addEventListener("change", (e) => { if (timerGroup) timerGroup.style.display = e.target.value === "yes" ? "block" : "none"; }); });
  
  let activeQuizQuestions = []; let currentQuizIndex = 0; let score = 0; let lives = 0; let isSurvival = false; let timerInterval = null; let timeLeft = 0;
  function abortQuiz() { clearInterval(timerInterval); if (quizPlayBox) quizPlayBox.style.display = "none"; if (quizResultBox) quizResultBox.style.display = "none"; if (quizConfigBox) quizConfigBox.style.display = "block"; }
  const btnAbort = document.getElementById("btn-abort-quiz"); if (btnAbort) { btnAbort.addEventListener("click", abortQuiz); }
  
  if (btnStartQuiz && typeof studyData !== 'undefined') { btnStartQuiz.addEventListener("click", () => { const modeInput = document.querySelector('input[name="quiz-mode"]:checked'); isSurvival = modeInput ? modeInput.value === "survival" : false; const shuffledQuiz = [...studyData.quiz].sort(() => 0.5 - Math.random()); if (isSurvival) { activeQuizQuestions = shuffledQuiz; const livesEl = document.getElementById("quiz-lives"); lives = livesEl ? parseInt(livesEl.value) || 5 : 5; } else { const qCountEl = document.getElementById("quiz-count"); const qCount = qCountEl ? parseInt(qCountEl.value) || 10 : 10; activeQuizQuestions = shuffledQuiz.slice(0, Math.min(qCount, shuffledQuiz.length)); } currentQuizIndex = 0; score = 0; if (quizConfigBox) quizConfigBox.style.display = "none"; if (quizResultBox) quizResultBox.style.display = "none"; if (quizPlayBox) quizPlayBox.style.display = "block"; loadQuizQuestion(); }); }
  
  function updateLivesDisplay() { const livesDisplay = document.getElementById("quiz-lives-display"); if (livesDisplay) { if (isSurvival) { livesDisplay.style.display = "inline-flex"; livesDisplay.innerHTML = `<span style="color:var(--error); margin-right:4px;">❤️</span> ${lives}`; } else { livesDisplay.style.display = "none"; } } }
  
  function loadQuizQuestion() { clearInterval(timerInterval); updateLivesDisplay(); if (isSurvival && currentQuizIndex >= activeQuizQuestions.length) { currentQuizIndex = 0; activeQuizQuestions = activeQuizQuestions.sort(() => 0.5 - Math.random()); } const q = activeQuizQuestions[currentQuizIndex]; const progressText = document.getElementById("quiz-progress-text"); if (progressText) { progressText.textContent = isSurvival ? `Modo Sobrevivência | ${score} Acertos` : `Questão ${currentQuizIndex + 1} de ${activeQuizQuestions.length}`; } const questionText = document.getElementById("quiz-question-text"); if (questionText) questionText.textContent = q.question; const hintContainer = document.getElementById("hint-container"); if (hintContainer) { const hintText = document.getElementById("hint-text"); const btnShowHint = document.getElementById("btn-show-hint"); if (q.hint && hintText && btnShowHint) { hintContainer.style.display = "block"; hintText.style.display = "none"; hintText.textContent = q.hint; btnShowHint.onclick = () => hintText.style.display = "block"; } else { hintContainer.style.display = "none"; } } const timerInput = document.querySelector('input[name="timer-enable"]:checked'); const hasTimer = timerInput ? timerInput.value === "yes" : false; const timerDisplay = document.getElementById("quiz-timer-display"); if (hasTimer) { const secInput = document.getElementById("quiz-seconds"); timeLeft = secInput ? parseInt(secInput.value) || 20 : 20; if (timerDisplay) timerDisplay.innerHTML = `⏱️ ${timeLeft}s`; timerInterval = setInterval(() => { timeLeft--; if (timerDisplay) timerDisplay.innerHTML = `⏱️ ${timeLeft}s`; if (timeLeft <= 0) { clearInterval(timerInterval); handleAnswer(-1); } }, 1000); } else { if (timerDisplay) timerDisplay.textContent = "Tempo Livre"; } const optionsContainer = document.getElementById("quiz-options"); if (optionsContainer) { optionsContainer.innerHTML = ""; const feedbackBox = document.getElementById("quiz-feedback"); if (feedbackBox) feedbackBox.style.display = "none"; q.options.forEach((opt, idx) => { const btn = document.createElement("button"); btn.className = "option-btn"; btn.textContent = opt; btn.onclick = () => handleAnswer(idx); optionsContainer.appendChild(btn); }); } }
  
  function handleAnswer(selectedIndex) { clearInterval(timerInterval); const q = activeQuizQuestions[currentQuizIndex]; const optionBtns = document.querySelectorAll(".option-btn"); optionBtns.forEach(btn => btn.disabled = true); const feedbackBox = document.getElementById("quiz-feedback"); const feedbackMsg = document.getElementById("feedback-msg"); const btnExplain = document.getElementById("btn-quiz-explain"); if (feedbackBox) feedbackBox.style.display = "block"; if (selectedIndex === q.correct) { score++; if (optionBtns[selectedIndex]) optionBtns[selectedIndex].classList.add("correct"); if (feedbackMsg) { feedbackMsg.innerHTML = "Correto"; feedbackMsg.style.color = "var(--success)"; } } else { if (isSurvival) lives--; if (selectedIndex >= 0 && optionBtns[selectedIndex]) { optionBtns[selectedIndex].classList.add("wrong"); } if (optionBtns[q.correct]) optionBtns[q.correct].classList.add("correct"); if (feedbackMsg) { feedbackMsg.innerHTML = "Incorreto"; feedbackMsg.style.color = "var(--error)"; } } updateLivesDisplay(); if (btnExplain) btnExplain.onclick = () => window.goToExplanation(q.topicId); const btnNext = document.getElementById("btn-quiz-next"); if (btnNext) { if (isSurvival && lives <= 0) { btnNext.textContent = "Ver Resultados Finais"; } else { btnNext.textContent = "Avançar"; } } }
  
  const btnQuizNext = document.getElementById("btn-quiz-next"); if (btnQuizNext) { btnQuizNext.addEventListener("click", () => { if (isSurvival) { if (lives > 0) { currentQuizIndex++; loadQuizQuestion(); } else { endQuiz(); } } else { currentQuizIndex++; if (currentQuizIndex < activeQuizQuestions.length) { loadQuizQuestion(); } else { endQuiz(); } } }); }
  
  function endQuiz() { if (quizPlayBox) quizPlayBox.style.display = "none"; if (quizResultBox) quizResultBox.style.display = "block"; const finalScoreEl = document.getElementById("final-score"); if (finalScoreEl) finalScoreEl.textContent = score; const statsEl = document.getElementById("survival-stats"); const resultTitleEl = document.getElementById("result-title"); if (isSurvival) { if (resultTitleEl) resultTitleEl.textContent = "Sessão Terminada"; if (statsEl) statsEl.textContent = `Pontuação final: ${score} respostas corretas no Modo Sobrevivência.`; } else { if (resultTitleEl) resultTitleEl.textContent = "Avaliação Concluída"; if (statsEl) statsEl.textContent = `Respondeu corretamente a ${score} de ${activeQuizQuestions.length} questões.`; } }
  
  const btnRestart = document.getElementById("btn-restart-quiz"); if (btnRestart) { btnRestart.addEventListener("click", abortQuiz); }
});
