<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";
  export type FooterCopyrightProps = HTMLAttributes<HTMLSpanElement> & {
    year: string;
    class?: string;
    by?: string;
    message?: string;
  };
</script>

<script lang="ts">
  let {
    class: className,
    year = "0000",
    by = "",
    message = "All Rights Reserved.",
  }: FooterCopyrightProps = $props();
</script>

<span class={className}>
  &copy; {year}
  {#if by}
    {by}
  {/if}
  {message}
</span>
