document.addEventListener("DOMContentLoaded", () => {
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

  /* Lógica Sidebar */
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const closeSidebar = document.getElementById("close-sidebar");

  function openMenu() { sidebar.classList.add("open"); sidebarOverlay.classList.add("open"); }
  function closeMenu() { sidebar.classList.remove("open"); sidebarOverlay.classList.remove("open"); }

  if(menuToggle) menuToggle.addEventListener("click", openMenu);
  if(closeSidebar) closeSidebar.addEventListener("click", closeMenu);
  if(sidebarOverlay) sidebarOverlay.addEventListener("click", closeMenu);
});
