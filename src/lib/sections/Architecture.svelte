<script lang="ts">
  import DataFetchingExplorer from '../architecture/DataFetchingExplorer.svelte';
</script>

<article id="architecture" aria-labelledby="architecture-title">
  <header>
    <span class="section-number" aria-hidden="true">03</span>
    <div>
      <h3 id="architecture-title">Architecture, made visible</h3>
      <p>Project structure, code and the reasoning that connects them.</p>
    </div>
  </header>
  <DataFetchingExplorer />
</article>

<style lang="postcss">
  article {
    @apply rounded-[7px] bg-white;
    border: 1px solid var(--border);
    margin-top: 24px;
    scroll-margin-top: 12px;
  }

  header {
    @apply flex items-start gap-4;
    padding: 24px;
    border-bottom: 1px solid var(--border);
  }

  .section-number {
    @apply shrink-0 text-portfolio-link bg-portfolio-sky-soft rounded-[4px];
    font: 0.8125rem/1.8 var(--mono);
    padding: 8px 10px;
  }

  h3 {
    @apply text-[1.125rem] tracking-[-0.025em];
    line-height: 1.4;
  }

  p {
    @apply text-portfolio-muted text-sm;
    margin-top: 6px;
  }

  @media (max-width: 600px) {
    header {
      padding: 20px 16px;
    }
  }
</style>
