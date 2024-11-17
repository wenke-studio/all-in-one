<script lang="ts">
  import { Button, Heading, Kbd, Modal, P } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";

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

<Button on:click={() => (searchModal = true)} color="light">
  <SearchOutline />
  <Kbd class="px-2 py-1.5">Ctrl + K</Kbd>
</Button>

<Modal
  title="Search"
  bind:open={searchModal}
  autoclose
  outsideclose
  bodyClass="p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain max-h-[calc(100vh-40vh)]"
>
  <div class="flex flex-col center divide-y divide-dashed divide-gray-600">
    {#each results as result}
      <div class="hover:border-dashed hover:border-sky-400 hover:border p-4">
        <Heading tag="h6">{result.name}</Heading>
        <P>{result.href}</P>
      </div>
    {/each}
  </div>
</Modal>
