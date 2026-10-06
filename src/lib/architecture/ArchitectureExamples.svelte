<script lang="ts">
  import CodeExample from './CodeExample.svelte';
  import CodeSnippet from '../code/CodeSnippet.svelte';
  import { effects, sharedSources, type ArchitectureFramework } from '../content/architecture';

  export let framework: ArchitectureFramework;
</script>

<div class="examples">
  <CodeExample
    id="architecture-effect"
    number="01"
    title="Effect"
    file={framework === 'svelte' ? 'Users.svelte' : 'Users.tsx'}
    description={framework === 'svelte'
      ? 'Track the filters, call the service, and update users and loading state.'
      : 'Run the same flow with useEffect, React state setters, and explicit dependencies.'}
    code={effects[framework]}
  />
  <CodeExample
    id="architecture-service"
    number="02"
    title="Service"
    file="fetchUsers.ts"
    description="Build the request, normalize the response, The same TypeScript service serves both examples."
    code={sharedSources.service}
  />
  <CodeExample
    id="architecture-normalizer"
    number="03"
    title="Normalizer"
    file="normalizeUsers.ts"
    description="Map API fields, apply defaults, resolve access and roles, then sort by name. The same TypeScript transformation serves both examples."
    code={sharedSources.normalizer}
  >
    <details id="architecture-types">
      <summary>Types · Users.types.ts</summary>
      <CodeSnippet code={sharedSources.types} file="Users.types.ts" label="user types" />
    </details>
    <details id="architecture-get-or">
      <summary>Utility · getOr.ts</summary>
      <CodeSnippet code={sharedSources.getOr} file="getOr.ts" label="getOr utility" />
    </details>
  </CodeExample>
</div>

<style lang="postcss">
  .examples {
    @apply grid gap-5 min-w-0;
  }

  details {
    border-top: 1px solid var(--border);
    scroll-margin-top: 16px;
  }

  summary {
    @apply text-xs font-mono text-portfolio-link cursor-pointer;
    padding: 16px 20px;
  }

  summary:focus-visible {
    outline: 2px solid var(--link);
    outline-offset: -3px;
  }
</style>
