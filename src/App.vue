<template>
  <div>
    <button v-if="!user" @click="signIn">Sign In</button>
    <div v-if="user">
      Hello, {{ user.user_metadata.full_name }}
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useAuthStore } from './store/auth';

const supabase = inject('supabase');
const authStore = useAuthStore();
const user = computed(() => authStore.user);

async function signIn() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github', // Or any other provider you have setup for OAuth
  })
}

const signOut = async () => {
  await supabase.auth.signOut();
  authStore.setUser(null);
};
</script>
