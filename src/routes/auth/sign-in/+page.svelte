<script lang="ts">
  import { goto } from "$app/navigation";
  import { authStore } from "$lib/stores/auth";
  import { Button, Heading } from "flowbite-svelte";

  const signIn = () => {
    authStore.set({ user: { username: "Foo" } });
    goto("/dashboard");
  };
</script>

<div class="text-center">
  <Heading class="mb-8">Authentication</Heading>
  <Button on:click={signIn}>Sign In</Button>
</div>
