document.addEventListener("DOMContentLoaded", () => {
  // 1. CONTROLE DA SIDEBAR (MENU HAMBÚRGUER)
  const openBtn = document.getElementById("open-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  function toggleMenu() {
    if (sidebar && overlay) {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  if (openBtn) openBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", toggleMenu);

  // 2. TEMA CLARO / ESCURO (Sincronizado via localStorage)
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

  // 3. BARRA DE PESQUISA DE CURSOS EM TEMPO REAL
  const searchInput = document.getElementById("course-search");
  const cards = document.querySelectorAll(".course-card");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const title = (card.dataset.title || "").toLowerCase();
        const text = card.innerText.toLowerCase();
        if (title.includes(term) || text.includes(term)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});