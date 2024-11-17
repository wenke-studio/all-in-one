<script lang="ts">
  import { page } from "$app/stores";
  import { title } from "$lib/stores/app";
  import { authStore } from "$lib/stores/auth";
  import {
    Avatar,
    Button,
    P,
    Sidebar,
    SidebarBrand,
    SidebarCta,
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
  <SidebarWrapper class="h-full border-r border-gray-700 flex flex-col">
    <SidebarBrand {site} imgClass="ml-2 h-6 me-3 sm:h-7 bg-gray-300 rounded" />
    <SidebarGroup class="flex-grow">
      {#each routes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarGroup>
    <SidebarCta
      spanClass="hidden"
      class="bg-green-400 flex flex-col middle button"
    >
      <Avatar src={$authStore.user?.image} />
      <P>{$authStore.user?.username}</P>
      <P class="opacity-60">{$authStore.user?.email}</P>
      <Button class="mt-6" disabled>Upgrade to Pro</Button>
    </SidebarCta>
  </SidebarWrapper>
</Sidebar>
