<script lang="ts">
  import { authStore } from "$lib/stores/auth";
  import { Card } from "flowbite-svelte";

  let user = {
    name: "anonymous",
  };
  const signOut = () => {
    authStore.set({ user: null });
  };
</script>

<div class="space-y-4 p-4">
  <div class="grid gap-4 grid-cols-3">
    <Card class="max-w-full col-span-3 lg:col-span-2">
      <div class="h-64">A</div>
    </Card>
    <Card class="max-w-full">B</Card>
  </div>

  <div class="grid gap-4 grid-cols-3">
    <Card class="max-w-full">C</Card>
    <Card class="max-w-full h-24">D</Card>
    <Card class="max-w-full">E</Card>
  </div>

  <div class="grid gap-4 grid-cols-2 grid-rows-2">
    <Card class="max-w-full h-[877px] col-span-1 row-span-2">F</Card>
    <div class="space-y-4 row-span-2">
      <Card class="max-w-full h-32">G</Card>
      <Card class="max-w-full h-64">H</Card>
      <Card class="max-w-full h-96">I</Card>
      <Card class="max-w-full h-32">J</Card>
    </div>
  </div>

  <div class="grid">
    <Card class="max-w-full h-64">Full</Card>
  </div>
</div>
