import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createClient } from '@supabase/supabase-js'
import { useAuthStore } from './store/auth'

const supabase = createClient(
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY"
);

const app = createApp(App)
app.use(createPinia())
app.provide('supabase', supabase)

supabase.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore();
  if (event === 'SIGNED_IN') {
    authStore.setUser(session.user);
  } else if (event !== 'INITIAL_SESSION') {
    authStore.setUser(null);
  }
});

app.mount('#app')