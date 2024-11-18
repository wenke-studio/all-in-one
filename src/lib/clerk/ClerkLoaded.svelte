<script lang="ts">
  import clerk from "./store";
</script>

{#if $clerk}
  <slot clerk={$clerk} />
{/if}
