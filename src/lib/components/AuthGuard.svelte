<script lang="ts">
  import { goto } from "$app/navigation";
  import { authStore } from "$lib/stores/auth";
  import { onDestroy, onMount } from "svelte";

  let user: any | null;

  const unsubscribe = authStore.subscribe((state) => {
    user = state.user;
  });

  onMount(() => {
    if (!user) {
      goto("/auth");
    }
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<slot />
