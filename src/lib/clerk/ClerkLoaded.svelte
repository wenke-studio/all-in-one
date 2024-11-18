<script lang="ts">
  import clerk from "./store";
</script>

<div>
  {#if $clerk}
    <slot clerk={$clerk} />
  {/if}
</div>
