<script lang="ts">
  import { profile } from '../content/portfolio';
</script>

<section class="hero content-width" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span aria-hidden="true"></span>FRONTEND ENGINEERING</p>
    <h1 id="hero-title">Welcome!<br />Thank you for your interest in my work!.</h1>
    <p class="hero-description">
      Architecture, accessible components and data-intensive applications.
    </p>
  </div>
  <div class="code-window" aria-label="Portfolio profile, TypeScript code example">
    <div class="code-toolbar">
      <span class="code-tab">portfolio.ts</span><span class="language-label">TypeScript</span><span
        class="window-dots"
        aria-hidden="true"
        ><i></i><i></i><i></i>
      </span>
    </div>
    <div class="code-content">
      <div class="code-line">
        <span class="line-no" aria-hidden="true"></span><code
          ><span class="syntax-keyword">export const</span> profile:
          <span class="syntax-type">SoftwareEngineer</span> = &#123;</code
        >
      </div>
      <div class="code-line">
        <span class="line-no" aria-hidden="true"></span><code class="code-indent"
          >name: <span class="syntax-string">'{profile.name}'</span>,</code
        >
      </div>
      <div class="code-line">
        <span class="line-no" aria-hidden="true"></span><code class="code-indent"
          >role: <span class="syntax-string">'{profile.role}'</span>,</code
        >
      </div>
      <div class="code-line">
        <span class="line-no" aria-hidden="true"></span><code class="code-indent"
          >technologies: [</code
        >
      </div>
      {#each profile.technologies as technology (technology)}
        <div class="code-line">
          <span class="line-no" aria-hidden="true"></span><code class="code-indent-deep"
            ><span class="syntax-string">'{technology}'</span>,</code
          >
        </div>
      {/each}
      <div class="code-line">
        <span class="line-no" aria-hidden="true"></span><code class="code-indent">],</code>
      </div>
      <div class="code-line">
        <span class="line-no" aria-hidden="true"></span><code>&#125;;</code>
      </div>
    </div>
    <div class="code-footer">
      <span>Clarity in the interface.</span><span>Care in the implementation.</span>
    </div>
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

  .hero {
    @apply grid gap-[66px] items-center;
    grid-template-columns: 1.12fr 1fr;
    padding-block: 83px 76px;
  }

  .eyebrow {
    @apply flex gap-[14px] items-center font-mono text-[0.75rem] tracking-[0.13em] font-medium text-[#446882];
    margin-bottom: 23px;
  }

  .eyebrow > span {
    width: 29px;
    height: 3px;
    @apply bg-portfolio-sun shrink-0;
  }

  h1 {
    @apply font-bold tracking-[-0.048em];
    font-size: clamp(2.5rem, 3.65vw, 3.4rem);
    line-height: 1.1;
    margin-bottom: 23px;
  }

  .hero-description {
    @apply text-[1.125rem] text-[#3e5b73];
    max-width: 540px;
    line-height: 1.65;
  }

  .hero-actions {
    @apply flex gap-[14px] flex-wrap;
    margin-top: 30px;
  }

  .hero-signature {
    @apply flex items-center gap-[12px] flex-wrap text-[0.8125rem] text-portfolio-muted;
    margin-top: 26px;
  }

  .hero-signature a {
    @apply underline;
    text-underline-offset: 4px;
  }

  .signature-rule {
    width: 18px;
    height: 1px;
    @apply bg-[#bbccd9];
  }

  .code-window {
    border: 1px solid var(--border);
    @apply rounded-[8px] bg-[#f8fcff] overflow-hidden;
  }

  .code-toolbar {
    @apply flex items-center bg-portfolio-sky-soft font-mono text-[0.75rem];
    border-bottom: 1px solid var(--border);
  }

  .code-tab {
    padding: 16px 22px;
    border-bottom: 2px solid var(--sky);
    @apply text-portfolio-link;
  }

  .language-label {
    padding-inline: 20px;
    @apply text-portfolio-muted;
  }

  .window-dots {
    @apply flex gap-[5px];
    margin-left: auto;
    padding-right: 20px;
  }

  .window-dots i {
    width: 5px;
    height: 5px;
    @apply bg-[#b8cad9] rounded-full;
  }

  .code-content {
    counter-reset: code-line;
    padding-block: 22px;
    @apply overflow-x-auto;
  }

  .code-line {
    counter-increment: code-line;
    @apply flex text-[0.75rem];
    min-height: 25px;
    line-height: 1.8;
    padding-right: 20px;
  }

  .code-line code {
    @apply font-mono whitespace-pre;
  }

  .code-indent {
    padding-left: 2ch;
  }

  .code-indent-deep {
    padding-left: 4ch;
  }

  .line-no {
    @apply text-right text-[#8298aa] font-mono select-none;
    flex: 0 0 45px;
    padding-right: 17px;
  }

  .line-no::before {
    content: counter(code-line, decimal-leading-zero);
  }

  .syntax-type {
    @apply text-portfolio-link;
  }

  .syntax-keyword {
    @apply text-[#146baf];
  }

  .syntax-string {
    @apply text-[#946000];
  }

  .code-footer {
    @apply flex flex-wrap justify-between gap-[6px] text-[0.75rem] text-portfolio-muted;
    border-top: 1px solid var(--border);
    padding: 13px 20px;
  }

  @media (min-width: 1450px) {
    .hero {
      padding-block: 100px 88px;
    }
  }

  @media (max-width: 1050px) {
    .hero {
      @apply gap-[32px];
    }

    .content-width {
      width: calc(100% - 56px);
    }

    .hero-actions {
      @apply gap-[10px];
    }

    .button {
      padding-inline: 16px;
    }

    .code-footer {
      @apply text-[0.75rem];
    }
  }

  @media (max-width: 800px) {
    .hero {
      @apply grid-cols-1 gap-[40px];
      padding-block: 55px 34px;
    }

    .hero-copy {
      max-width: 600px;
    }

    h1 {
      font-size: clamp(2.5rem, 6.6vw, 3.3rem);
    }

    .code-window {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .content-width {
      width: calc(100% - 36px);
    }

    .hero {
      padding-top: 40px;
    }

    h1 {
      @apply text-[2.5rem];
    }

    .hero-description {
      @apply text-[1rem];
    }

    .hero-actions {
      @apply flex-col items-stretch;
    }

    .hero-signature {
      @apply text-[0.8125rem];
    }

    .eyebrow {
      @apply text-[0.6875rem] tracking-[0.09em];
    }

    .language-label {
      @apply hidden;
    }

    .code-line {
      @apply text-[0.6875rem];
    }

    .line-no {
      flex-basis: 34px;
      padding-right: 10px;
    }
  }

  @media (max-width: 600px) {
    .eyebrow,
    .code-line {
      @apply text-[0.75rem];
    }
  }
</style>
