<script lang="ts">
  import { goto } from "$app/navigation";
  import { authStore } from "$lib/stores/auth";
  import { onDestroy } from "svelte";

  let user: any | null;

  const unsubscribe = authStore.subscribe((state) => {
    user = state.user;

    if (!user) {
      goto("/auth/sign-in");
    }
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<slot />
