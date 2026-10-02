<script lang="ts">
  import { profile } from '../content/portfolio';
</script>

<section id="contact" class="contact-section" aria-labelledby="contact-title">
  <div class="content-width contact-inner">
    <div>
      <p class="eyebrow"><span aria-hidden="true"></span>LET’S CONNECT</p>
      <h2 id="contact-title">Let’s build something<br />that lasts.</h2>
    </div>
    <address class="contact-details">
      <div class="contact-method">
        <span class="contact-label">Email</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <div class="contact-method">
        <span class="contact-label">LinkedIn</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Nahuel Bordon's LinkedIn profile (opens in a new tab)"
          >View LinkedIn profile</a
        >
      </div>
    </address>
  </div>
</section>

<style lang="postcss">
  .content-width {
    width: min(1180px, calc(100% - 80px));
    margin-inline: auto;
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

  .contact-section {
    margin-top: 48px;
    @apply bg-portfolio-sky-soft;
    border-block: 1px solid var(--border);
    padding-block: 46px;
  }

  .contact-section h2 {
    @apply text-[1.8rem] tracking-[-0.035em];
    margin-bottom: 10px;
  }

  .contact-section p {
    @apply text-portfolio-muted text-[0.9375rem];
  }

  @media (max-width: 1050px) {
    .content-width {
      width: calc(100% - 56px);
    }
  }

  @media (max-width: 480px) {
    .content-width {
      width: calc(100% - 36px);
    }

    .eyebrow {
      @apply text-[0.6875rem] tracking-[0.09em];
    }
  }

  .contact-inner {
    @apply flex justify-between items-center gap-[32px];
  }

  .contact-inner .eyebrow {
    margin-bottom: 16px;
  }

  .contact-inner h2 {
    @apply text-[2rem];
    line-height: 1.2;
  }

  .contact-details {
    @apply flex flex-col gap-[20px] not-italic;
    border-left: 1px solid #c9dce9;
    padding-left: 30px;
    min-width: 0;
    max-width: 100%;
  }

  .contact-method {
    @apply flex flex-col gap-[6px];
  }

  .contact-label {
    @apply text-[0.875rem] text-portfolio-muted;
  }

  .contact-details a {
    @apply cursor-pointer text-[1rem] font-medium text-portfolio-link underline;
    text-underline-offset: 4px;
    overflow-wrap: anywhere;
    line-height: 1.5;
  }

  .contact-details a:hover {
    @apply text-portfolio-ink;
  }

  @media (max-width: 600px) {
    .contact-inner {
      @apply items-start flex-col;
    }

    .contact-details {
      border-left: 0;
      border-top: 1px solid #c9dce9;
      padding-top: 24px;
      padding-left: 0;
      width: 100%;
    }

    .contact-inner h2 {
      @apply text-[1.8rem];
    }

    .eyebrow {
      @apply text-[0.75rem];
    }
  }
</style>
