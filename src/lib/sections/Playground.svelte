<section id="playground" class="section content-width" aria-labelledby="playground-title">
  <div class="section-heading">
    <h2 id="playground-title">Engineering playground</h2>
    <p>Space for a closer look at the implementation.</p>
  </div>
  <div class="planned-demos">
    <article id="components" class="demo-reservation">
      <div class="reservation-heading">
        <span class="reservation-number" aria-hidden="true">01</span>
        <div>
          <h3>Component playground</h3>
          <p>Components, their variations and the decisions behind them.</p>
        </div>
      </div>
      <div class="reservation-status">
        <span class="status-label">Planned</span>
        <p>Interactive examples will be added in a later stage.</p>
      </div>
    </article>
    <article id="data-grid" class="demo-reservation">
      <div class="reservation-heading">
        <span class="reservation-number" aria-hidden="true">02</span>
        <div>
          <h3>Advanced data grid</h3>
          <p>A dedicated space to explore a data-intensive interface.</p>
        </div>
      </div>
      <div class="reservation-status">
        <span class="status-label">Planned</span>
        <p>The working demo will be added in a later stage.</p>
      </div>
    </article>
    <article id="architecture" class="demo-reservation">
      <div class="reservation-heading">
        <span class="reservation-number" aria-hidden="true">03</span>
        <div>
          <h3>Architecture, made visible</h3>
          <p>Project structure, code and the reasoning that connects them.</p>
        </div>
      </div>
      <div class="reservation-status">
        <span class="status-label">Planned</span>
        <p>The architecture explorer will be added in a later stage.</p>
      </div>
    </article>
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
  .planned-demos {
    border: 1px solid var(--border);
    @apply rounded-[7px] overflow-hidden;
  }

  .demo-reservation {
    @apply grid gap-[42px] bg-[#fcfeff];
    grid-template-columns: 1.5fr 1fr;
    padding: 30px;
    scroll-margin-top: 108px;
  }

  .demo-reservation + .demo-reservation {
    border-top: 1px solid var(--border);
  }

  .reservation-heading {
    @apply flex items-start gap-[22px];
  }

  .reservation-number {
    @apply text-portfolio-link bg-[#e8f4fd] rounded-[4px];
    font: 0.8125rem/1.8 var(--mono);
    padding: 8px 10px;
  }

  .reservation-heading p {
    @apply text-portfolio-muted text-[0.9375rem];
    margin-top: 6px;
  }

  .reservation-status {
    border-left: 1px solid var(--border);
    padding-left: 30px;
  }

  .reservation-status p {
    @apply text-portfolio-muted text-[0.875rem];
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    .demo-reservation {
      @apply gap-[24px];
      padding: 24px;
    }

    .reservation-heading {
      @apply gap-[16px];
    }

    .reservation-status {
      padding-left: 24px;
    }
  }

  @media (max-width: 600px) {
    .demo-reservation {
      @apply grid-cols-1 gap-[18px];
    }

    .reservation-status {
      border-left: 0;
      border-top: 1px solid var(--border);
      padding-left: 0;
      padding-top: 16px;
    }

    .reservation-status p {
      margin-top: 8px;
    }
  }
</style>
