<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let countdown = 5;

  onMount(() => {
    const interval = setInterval(() => {
      countdown -= 1;
      if (countdown <= 0) {
        clearInterval(interval);
        goto("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div class="">
  <h1>{$page.status}: {$page.error?.message}</h1>
  <p>Redirecting in {countdown} seconds...</p>
</div>
