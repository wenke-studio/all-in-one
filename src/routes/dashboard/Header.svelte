<script lang="ts">
  import UserButton from "$lib/clerk/UserButton.svelte";
  import SearchModal from "$lib/components/SearchModal.svelte";
  import { Navbar, NavHamburger, NavLi, NavUl, Select } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";

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

<Navbar>
  <Select
    bind:value={namespace}
    items={namespaces}
    placeholder={namespace}
    class="max-w-fit"
  />
  <NavHamburger />
  <NavUl
    ulClass={twMerge(
      // the default class created by flowbite-svelte
      "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium",
      "middle"
    )}
  >
    <NavLi>
      <SearchModal />
    </NavLi>
    <NavLi>
      <!-- todo: add User dropdown -->
      <UserButton />
    </NavLi>
  </NavUl>
</Navbar>
