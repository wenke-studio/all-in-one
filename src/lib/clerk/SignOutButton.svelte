<script lang="ts">
  import { type Clerk } from "@clerk/clerk-js";
  import { Button } from "flowbite-svelte";
  import ClerkLoaded from "./ClerkLoaded.svelte";

  const signOut = (clerk: Clerk) => {
    clerk.signOut();
  };
</script>

<ClerkLoaded let:clerk>
  {#if clerk && clerk.user}
    <Button on:click={() => signOut(clerk)}>
      <slot>Sign out</slot>
    </Button>
  {/if}
</ClerkLoaded>
