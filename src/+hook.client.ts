import { initalizeClerkClient } from "$lib/clerk";

initalizeClerkClient(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY, {
  afterSignInUrl: "/",
  signInUrl: "/auth/sign-in",
  afterSignUpUrl: "/",
  signUpUrl: "/auth/sign-up",
});
