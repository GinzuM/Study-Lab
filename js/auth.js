import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sqhymzvkfqudmridwmop.supabase.co'
const supabaseKey = 'sb_publishable_flOOhNjr0YJ8es0EtyLG5w_csXqh0n_'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})
