# Vue + Vite + Supabase OAuth Template

Absolute essentials for a persistent OAuth user authentication using Vue + Pinia + Supabase + Vite

## Quick Start

Run `npm install` to install dependencies. Make sure to populate your `.env` file with your Supabase keys.

## Key Files

- `main.js`: The entry point where Supabase and Pinia are initialized.
- `store/auth.js`: This store manages authentication. Adapt or extend it as necessary.
- `App.vue`: The root Vue component. Also where the OAuth `supabase.auth.signInWithOAuth`is called and given a "provider" property (learn more about supported logins here: https://supabase.com/docs/guides/auth/social-login)

## Additional Information

Useful step by step for setting up callbacks ect: https://supabase.com/docs/guides/auth/social-login/auth-github

### Tips

Let Supabase handle token parsing and management. It's designed to take care of those details for you. If you find yourself attempting to extract tokens from a callback url you're doing something wrong.