<script lang="ts">
  import { frameworks, type ArchitectureFramework } from '../content/architecture';

  export let value: ArchitectureFramework;
  export let onSelect: (framework: ArchitectureFramework) => void;
</script>

<div role="group" aria-label="Example framework">
  {#each frameworks as framework (framework.id)}
    <button
      type="button"
      aria-pressed={value === framework.id}
      onclick={() => onSelect(framework.id)}
    >
      {framework.label}
    </button>
  {/each}
</div>

<style lang="postcss">
  div {
    @apply inline-flex shrink-0 gap-1 rounded-[6px] bg-portfolio-sky-soft p-1;
  }

  button {
    @apply rounded-[4px] text-sm text-portfolio-muted bg-transparent cursor-pointer;
    border: 1px solid transparent;
    padding: 8px 16px;
  }

  button[aria-pressed='true'] {
    @apply text-portfolio-link border-portfolio-border bg-white;
  }

  button:hover {
    @apply text-portfolio-link;
  }
</style>
