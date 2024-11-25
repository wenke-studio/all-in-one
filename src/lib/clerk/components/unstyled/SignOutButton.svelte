<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import type { Clerk } from "@clerk/types";
  import ClerkLoaded from "../control/ClerkLoaded.svelte";

  const signOut = (clerk: Clerk) => {
    clerk.signOut();
  };
</script>

<ClerkLoaded let:clerk>
  {#if clerk && clerk.user}
    <Button onclick={() => signOut(clerk)}>
      <slot>Sign out</slot>
    </Button>
  {/if}
</ClerkLoaded>
