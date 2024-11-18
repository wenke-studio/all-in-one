<script lang="ts">
  import { Button } from "flowbite-svelte";
  import clerk from "./store";

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

  const signIn = () => {
    const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
    if (mode === "modal") {
      $clerk?.openSignIn(opts);
    } else {
      $clerk?.redirectToSignIn(opts);
    }
  };
</script>

<Button on:click={signIn}>
  {#if children}
    {@render children()}
  {:else}
    Sign In
  {/if}
</Button>
