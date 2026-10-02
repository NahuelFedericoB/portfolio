<script lang="ts">
  const principles = [
    {
      title: 'Maintainability',
      description:
        'Small, composable components with clear responsibilities and predictable behavior.',
    },
    {
      title: 'Accessibility',
      description:
        'Interfaces that account for keyboard navigation, semantics and readable content.',
    },
    {
      title: 'Testing',
      description: 'Checks centered on user behavior, important flows and component contracts.',
    },
    {
      title: 'Performance',
      description: 'Thoughtful rendering, data access and state management as an interface grows.',
    },
  ];
</script>

<section id="principles" class="section content-width" aria-labelledby="principles-title">
  <div class="section-heading">
    <h2 id="principles-title">My Core Principles</h2>
  </div>
  <div class="principles-grid">
    {#each principles as principle, i (principle.title)}
      <article>
        <span class="principle-number">0{i + 1}</span>
        <h3>{principle.title}</h3>
        <p>{principle.description}</p>
      </article>
    {/each}
  </div>
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

  .principles-grid {
    @apply grid grid-cols-4 gap-[30px];
    padding-block: 12px 8px;
  }

  .principle-number {
    @apply block font-mono text-[0.75rem] text-portfolio-link;
    margin-bottom: 16px;
  }

  .principles-grid h3 {
    @apply text-[1rem];
  }

  .principles-grid p {
    @apply text-[0.9375rem] text-portfolio-muted;
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    .principles-grid {
      @apply grid-cols-2;
      gap: 28px 40px;
    }
  }

  @media (max-width: 600px) {
    .principles-grid {
      gap: 28px 24px;
    }
  }

  @media (max-width: 360px) {
    .principles-grid {
      @apply grid-cols-1;
    }
  }
</style>
