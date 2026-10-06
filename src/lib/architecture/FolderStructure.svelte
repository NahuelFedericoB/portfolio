<script lang="ts">
  import { getArchitectureFolders, type ArchitectureFramework } from '../content/architecture';

  export let framework: ArchitectureFramework;
  $: folders = getArchitectureFolders(framework);
</script>

<nav aria-label="Example project structure">
  <h5>Project structure</h5>
  <p class="introduction">A focused example of how I separate responsibilities.</p>
  <div class="root">
    {framework === 'svelte' ? 'src/lib/' : 'src/'}
  </div>
  <ul>
    {#each folders as folder (folder.name)}
      <li>
        <details open={['components', 'services', 'normalizers'].includes(folder.name)}>
          <summary>
            <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none">
              <path d="M2.5 5.5h6l1.5 2h7.5v9h-15z" stroke="currentColor" stroke-linejoin="round" />
            </svg>
            {folder.name}/
          </summary>
          <a href="#architecture-{folder.target}">{folder.file}</a>
          <p class="purpose">{folder.purpose}</p>
        </details>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply min-w-0 bg-portfolio-sky-soft rounded-[6px];
    border: 1px solid var(--border);
    padding: 22px 18px;
  }

  h5 {
    @apply text-sm font-semibold;
    margin: 0 0 8px;
  }

  .introduction {
    @apply text-xs text-portfolio-muted;
    margin-bottom: 24px;
  }

  .root {
    @apply flex items-center gap-2 font-mono text-xs text-portfolio-link;
    margin-bottom: 12px;
  }

  ul {
    @apply list-none p-0 m-0;
  }

  li + li {
    margin-top: 8px;
  }

  summary {
    @apply cursor-pointer font-mono text-xs rounded;
    padding-block: 8px;
  }

  summary svg {
    @apply inline-block align-middle text-portfolio-link;
    margin-inline: 4px;
  }

  summary::marker {
    color: var(--link);
  }

  summary:focus-visible {
    outline: 2px solid var(--link);
    outline-offset: 3px;
  }

  a {
    @apply block font-mono text-xs text-portfolio-link rounded cursor-pointer;
    border-left: 1px solid var(--border);
    margin-left: 10px;
    padding: 8px 10px;
    overflow-wrap: anywhere;
  }

  a:hover {
    background: var(--white);
  }

  .purpose {
    @apply text-xs text-portfolio-muted;
    margin: 4px 0 14px 20px;
  }
</style>
