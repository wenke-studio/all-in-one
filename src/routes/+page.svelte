<script>
  import { Alert } from "flowbite-svelte";
  import { CogOutline } from "flowbite-svelte-icons";
</script>

<div class="p-8">
  <Alert>
    <CogOutline slot="icon" size="xl" class="text-red-500" />
    <span class="font-medium">error alert!</span>
    This is an error alert for testing.
  </Alert>
</div>
