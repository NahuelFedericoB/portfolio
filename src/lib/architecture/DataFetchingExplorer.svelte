<script lang="ts">
  import FolderStructure from './FolderStructure.svelte';
  import FrameworkSelector from './FrameworkSelector.svelte';
  import ArchitectureExamples from './ArchitectureExamples.svelte';
  import type { ArchitectureFramework } from '../content/architecture';

  let framework: ArchitectureFramework = 'svelte';
</script>

<div class="topic-heading">
  <div>
    <h4>Data Fetching Management</h4>
    <p>
      Three responsibilities in data fetching flow.
      <br />You can see how I approach in Svelte and React.
      <br />The examples are simplified to focus on the data fetching flow and the folder structure
    </p>
  </div>
  <FrameworkSelector value={framework} onSelect={(value) => (framework = value)} />
</div>
<div class="explorer">
  <aside>
    <FolderStructure {framework} />
    <p class="boundary-note">
      The effect belongs to the component that fetchs / needs the data. The service and normalizer
      stay independent of the framework.
    </p>
  </aside>
  <ArchitectureExamples {framework} />
</div>

<style lang="postcss">
  .topic-heading {
    @apply flex items-center justify-between gap-6;
    padding: 28px 24px 24px;
  }

  h4 {
    @apply text-base font-semibold;
    margin: 0;
  }

  .topic-heading p {
    @apply text-portfolio-muted text-sm;
    margin-top: 6px;
  }

  .explorer {
    @apply grid gap-6;
    grid-template-columns: 260px minmax(0, 1fr);
    padding: 0 24px 24px;
  }

  aside {
    @apply min-w-0;
  }

  .boundary-note {
    @apply text-xs text-portfolio-muted;
    padding: 16px 4px;
  }

  @media (max-width: 1000px) {
    .explorer {
      grid-template-columns: 220px minmax(0, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 800px) {
    .topic-heading {
      @apply flex-col items-start gap-4;
    }
    .explorer {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (max-width: 600px) {
    .topic-heading {
      padding: 20px 16px;
    }
    .explorer {
      padding: 0 12px 20px;
    }
  }
</style>
