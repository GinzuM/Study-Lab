// js/auth.js

const SUPABASE_URL = 'https://sqhymzvkfqudmridwmop.supabase.co';
const SUPABASE_KEY = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_';

// Inicializa o cliente global do Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

// Verifica a sessão na página principal (index.html)
async function checkAuth() {
  // Pega a sessão atual do localStorage
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  
  // Se não houver sessão, expulsa imediatamente para o login
  if (error || !session) {
    window.location.replace('/pages/login.html');
    return;
  }

  // Se estiver logado, exibe o e-mail caso o elemento exista
  const emailDisplay = document.getElementById('user-display-email');
  if (emailDisplay) {
    emailDisplay.textContent = session.user.email;
  }
}

// Executa a verificação apenas se estivermos na página principal (index.html)
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
  checkAuth();
}

// Configura o botão de logout globalmente
document.addEventListener('click', async (e) => {
  const logoutBtn = e.target.closest('#btn-logout');
  if (logoutBtn) {
    e.preventDefault();
    await supabaseClient.auth.signOut();
    window.location.replace('/pages/login.html');
  }
});
