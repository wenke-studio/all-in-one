<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import type { Clerk } from "@clerk/types";
  import ClerkLoaded from "../control/ClerkLoaded.svelte";

  interface Props {
    // show sign-in modal or redirect to custom sign-in page
    mode?: "modal" | "redirect" | undefined;

    // redirect to this url after sign-in
    afterSignInUrl?: string | undefined;

    // redirect to this url after sign-up
    afterSignUpUrl?: string | undefined;

    // only used when mode is "redirect" and custom sign-in page
    redirectUrl?: string | undefined;

    children?: () => any;
  }

  const {
    afterSignInUrl,
    afterSignUpUrl,
    redirectUrl,
    mode = "modal",
    children,
  }: Props = $props();

  const signIn = (clerk: Clerk) => {
    const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
    if (mode === "modal") {
      clerk?.openSignIn(opts);
    } else {
      clerk?.redirectToSignIn(opts);
    }
  };
</script>

<ClerkLoaded let:clerk>
  {#if clerk && !clerk.user}
    <Button onclick={() => signIn(clerk)}>
      {#if children}
        {@render children()}
      {:else}
        Sign In
      {/if}
    </Button>
  {/if}
</ClerkLoaded>
