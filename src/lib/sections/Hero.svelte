<script lang="ts">
  import ProfileCode from './ProfileCode.svelte';
</script>

<section class="hero content-width" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span aria-hidden="true"></span>FRONTEND ENGINEERING</p>
    <h1 id="hero-title">A glimpse into how I think, structure, and design solutions.</h1>
    <p class="hero-description">
      Architecture, accessible components and data-intensive applications.
    </p>
  </div>
  <ProfileCode />
</section>

<style lang="postcss">
  .content-width {
    width: min(1180px, calc(100% - 80px));
    margin-inline: auto;
  }

  .hero {
    @apply grid gap-[66px] items-center;
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 1fr);
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
    .eyebrow {
      @apply text-[0.75rem] tracking-[0.09em];
    }
  }
</style>
