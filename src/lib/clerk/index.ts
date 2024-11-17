import clerk from "$lib/clerk/store";
import { Clerk } from "@clerk/clerk-js";

export type DefaultOptions = {
  // Sign In
  afterSignInUrl: string;
  signInUrl: string;
  // Sign Up
  afterSignUpUrl: string;
  signUpUrl: string;
};

const defaultOptions: DefaultOptions = {
  afterSignInUrl: "/",
  signInUrl: "/auth/sign-in",
  afterSignUpUrl: "/",
  signUpUrl: "/auth/sign-up",
};

export async function initalizeClerkClient(
  publishableKey: string,
  options: DefaultOptions = defaultOptions
) {
  const instance = new Clerk(publishableKey);

  await instance.load(options).catch((error: Error) => {
    console.error(error);
  });

  instance.addListener((event) => {
    if (event.user) {
      document.dispatchEvent(
        new CustomEvent("clerk-sveltekit:user", { detail: event.user })
      );
    }
  });

  clerk.set(instance);

  clerk.subscribe((clerkInstance) => {
    if (clerkInstance) window.Clerk = clerkInstance;
  });
}
