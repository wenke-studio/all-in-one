<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";
  export type FooterProps = HTMLAttributes<HTMLElement> & {
    class?: string;
  };

  export const footerVariants = tv({
    base: "p-4 flex middle center gap-4",
  });
</script>

<script lang="ts">
  import { cn } from "$lib/utils";
  let { children, class: className }: FooterProps = $props();
</script>

<footer class={cn(footerVariants({ className }))}>
  {@render children?.()}
</footer>
