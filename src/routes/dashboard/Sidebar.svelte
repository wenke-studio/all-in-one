<script lang="ts">
  import { page } from "$app/stores";
  import { SignedIn } from "$lib/clerk/components";
  import { title } from "$lib/stores/app";
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
    <SidebarBrand
      {site}
      imgClass="ml-2 h-6 me-3 sm:h-7 bg-gray-300 rounded"
      spanClass="self-center text-xl font-semibold whitespace-nowrap dark:text-white capitalize"
    />
    <SidebarGroup class="flex-grow">
      {#each routes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarGroup>
    <SidebarCta label="BETA">
      <div class="flex center middle flex-col">
        <SignedIn let:user>
          <Avatar
            src={user.hasImage ? user.imageUrl : ""}
            alt={user.username ?? "user"}
          />
          <P>{user.username}</P>
          <P class="opacity-60">
            {user.emailAddresses[0].emailAddress}
          </P>
          <Button class="mt-6" disabled>Upgrade to Pro</Button>
        </SignedIn>
      </div>
    </SidebarCta>
  </SidebarWrapper>
</Sidebar>
