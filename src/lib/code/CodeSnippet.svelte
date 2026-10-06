<script lang="ts" context="module">
  import hljs from 'highlight.js/lib/core';
  import typescript from 'highlight.js/lib/languages/typescript';

  hljs.registerLanguage('typescript', typescript);
</script>

<script lang="ts">
  export let code: string;
  export let label: string;
  export let file: string;

  $: highlighted = hljs.highlight(code, { language: 'typescript' }).value;
  $: lines = code.split('\n').map((_, index) => index);
</script>

<div class="editor">
  <div class="toolbar">
    <span class="file"><span class="file-icon" aria-hidden="true">&lt;/&gt;</span>{file}</span>
  </div>
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <div class="viewport" role="region" tabindex="0" aria-label={label}>
    <div class="gutter" aria-hidden="true">
      {#each lines as line (line)}<span></span>{/each}
    </div>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <pre><code>{@html highlighted}</code></pre>
  </div>
</div>

<style lang="postcss">
  .editor {
    @apply min-w-0 overflow-hidden;
    background: #1e1e1e;
    color: #d4d4d4;
  }

  .toolbar {
    @apply flex;
    background: #252526;
    border-bottom: 1px solid #303033;
  }

  .file {
    @apply inline-flex items-center gap-2 min-w-0 font-mono text-xs;
    padding: 12px 18px;
    background: #1e1e1e;
    border-top: 2px solid #74acdf;
    border-right: 1px solid #303033;
    overflow-wrap: anywhere;
  }

  .file-icon {
    @apply shrink-0;
    color: #74acdf;
  }

  .viewport {
    @apply flex overflow-auto;
    max-height: 30rem;
    font: 0.8125rem/1.9 var(--mono);
    tab-size: 2;
    scrollbar-color: #555 #1e1e1e;
    color-scheme: dark;
  }

  .viewport:focus-visible {
    outline: 2px solid #74acdf;
    outline-offset: -2px;
  }

  .gutter {
    @apply sticky left-0 shrink-0 select-none text-right;
    min-width: 4.5ch;
    padding: 18px 12px 18px 16px;
    background: #1e1e1e;
    color: #858585;
    border-right: 1px solid #303033;
    counter-reset: line;
  }

  .gutter span {
    @apply block;
    counter-increment: line;
  }

  .gutter span::before {
    content: counter(line);
  }

  pre {
    @apply m-0;
    padding: 18px 22px;
    min-width: max-content;
    font: inherit;
  }

  code {
    font: inherit;
  }

  code :global(.hljs-keyword),
  code :global(.hljs-selector-tag),
  code :global(.hljs-name) {
    color: #f92672;
  }

  code :global(.hljs-string),
  code :global(.hljs-template-tag) {
    color: #e6db74;
  }

  code :global(.hljs-number),
  code :global(.hljs-literal) {
    color: #ae81ff;
  }

  code :global(.hljs-title),
  code :global(.hljs-selector-class) {
    color: #a6e22e;
  }

  code :global(.hljs-built_in),
  code :global(.hljs-type) {
    color: #66d9ef;
  }

  code :global(.hljs-comment) {
    color: #93938b;
  }

  @media (max-width: 600px) {
    .viewport {
      font-size: 0.75rem;
    }
    .gutter {
      padding-left: 12px;
      padding-right: 10px;
    }
    pre {
      padding-inline: 16px;
    }
  }
</style>
