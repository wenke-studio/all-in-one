<script lang="ts">
  import { UserButton } from "$lib/clerk/components";
  import SearchModal from "$lib/components/SearchModal.svelte";
  import { Header } from "$lib/components/ui/header";
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
  <!-- todo: Select component has a bug -->
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
