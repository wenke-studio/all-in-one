<script lang="ts">
  import { goto } from "$app/navigation";
  import { ClerkLoaded } from "$lib/clerk/components";
</script>

<ClerkLoaded let:clerk>
  {#if clerk && clerk.user}
    <slot />
  {:else}
    {goto("/")}
  {/if}
</ClerkLoaded>
