// js/auth.js

const supabaseUrl = 'https://sqhymzvkfqudmridwmop.supabase.co'
const supabaseKey = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_'

// Inicializa o cliente Supabase globalmente
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

// Verifica a sessão ao carregar a página index
async function checkAuth() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error || !session) {
    // Se não estiver logado, redireciona para a tela de login
    window.location.href = 'pages/login.html';
    return;
  }

  // Se houver elemento do e-mail na tela, exibe
  const emailDisplay = document.getElementById('user-display-email');
  if (emailDisplay) {
    emailDisplay.textContent = session.user.email;
  }
}

// Executa a checagem imediatamente
checkAuth();

// Evento do botão de logout (caso exista na página)
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await supabase.auth.signOut();
      window.location.href = 'pages/login.html';
    });
  }
});
