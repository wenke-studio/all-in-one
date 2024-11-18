<script lang="ts">
  import { Button } from "flowbite-svelte";
  import clerk from "./store";

  const signIn = () => {
    $clerk?.openSignIn();
  };
</script>

<Button on:click={signIn}>
  <slot>Sign In</slot>
</Button>
