<script lang="ts">
  import { authStore } from "$lib/stores/auth";
  import { Button, Heading } from "flowbite-svelte";

  const signOut = () => {
    authStore.set({ user: null });
  };
</script>

<div class="text-center">
  <Heading class="mb-8">Dashboard</Heading>
  <Button on:click={signOut}>Sign Out</Button>
  <a href="/dashboard/protected">Protected</a>
</div>
