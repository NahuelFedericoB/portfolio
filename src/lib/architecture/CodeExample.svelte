<script lang="ts">
  import CodeSnippet from '../code/CodeSnippet.svelte';

  export let id: string;
  export let number: string;
  export let title: string;
  export let file: string;
  export let description: string;
  export let code: string;
</script>

<section {id} aria-labelledby="{id}-title">
  <header>
    <div class="title">
      <span class="number" aria-hidden="true">{number}</span>
      <h5 id="{id}-title">{title}</h5>
    </div>
    <p>{description}</p>
  </header>
  <CodeSnippet {code} {file} label="{title} code" />
  <slot />
</section>

<style lang="postcss">
  section {
    @apply min-w-0 rounded-[6px] overflow-hidden;
    border: 1px solid var(--border);
    scroll-margin-top: 16px;
  }

  header {
    padding: 16px 20px;
  }

  .title {
    @apply flex items-center gap-3;
  }

  .number {
    @apply text-portfolio-link font-mono text-xs;
  }

  h5 {
    @apply text-sm font-semibold;
    margin: 0;
  }

  p {
    @apply text-portfolio-muted text-sm;
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    header {
      padding-inline: 16px;
    }
  }
</style>
