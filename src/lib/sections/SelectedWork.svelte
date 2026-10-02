<script lang="ts">
  import { demonstrations } from '../content/portfolio';
</script>

<section id="work" class="section content-width" aria-labelledby="work-title">
  <div class="section-heading">
    <h2 id="work-title">Selected work</h2>
    <p>Three perspectives on how I approach frontend engineering.</p>
  </div>
  <div class="work-grid">
    {#each demonstrations as demo (demo.id)}
      <a class="work-card" href={demo.href}>
        <div class="card-top">
          <span class="card-number">{demo.number}</span><span class="status-label">
            Planned case study
          </span>
        </div>
        <h3>{demo.title}</h3>
        <p>{demo.description}</p>
        <div class="card-tags">
          {#each demo.tags as tag (tag)}<span>{tag}</span>{/each}
        </div>
      </a>
    {/each}
  </div>
</section>

<style lang="postcss">
  a[href] {
    @apply cursor-pointer;
  }

  .content-width {
    width: min(1180px, calc(100% - 80px));
    margin-inline: auto;
  }

  .section {
    padding-block: 34px;
    scroll-margin-top: 12px;
  }

  .section-heading {
    @apply flex justify-between items-center gap-[22px];
    margin-bottom: 24px;
  }

  .section-heading h2 {
    @apply flex items-center gap-[15px] text-[1.375rem] tracking-[-0.03em];
    line-height: 1.3;
  }

  .section-heading h2::before {
    @apply block bg-portfolio-sun shrink-0;
    content: '';
    width: 28px;
    height: 2px;
  }

  .section-heading > p {
    @apply text-portfolio-muted text-[0.875rem];
  }

  .work-grid {
    @apply grid grid-cols-3 gap-[20px];
  }

  .work-card {
    border: 1px solid var(--border);
    @apply rounded-[7px] bg-[#f8fcff];
    padding: 24px;
    transition:
      border-color 0.15s,
      background 0.15s;
  }

  .work-card:hover {
    @apply border-portfolio-sky bg-portfolio-sky-soft;
  }

  .card-top {
    @apply flex items-center justify-between gap-[10px];
    margin-bottom: 25px;
  }

  .card-number {
    @apply flex items-center justify-center bg-[#e1f0fc] text-portfolio-link rounded-[6px] font-mono text-[0.875rem];
    width: 36px;
    height: 36px;
  }

  .status-label {
    @apply text-[#6d560f] bg-[#fff8df] rounded-[4px] text-[0.75rem] inline-block;
    border: 1px solid #f0e5bf;
    padding: 5px 8px;
    line-height: 1.35;
  }

  h3 {
    @apply text-[1.125rem] tracking-[-0.025em];
    line-height: 1.4;
  }

  .work-card p {
    @apply text-portfolio-muted text-[0.9375rem];
    margin-top: 9px;
  }

  .card-tags {
    @apply flex flex-wrap gap-[12px] text-[0.75rem] font-mono text-[#4f6b81];
    border-top: 1px solid var(--border);
    margin-top: 24px;
    padding-top: 16px;
  }

  @media (max-width: 1050px) {
    .content-width {
      width: calc(100% - 56px);
    }

    .work-card {
      padding: 20px;
    }

    .card-top {
      @apply flex-wrap;
    }
  }

  @media (max-width: 800px) {
    .work-grid {
      @apply grid-cols-1;
    }

    .card-top {
      margin-bottom: 18px;
    }

    .work-card p {
      max-width: 540px;
    }

    .section-heading {
      @apply items-start flex-col gap-[10px];
    }

    .section-heading > p {
      margin-left: 43px;
    }
  }

  @media (max-width: 480px) {
    .content-width {
      width: calc(100% - 36px);
    }

    .section {
      padding-block: 28px;
    }

    .section-heading h2 {
      @apply text-[1.25rem];
    }
  }
</style>
