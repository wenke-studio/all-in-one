<script lang="ts">
  import type { Clerk, UserButtonProps } from "@clerk/types";
  import ClerkLoaded from "../control/ClerkLoaded.svelte";

  const props: UserButtonProps = $props();

  type UserButtonUiConfig = {
    clerk: Clerk;
    props: UserButtonProps;
  };

  const userButtonUi = (
    node: HTMLDivElement,
    { clerk, props }: UserButtonUiConfig
  ) => {
    clerk.mountUserButton(node, props);

    return {
      update: ({ clerk: newClerk }: UserButtonUiConfig) => {
        if (clerk !== newClerk) {
          clerk.unmountUserButton(node);
          clerk = newClerk;
          clerk.mountUserButton(node, props);
        }
      },
      destroy: () => {
        clerk.unmountUserButton(node);
      },
    };
  };
</script>

<ClerkLoaded let:clerk>
  {#if clerk && clerk.user}
    <div use:userButtonUi={{ clerk, props }}></div>
  {/if}
</ClerkLoaded>
