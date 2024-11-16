<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Heading, P } from "flowbite-svelte";
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
  <Heading>{$page.status}: {$page.error?.message}</Heading>
  <P>Redirecting in {countdown} seconds...</P>
</div>
