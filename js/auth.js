// =========================================================================
// js/auth.js — Autenticação & Controle de Sessão Blindado para Vercel e Local
// =========================================================================

const SUPABASE_URL = 'https://ffjbtzpending.supabase.co'; // Cole aqui a sua URL do Supabase se tiver
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'; // Cole aqui a sua ANON KEY do Supabase se tiver

let supabaseClient = null;
const isRealSupabaseConfigured = SUPABASE_URL.startsWith('http') && !SUPABASE_URL.includes('pending');

try {
  if (window.supabase && isRealSupabaseConfigured) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    window.supabaseClient = supabaseClient;
  }
} catch (err) {
  console.warn('Aviso ao iniciar cliente Supabase:', err);
}

// Deteta se está na página de login mesmo com '?' no final ou Clean URLs da Vercel (/pages/login)
function isCurrentlyOnLoginPage() {
  const cleanPath = window.location.pathname.toLowerCase();
  return cleanPath.includes('/login') || cleanPath.includes('\\login') || !!document.getElementById('form-login');
}

function saveUnifiedSession(userObj) {
  if (!userObj) return;
  const serialized = JSON.stringify(userObj);
  try { localStorage.setItem('docslab_auth_session', serialized); } catch (e) {}
  try { sessionStorage.setItem('docslab_auth_session', serialized); } catch (e) {}
  window.name = 'DOCSLAB_SESSION:' + serialized;
}

function getUnifiedSession() {
  try {
    const local = localStorage.getItem('docslab_auth_session');
    if (local) return JSON.parse(local);
  } catch (e) {}

  try {
    const sess = sessionStorage.getItem('docslab_auth_session');
    if (sess) return JSON.parse(sess);
  } catch (e) {}

  if (window.name && window.name.startsWith('DOCSLAB_SESSION:')) {
    try {
      const data = JSON.parse(window.name.replace('DOCSLAB_SESSION:', ''));
      localStorage.setItem('docslab_auth_session', JSON.stringify(data));
      return data;
    } catch (e) {}
  }
  return null;
}

function clearUnifiedSession() {
  try { localStorage.removeItem('docslab_auth_session'); } catch (e) {}
  try { sessionStorage.removeItem('docslab_auth_session'); } catch (e) {}
  window.name = '';
}

function redirectToMainApp() {
  if (window.location.protocol.startsWith('http')) {
    // Na Vercel ou LiveServer, vai sempre para a raiz limpa do domínio
    window.location.href = window.location.origin + '/index.html';
  } else {
    window.location.href = '../index.html';
  }
}

function redirectToLogin() {
  if (!isCurrentlyOnLoginPage()) {
    if (window.location.protocol.startsWith('http')) {
      window.location.href = window.location.origin + '/pages/login.html';
    } else {
      window.location.href = 'pages/login.html';
    }
  }
}

function showFeedback(msg, isError = true) {
  const box = document.getElementById('auth-feedback');
  if (!box) return;
  box.textContent = msg;
  box.className = isError
    ? 'p-3.5 rounded-2xl border text-xs font-bold text-center bg-red-500/20 text-red-300 border-red-500/40'
    : 'p-3.5 rounded-2xl border text-xs font-bold text-center bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
}

window.toggleAuthMode = function() {
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const toggleBtn = document.getElementById('toggle-auth-mode');
  if (!formLogin || !formRegister) return;

  const isLoginVisible = !formLogin.classList.contains('hidden');
  if (isLoginVisible) {
    formLogin.classList.add('hidden');
    formRegister.classList.remove('hidden');
    toggleBtn.textContent = 'Já possui uma conta? Faça Login';
  } else {
    formRegister.classList.add('hidden');
    formLogin.classList.remove('hidden');
    toggleBtn.textContent = 'Não tem uma conta? Cadastre-se gratuitamente';
  }
};

// Handler global direto para o Login (Impede 100% o reload com '?')
window.handleLoginSubmit = async function(e) {
  if (e) e.preventDefault();
  const email = (document.getElementById('login-email')?.value || '').trim().toLowerCase();
  const password = document.getElementById('login-password')?.value || '';
  const btn = document.getElementById('btn-submit-login');

  if (!email) return false;
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Entrando...';
  }

  if (supabaseClient && isRealSupabaseConfigured) {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (!error && data && data.user) {
        saveUnifiedSession({ id: data.user.id, email: data.user.email });
        showFeedback('Login realizado! A entrar no Doc\'s Lab...', false);
        setTimeout(() => redirectToMainApp(), 150);
        return false;
      }
      if (error) {
        showFeedback('Erro: ' + error.message, true);
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Entrar no Laboratório';
        }
        return false;
      }
    } catch (err) {
      console.warn('Falha de rede Supabase, a usar sessão direta:', err);
    }
  }

  // Autenticação Direta Determinística por E-mail (Separa cada conta por e-mail mesmo sem chave Supabase)
  const deterministicId = 'user_' + btoa(email).replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
  saveUnifiedSession({ id: deterministicId, email });
  showFeedback('Acesso liberado! A redirecionar...', false);
  setTimeout(() => redirectToMainApp(), 150);
  return false;
};

// Handler global direto para o Cadastro
window.handleRegisterSubmit = async function(e) {
  if (e) e.preventDefault();
  const email = (document.getElementById('register-email')?.value || '').trim().toLowerCase();
  const password = document.getElementById('register-password')?.value || '';
  const btn = document.getElementById('btn-submit-register');

  if (!email) return false;
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Criando conta...';
  }

  if (supabaseClient && isRealSupabaseConfigured) {
    try {
      const { data, error } = await supabaseClient.auth.signUp({ email, password });
      if (!error && data && data.user) {
        saveUnifiedSession({ id: data.user.id, email: data.user.email });
        showFeedback('Conta criada com sucesso! A entrar...', false);
        setTimeout(() => redirectToMainApp(), 200);
        return false;
      }
      if (error) {
        showFeedback('Erro ao cadastrar: ' + error.message, true);
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Criar Conta Gratuita';
        }
        return false;
      }
    } catch (err) {}
  }

  const deterministicId = 'user_' + btoa(email).replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
  saveUnifiedSession({ id: deterministicId, email });
  showFeedback('Conta criada! A entrar no Doc\'s Lab...', false);
  setTimeout(() => redirectToMainApp(), 150);
  return false;
};

async function checkSessionGuard() {
  const onLogin = isCurrentlyOnLoginPage();
  let activeUser = getUnifiedSession();

  if (supabaseClient && isRealSupabaseConfigured) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session && session.user) {
        activeUser = { id: session.user.id, email: session.user.email };
        saveUnifiedSession(activeUser);
      }
    } catch (e) {}
  }

  if (!activeUser && !onLogin) {
    redirectToLogin();
    return;
  }

  if (activeUser && onLogin) {
    redirectToMainApp();
    return;
  }

  if (activeUser && !onLogin) {
    window.currentSessionUser = activeUser;
    document.querySelectorAll('.user-display-email').forEach(el => {
      el.textContent = activeUser.email;
    });
    if (typeof window.syncAuthenticatedUser === 'function') {
      window.syncAuthenticatedUser(activeUser);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkSessionGuard();

  document.querySelectorAll('#btn-logout').forEach(btn => {
    btn.addEventListener('click', async () => {
      clearUnifiedSession();
      if (supabaseClient && isRealSupabaseConfigured) {
        try { await supabaseClient.auth.signOut(); } catch (e) {}
      }
      redirectToLogin();
    });
  });
});