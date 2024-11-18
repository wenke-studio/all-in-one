<script lang="ts">
  import type { UserResource } from "@clerk/types";
  import ClerkLoaded from "./ClerkLoaded.svelte";
</script>

<ClerkLoaded let:clerk>
  {#if clerk && clerk.user}
    <slot user={clerk.user as UserResource} />
  {/if}
</ClerkLoaded>
