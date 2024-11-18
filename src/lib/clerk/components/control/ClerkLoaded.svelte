<script lang="ts">
  import { clerk } from "$lib/clerk/store";
</script>

{#if $clerk}
  <slot clerk={$clerk} />
{/if}
