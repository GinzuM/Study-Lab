// =========================================================================
// js/auth.js — Autenticação Supabase & Controle de Sessão do Doc's Lab
// =========================================================================

const SUPABASE_URL = 'https://sqhymzvkfqudmridwmop.supabase.co';
const SUPABASE_KEY = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_';

// Inicializa o cliente global do Supabase
const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;

window. currentSessionUser = null;

async function checkAuth() {
  if (!supabaseClient) return;

  try {
    const { data: { session }, error } = await supabaseClient.auth.getSession();

    // Se não houver sessão ativa, redireciona para a tela de login
    if (error || !session) {
      // Calcula o caminho correto para pages/login.html mesmo em subpastas
      const isInSubfolder = window.location.pathname.includes('/cursos/') || window.location.pathname.includes('/pages/');
      const loginPath = isInSubfolder ? '../pages/login.html' : 'pages/login.html';
      if (!window.location.pathname.endsWith('login.html')) {
        window.location.replace(loginPath);
      }
      return;
    }

    window.currentSessionUser = session.user;

    // Exibe o e-mail do usuário nos elementos da interface
    const emailDisplays = document.querySelectorAll('.user-display-email, #user-display-email');
    emailDisplays.forEach(el => {
      el.textContent = session.user.email;
    });

    // Se o usuário ainda não personalizou o nome no Doc's Lab, usa o prefixo do e-mail
    if (typeof window.syncAuthenticatedUser === 'function') {
      window.syncAuthenticatedUser(session.user);
    }
  } catch (err) {
    console.warn('Aviso ao verificar sessão Supabase:', err);
  }
}

// Executa a verificação automaticamente fora da página de login
if (!window.location.pathname.endsWith('login.html')) {
  checkAuth();
}

// Configura o botão de Logout globalmente
document.addEventListener('click', async (e) => {
  const logoutBtn = e.target.closest('#btn-logout, .btn-logout-action');
  if (logoutBtn) {
    e.preventDefault();
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    const isInSubfolder = window.location.pathname.includes('/cursos/');
    window.location.replace(isInSubfolder ? '../../pages/login.html' : 'pages/login.html');
  }
});