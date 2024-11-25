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
    SidebarDropdownWrapper,
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

  const routes = [{ label: "Home", href: "/dashboard" }];

  const financeRoutes = [
    { label: "Accounting", href: "/dashboard/accounting" },
    { label: "Invoicing", href: "/dashboard/invoicing" },
    { label: "Expenses", href: "/dashboard/expenses" },
    { label: "Purchase", href: "/dashboard/purchase" },
  ];

  const hrRoutes = [
    { label: "Employees", href: "/dashboard/employees" },
    { label: "Recruitment", href: "/dashboard/recruitment" },
    { label: "Time Off", href: "/dashboard/time-off" },
    { label: "Appraisals", href: "/dashboard/appraisals" },
    { label: "Referral", href: "/dashboard/referral" },
  ];

  const marketingRoutes = [
    { label: "Email", href: "/dashboard/email" },
    { label: "Social Media", href: "/dashboard/social-media" },
  ];

  const salesRoutes = [
    { label: "CRM", href: "/dashboard/crm" },
    { label: "Sales", href: "/dashboard/sales" },
    { label: "Subscriptions", href: "/dashboard/subscriptions" },
  ];

  const servicesRoutes = [
    { label: "Timesheet", href: "/dashboard/timesheet" },
    { label: "Project", href: "/dashboard/project" },
    { label: "Helpdesk", href: "/dashboard/helpdesk" },
    { label: "Appointments", href: "/dashboard/appointments" },
    { label: "Knowledge", href: "/dashboard/knowledge" },
  ];

  let selectedMenu = "";
  const open = (e: MouseEvent) => {
    const name = (e.target as HTMLElement).innerText;
    selectedMenu = name;
  };
</script>

<Sidebar activeUrl={$page.url.pathname}>
  <SidebarWrapper class="h-full border-r border-gray-700 flex flex-col">
    <SidebarBrand
      {site}
      imgClass="ml-2 h-6 me-3 sm:h-7 bg-gray-300 rounded"
      spanClass="self-center text-xl font-semibold whitespace-nowrap dark:text-white capitalize"
    />
    <SidebarDropdownWrapper
      label="Finance"
      on:click={open}
      isOpen={selectedMenu === "Finance"}
    >
      {#each financeRoutes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="HR"
      on:click={open}
      isOpen={selectedMenu === "HR"}
    >
      {#each hrRoutes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="Marketing"
      on:click={open}
      isOpen={selectedMenu === "Marketing"}
    >
      {#each marketingRoutes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="Sales"
      on:click={open}
      isOpen={selectedMenu === "Sales"}
    >
      {#each salesRoutes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="Services"
      on:click={open}
      isOpen={selectedMenu === "Services"}
    >
      {#each servicesRoutes as { label, href }}
        <SidebarItem {label} {href} />
      {/each}
    </SidebarDropdownWrapper>

    <SidebarGroup class="flex-grow"></SidebarGroup>

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
