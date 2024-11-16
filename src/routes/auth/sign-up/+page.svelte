<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Heading } from "flowbite-svelte";

  const signUp = () => {
    // todo: implement sign up
    goto("/auth/sign-in");
  };
</script>

<div class="text-center">
  <Heading class="mb-8">Authentication</Heading>
  <Button on:click={signUp}>Sign Up</Button>
</div>
