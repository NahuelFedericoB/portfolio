<script lang="ts">
  import { aboutParagraphs, profile } from '../content/portfolio';
  import javascriptIcon from '../assets/icons/javascript.svg';
  import typescriptIcon from '../assets/icons/typescript.svg';
  import reactIcon from '../assets/icons/react.svg';
  import svelteIcon from '../assets/icons/svelte.svg';

  const technologyIcons: Record<string, string> = {
    JavaScript: javascriptIcon,
    TypeScript: typescriptIcon,
    React: reactIcon,
    Svelte: svelteIcon,
  };
</script>

<section id="about" class="content-width about-section" aria-labelledby="about-title">
  <div class="about-profile">
    <p class="eyebrow"><span aria-hidden="true"></span>BEHIND THE INTERFACES</p>
    <h2 id="about-title">About me</h2>
    <p class="about-intro">{profile.name}<br /><span>{profile.role}</span></p>
    <ul class="technology-list" aria-label="Technologies">
      {#each profile.technologies as technology (technology)}
        <li>
          <img src={technologyIcons[technology]} alt="" width="20" height="20" />
          <span>{technology}</span>
        </li>
      {/each}
    </ul>
  </div>
  <div class="about-biography">
    {#each aboutParagraphs as paragraph (paragraph)}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>

<style lang="postcss">
  .content-width {
    width: min(1180px, calc(100% - 80px));
    margin-inline: auto;
  }

  .about-section {
    @apply grid gap-[58px];
    grid-template-columns: 0.85fr 1.5fr;
    padding-block: 48px;
    margin-block: 12px;
    border-block: 1px solid var(--border);
    scroll-margin-top: 12px;
  }

  .eyebrow {
    @apply flex gap-[14px] items-center font-mono text-[0.75rem] tracking-[0.13em] font-medium text-[#446882];
    margin-bottom: 18px;
  }

  .eyebrow > span {
    @apply bg-portfolio-sun shrink-0;
    width: 29px;
    height: 3px;
  }

  h2 {
    @apply text-[1.375rem] tracking-[-0.025em];
    margin-bottom: 14px;
  }

  .about-intro {
    @apply text-[1.0625rem] font-[550];
  }

  .about-intro span {
    @apply text-[1rem] font-normal text-portfolio-muted;
  }

  .technology-list {
    @apply flex gap-[8px] flex-wrap list-none p-0;
    margin: 18px 0 0;
  }

  .technology-list li {
    @apply inline-flex items-center gap-[8px] text-[0.8125rem] rounded-[4px] bg-[#f8fcff] text-[#385d78];
    padding: 7px 10px;
    border: 1px solid var(--border);
  }

  .technology-list img {
    @apply block shrink-0;
  }

  .about-biography {
    @apply flex flex-col gap-[18px] text-[1rem] text-portfolio-muted;
    max-width: 72ch;
  }

  @media (max-width: 1050px) {
    .content-width {
      width: calc(100% - 56px);
    }
  }

  @media (max-width: 900px) {
    .about-section {
      @apply gap-[30px];
      grid-template-columns: 1fr 1.5fr;
    }
  }

  @media (max-width: 800px) {
    .about-section {
      @apply grid-cols-1 gap-[28px];
    }
  }

  @media (max-width: 480px) {
    .content-width {
      width: calc(100% - 36px);
    }

    .about-section {
      padding-block: 32px;
    }

    .eyebrow {
      @apply text-[0.6875rem] tracking-[0.09em];
    }
  }
</style>
