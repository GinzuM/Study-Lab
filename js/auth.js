// 1. Configuração da Conexão
const supabaseUrl = 'https://sqhymzvkfqudmridwmop.supabase.co';
const supabaseKey = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_'; 
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 2. Verifica o status da sessão atual
async function checkAuthStatus(isRoot = false) {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
        if (!isRoot) {
            window.location.href = '../../index.html';
        }
    } else {
        if (isRoot) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';
        }
    }
}

// 3. Função de Login
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert('Erro no login: Credenciais inválidas.');
    } else {
        checkAuthStatus(true);
    }
}

// 4. Função de Logout
async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.href = 'index.html'; 
    }
}
