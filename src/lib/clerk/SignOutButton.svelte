<script lang="ts">
  import { Button } from "flowbite-svelte";
  import clerk from "./store";

  const signOut = () => {
    $clerk?.signOut();
  };
</script>

<Button on:click={signOut}>
  <slot>Sign out</slot>
</Button>
