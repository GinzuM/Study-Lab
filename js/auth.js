// js/auth.js

const supabaseUrl = 'https://sqhymzvkfqudmridwmop.supabase.co'
const supabaseKey = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_'

// Inicialização correta usando o objeto global do SDK v2
const supabase = supabase.createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

async function checkAuth() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  // Se houver erro ou nenhuma sessão ativa, manda pra tela de login
  if (error || !session) {
    window.location.href = 'pages/login.html';
    return;
  }

  // Exibe o e-mail do usuário se o elemento existir na página
  const emailDisplay = document.getElementById('user-display-email');
  if (emailDisplay) {
    emailDisplay.textContent = session.user.email;
  }
}

// Executa a verificação assim que o script carrega
checkAuth();

// Delegação de evento para o botão de logout funcionar independente do menu
document.addEventListener('click', async (e) => {
  if (e.target && (e.target.id === 'btn-logout' || e.target.closest('#btn-logout'))) {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = 'pages/login.html';
    } else {
      alert('Erro ao sair da conta: ' + error.message);
    }
  }
});
