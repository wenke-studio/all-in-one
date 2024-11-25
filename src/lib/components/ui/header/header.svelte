<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";
  export type HeaderProps = HTMLAttributes<HTMLElement> & {
    class?: string;
  };
  export const defaultStyle = "flex center between gap-4 p-4 min-h-16 border-b";
</script>

<script lang="ts">
  import { cn } from "$lib/utils";

  const { children, class: className }: HeaderProps = $props();
</script>

<header class={cn(defaultStyle, className)}>
  {@render children?.()}
</header>
