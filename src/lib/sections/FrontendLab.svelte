<script lang="ts">
  let frame: HTMLIFrameElement;
  let frameHeight = 1000;

  function resizeFrame(event: MessageEvent) {
    if (event.origin !== window.location.origin || event.source !== frame?.contentWindow) {
      return;
    }

    const message = event.data;
    if (
      message?.type === 'frontend-lab:resize' &&
      typeof message.height === 'number' &&
      Number.isFinite(message.height) &&
      message.height > 0
    ) {
      frameHeight = Math.ceil(message.height);
    }
  }
</script>

<svelte:window onmessage={resizeFrame} />

<article id="frontend-lab" aria-labelledby="frontend-lab-title">
  <div class="lab-heading">
    <div class="lab-introduction">
      <span class="lab-number" aria-hidden="true">01</span>
      <div>
        <h3 id="frontend-lab-title">Frontend Lab</h3>
        <p>Try the components, adjust their props, and explore the source code and tests.</p>
      </div>
    </div>
    <a href="/lab/">Open full playground <span aria-hidden="true">→</span></a>
  </div>
  <iframe
    bind:this={frame}
    src="/lab/?embed=true"
    title="Frontend Lab — interactive React components"
    loading="lazy"
    style:height="{frameHeight}px"
  ></iframe>
</article>

<style lang="postcss">
  article {
    @apply rounded-[7px] bg-white;
    border: 1px solid var(--border);
    margin-bottom: 24px;
    scroll-margin-top: 12px;
  }

  .lab-heading {
    @apply flex items-center justify-between gap-6;
    border-bottom: 1px solid var(--border);
    padding: 24px;
  }

  .lab-introduction {
    @apply flex items-start gap-4;
  }

  .lab-number {
    @apply shrink-0 text-portfolio-link bg-portfolio-sky-soft rounded-[4px];
    font: 0.8125rem/1.8 var(--mono);
    padding: 8px 10px;
  }

  h3 {
    @apply text-[1.125rem] tracking-[-0.025em];
    line-height: 1.4;
  }

  p {
    @apply text-portfolio-muted text-[0.875rem];
    margin-top: 6px;
  }

  a {
    @apply inline-flex shrink-0 items-center gap-3 rounded-[4px] bg-portfolio-sky-soft text-portfolio-link text-[0.875rem] font-medium cursor-pointer;
    border: 1px solid var(--border);
    padding: 10px 14px;
  }

  a:hover {
    @apply border-portfolio-sky;
  }

  iframe {
    @apply block w-full border-0 rounded-b-[7px];
  }

  @media (max-width: 800px) {
    .lab-heading {
      @apply flex-col items-start gap-4;
      padding: 20px;
    }
  }
</style>
