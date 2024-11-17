<script lang="ts">
  import { page } from "$app/stores";
  import { title } from "$lib/stores/app";
  import {
    Sidebar,
    SidebarBrand,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    type SiteType,
  } from "flowbite-svelte";

  const site: SiteType = {
    name: $title,
    href: "/",
    img: "/src/lib/assets/icons/logo.svg",
  };

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

<Sidebar activeUrl={$page.url.pathname}>
  <SidebarWrapper class="h-full border-r border-gray-700">
    <SidebarBrand {site} imgClass="ml-2 h-6 me-3 sm:h-7 bg-gray-300 rounded" />
    <SidebarGroup>
      {#each routes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
