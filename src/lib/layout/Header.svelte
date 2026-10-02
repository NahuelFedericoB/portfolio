<script lang="ts">
  import { navigation, profile } from '../content/portfolio';

  let menuOpen = $state(false);
  let menuButton: HTMLButtonElement;

  function dismiss(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      menuOpen = false;
      menuButton?.focus();
    }
  }
</script>

<svelte:window onkeydown={dismiss} />
<header class="site-header">
  <div class="content-width header-inner">
    <a
      class="brand"
      href="#top"
      aria-label={`${profile.name}, home`}
      onclick={() => (menuOpen = false)}
    >
      <img src="/favicon.svg" width="28" height="28" alt="" />
      <strong>NB</strong>
      <span class="brand-divider" aria-hidden="true">/</span>
      <span>{profile.name}</span>
    </a>
    <button
      bind:this={menuButton}
      type="button"
      class="menu-button"
      aria-expanded={menuOpen}
      aria-controls="primary-navigation"
      onclick={() => (menuOpen = !menuOpen)}
    >
      {menuOpen ? 'Close' : 'Menu'}
      <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
    </button>
    <nav id="primary-navigation" class:open={menuOpen} aria-label="Main navigation">
      {#each navigation as item (item.href)}
        <a href={item.href} onclick={() => (menuOpen = false)}>{item.label}</a>
      {/each}
      <a href="https://github.com/NahuelFedericoB" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </div>
</header>

<style lang="postcss">
  a[href] {
    @apply cursor-pointer;
  }

  .content-width {
    width: min(1180px, calc(100% - 80px));
    margin-inline: auto;
  }

  .site-header {
    @apply bg-[#fffffffa] sticky;
    border-bottom: 1px solid var(--border);
    top: 0;
    z-index: 10;
  }

  .header-inner {
    min-height: 80px;
    @apply flex justify-between items-center gap-[24px];
  }

  .brand {
    @apply flex items-center gap-[13px] text-[1rem] whitespace-nowrap;
  }

  .brand strong {
    @apply text-[1.2rem] font-bold tracking-[-0.05em];
  }

  .brand-divider {
    @apply text-[#90a2b2];
    padding-inline: 1px;
  }

  .site-header nav {
    @apply flex items-center gap-[32px];
  }

  .site-header nav a {
    @apply text-[0.875rem] font-[550];
    padding-block: 15px;
  }

  .site-header nav a:hover {
    @apply text-portfolio-link underline;
    text-underline-offset: 5px;
  }

  .menu-button {
    @apply hidden cursor-pointer;
  }

  @media (max-width: 1050px) {
    .content-width {
      width: calc(100% - 56px);
    }
    .site-header nav {
      @apply gap-[22px];
    }
  }

  @media (max-width: 800px) {
    .header-inner {
      min-height: 72px;
      @apply flex-wrap;
      column-gap: 12px;
      row-gap: 0;
    }

    .menu-button {
      @apply flex gap-[10px] items-center text-portfolio-ink bg-portfolio-white rounded-[5px] text-[0.875rem];
      border: 1px solid var(--border);
      padding: 10px 12px;
      min-height: 44px;
    }

    .menu-button span {
      @apply text-[1.05rem];
    }

    .site-header nav {
      @apply hidden flex-col items-stretch;
      width: 100%;
      gap: 0;
      padding-block: 8px 16px;
    }

    .site-header nav.open {
      @apply flex;
    }

    .site-header nav a {
      padding: 14px;
      @apply rounded-[4px];
    }

    .site-header nav a:hover {
      @apply bg-portfolio-sky-soft;
    }
  }

  @media (max-width: 480px) {
    .content-width {
      width: calc(100% - 36px);
    }

    .brand {
      @apply gap-[8px] text-[0.875rem];
    }

    .brand img {
      width: 23px;
      height: 23px;
    }

    .brand strong {
      @apply text-[1rem];
    }
  }

  @media (max-width: 360px) {
    .brand-divider {
      @apply hidden;
    }
  }
</style>
