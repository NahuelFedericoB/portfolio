<script lang="ts">
  import { profile } from '../content/portfolio';
</script>

<footer class="site-footer content-width">
  <span>{profile.name} <span aria-hidden="true">/</span> {profile.role}</span>
  <div class="footer-links">
    <a href="#top">Back to top</a>
  </div>
</footer>

<style lang="postcss">
  a[href] {
    @apply cursor-pointer;
  }

  .content-width {
    width: min(1180px, calc(100% - 80px));
    margin-inline: auto;
  }

  .site-footer a:hover {
    @apply text-portfolio-link underline;
    text-underline-offset: 5px;
  }

  .site-footer {
    @apply flex justify-between gap-[20px] text-[0.8125rem] text-portfolio-muted;
    padding-block: 28px;
  }

  .site-footer span span {
    padding-inline: 10px;
    @apply text-[#aabcca];
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
    .site-footer {
      @apply flex-col gap-[16px] text-[0.8125rem];
    }
  }

  .footer-links {
    @apply flex gap-[24px];
  }

  @media (max-width: 600px) {
    .site-footer {
      @apply flex-col;
    }
  }
</style>
