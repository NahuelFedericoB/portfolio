<script lang="ts">
  import FrontendLab from './FrontendLab.svelte';
  import Architecture from './Architecture.svelte';
</script>

<section id="playground" class="section content-width" aria-labelledby="playground-title">
  <div class="section-heading">
    <h2 id="playground-title">Engineering playground</h2>
    <p>Space for a closer look at the implementation.</p>
  </div>
  <FrontendLab />
  <Architecture />
</section>

<style lang="postcss">
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

  @media (max-width: 1050px) {
    .content-width {
      width: calc(100% - 56px);
    }
  }

  @media (max-width: 800px) {
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
