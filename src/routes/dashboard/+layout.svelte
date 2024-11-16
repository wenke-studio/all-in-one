<script lang="ts">
  import AuthGuard from "$lib/components/AuthGuard.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";

  let { children } = $props();
</script>

<AuthGuard>
  <div class="grid grid-cols-[auto_1fr] min-h-dvh">
    <Sidebar />
    <div>
      <Header />
      {@render children()}
    </div>
  </div>
</AuthGuard>
