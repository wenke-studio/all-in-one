<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Shortcut } from "$lib/components/ui/command";
  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "$lib/components/ui/dialog";
  import { Search } from "lucide-svelte";

  let searchModal = false;

  const results = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
    { name: "Library", href: "/library" },
    { name: "Newsletter", href: "/news" },
    { name: "Support Center", href: "/support" },
    { name: "Resources", href: "/resource" },
    { name: "Playground", href: "/play" },
    { name: "Terms", href: "/terms" },
    { name: "Pro Version", href: "/pro" },
    { name: "License", href: "/license" },
  ];

  function handleKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault(); // Prevent default browser behavior
      searchModal = true;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<Dialog>
  <DialogTrigger>
    <Button onclick={() => (searchModal = true)}>
      <Search />
      <Shortcut>ctrl+k</Shortcut>
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Search</DialogTitle>
    </DialogHeader>
    <div class="flex flex-col center divide-y divide-dashed divide-gray-600">
      {#each results as result}
        <div class="hover:border-dashed hover:border-sky-400 hover:border p-4">
          <h4>{result.name}</h4>
          <p>{result.href}</p>
        </div>
      {/each}
    </div>
  </DialogContent>
</Dialog>
