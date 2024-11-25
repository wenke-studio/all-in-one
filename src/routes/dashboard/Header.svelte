<script lang="ts">
  import { UserButton } from "$lib/clerk/components";
  import SearchModal from "$lib/components/SearchModal.svelte";
  import { Header } from "$lib/components/ui/header";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectGroupHeading,
    SelectItem,
    SelectTrigger,
  } from "$lib/components/ui/select";
  import { onMount } from "svelte";

  let namespace = "";
  const namespaces = [
    { value: "namespace1", name: "Namespace 1" },
    { value: "namespace2", name: "Namespace 2" },
    { value: "namespace3", name: "Namespace 3" },
  ];

  onMount(() => {
    if (namespace === "") {
      namespace = namespaces[0].value;
    }
  });
</script>

<Header>
  <Select type="single" bind:value={namespace}>
    <SelectTrigger>
      {namespace}
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectGroupHeading>Namespaces</SelectGroupHeading>
        {#each namespaces as ns}
          <SelectItem value={ns.value}>{ns.name}</SelectItem>
        {/each}
      </SelectGroup>
    </SelectContent>
  </Select>
  <ul class="p-4 flex middle gap-4">
    <li>
      <SearchModal />
    </li>
    <li>
      <!-- todo: add User dropdown -->
      <UserButton />
    </li>
  </ul>
</Header>
