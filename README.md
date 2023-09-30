# Vue + Supabase + Pinia OAuth Template

Absolute essentials for a persistent OAuth user authentication using Vue + + Supabase + Pinia + Vite

## Quick Start

Run `npm install` to install dependencies. Make sure to populate `src/main.js` file with your Supabase keys.

## Key Files

- `main.js`: The entry point where Supabase and Pinia are initialized.
- `store/auth.js`: This store manages authentication. Adapt or extend it as necessary.
- `App.vue`: The root Vue component. Also where the OAuth `supabase.auth.signInWithOAuth`is called and given a "provider" property (learn more about supported logins here: https://supabase.com/docs/guides/auth/social-login)

## Additional Information

Useful step by step for setting up callbacks ect: https://supabase.com/docs/guides/auth/social-login/auth-github

### Tips

Let Supabase handle token parsing and management. It's designed to take care of those details for you. If you find yourself attempting to extract tokens from a callback url you're doing something wrong.

## Setting Up OAuth with Supabase

1. **Supabase Console**: Head to the `Authentication` tab in your Supabase project and enable the provider you'd like (GitHub, Google, etc.).
2. **Provider Setup**: Next, go to the provider's website to set up OAuth for your application. If it's GitHub, for instance, follow their [official guide](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) to create a new OAuth app.
3. **Callback URL**: In your provider's OAuth setup, paste the Supabase URL into the callback field.
4. **Client ID & Secret**: Back in Supabase, populate the fields for the Client ID and Client Secret which you'll get from your provider.
5. **Site URL**: Make sure to point the callback URL in Supabase to your main site. For local development, `http://127.0.0.1:5173/` will do.
6. **App.vue Setup**: Open `App.vue` and locate the `signIn` method. Replace the `provider` field with your chosen provider.
**Extra**: If you need to redirect the user to a specific URL post-authentication, use the `redirectTo` parameter inside the `signInWithOAuth` object.

```js
const { user, session, error } = await supabase.auth.signInWithOAuth({
  provider: 'github',  // Or whatever provider you chose
  redirectTo: 'https://example.com/'  // Optional
});
```