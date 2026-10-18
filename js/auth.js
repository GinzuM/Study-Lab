// js/auth.js
const SUPABASE_URL = 'https://sqhymzvkfqudmridwmop.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getRootPath() {
  const path = window.location.pathname;
  if (path.includes("/cursos/")) {
    return "../../";
  }
  return "./";
}

async function checkAuth() {
  if (SUPABASE_URL.includes("SEU_PROJETO")) {
    return;
  }

  const { data: { session } } = await supabaseClient.auth.getSession();
  const isLoginPage = window.location.pathname.endsWith("login.html");

  // Se não houver sessão ativa e não estivermos na página de login, redireciona para o login
  if (!session && !isLoginPage) {
    window.location.href = getRootPath() + "login.html";
  } else if (session && isLoginPage) {
    window.location.href = getRootPath() + "index.html";
  } else if (session) {
    const userDisplay = document.getElementById("user-display-email");
    if (userDisplay) userDisplay.textContent = session.user.email;
  }
}

window.logoutUser = async function() {
  if (!SUPABASE_URL.includes("SEU_PROJETO")) {
    await supabaseClient.auth.signOut();
  }
  // Redireciona corretamente para a página de login após o logout
  window.location.href = getRootPath() + "login.html";
};

document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", window.logoutUser);
  }
});
