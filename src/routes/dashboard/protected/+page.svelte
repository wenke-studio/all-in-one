<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Heading } from "flowbite-svelte";
</script>

<div>
  <Heading>Protected</Heading>
  <Button on:click={() => goto("/dashboard")}>Back</Button>
</div>
