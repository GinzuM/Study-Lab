import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://sqhymzvkfqudmridwmop.supabase.co'
const supabaseKey = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

// Função global de proteção de rota para páginas protegidas (como a home)
export async function checkUserSession() {
  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error || !session) {
    // Se não estiver logado, redireciona para a página de login na pasta correta
    window.location.href = '/pages/login.html'
    return null
  }
  return session
}
