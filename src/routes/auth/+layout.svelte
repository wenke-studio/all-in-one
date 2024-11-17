<script lang="ts">
  import { title } from "$lib/stores/app";
  import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";

  let { children } = $props();
</script>

<div class="min-h-dvh w-full grid">
  <Navbar color="form" class="h-16">
    <NavBrand href="/">
      <span>{$title}</span>
    </NavBrand>
    <NavUl>
      <NavLi href="/help">Need help?</NavLi>
    </NavUl>
  </Navbar>

  <main>
    {@render children()}
  </main>
</div>
