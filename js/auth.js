// =========================================================
// CONFIGURAÇÃO DA CONEXÃO SUPABASE (AUTH ANTIGO)
// =========================================================

const supabaseUrl = 'https://sqhymzvkfqudmridwmop.supabase.co';
const supabaseKey = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_';

// A variável se chama supabaseClient para não conflitar com o CDN
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// Descobre o caminho correto dependendo se está na raiz ou em subpastas (/cursos/)
function getRootPath() {
  const path = window.location.pathname;
  if (path.includes("/cursos/")) {
    return "../../";
  }
  return "./";
}

// 2. Verifica o status da sessão atual
async function checkAuthStatus(isRoot = false) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    const isLoginPage = window.location.pathname.endsWith("login.html");

    if (!session) {
        if (!isRoot && !isLoginPage) {
            window.location.href = getRootPath() + "login.html";
        }
    } else {
        if (isRoot && isLoginPage) {
            window.location.href = "./index.html";
        }
        // Atualiza o e-mail do utilizador logado caso o elemento exista na página
        const userDisplay = document.getElementById("user-display-email");
        if (userDisplay && session.user) {
            userDisplay.textContent = session.user.email;
        }
    }
}

// 3. Função de Login
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert('Erro no login: Credenciais inválidas.');
    } else {
        checkAuthStatus(true);
        window.location.href = './index.html';
    }
}

// 4. Função de Logout
async function handleLogout() {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
        window.location.href = getRootPath() + 'login.html'; 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Verifica o status de autenticação ao carregar
    const isRootPage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");
    checkAuthStatus(isRootPage);

    // Associa o evento de logout ao botão caso ele exista
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", handleLogout);
    }
});