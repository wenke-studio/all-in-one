<script lang="ts">
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";
  const routes = [
    {
      label: "Home",
      href: "/dashboard",
    },
    {
      label: "Protected",
      href: "/dashboard/protected",
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
    },
  ];
</script>

<Sidebar>
  <SidebarWrapper class="h-full border-r border-gray-700">
    <SidebarGroup>
      {#each routes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
