<script lang="ts">
  import CodeSnippet from '../code/CodeSnippet.svelte';
  import { profile } from '../content/portfolio';

  const code = `export const profile: SoftwareEngineer = {
  name: '${profile.name}',
  role: '${profile.role}',
  technologies: [
${profile.technologies.map((technology) => `    '${technology}',`).join('\n')}
  ],
};`;
</script>

<div class="profile-code">
  <CodeSnippet {code} file="portfolio.ts" label="Portfolio profile, TypeScript code example" />
  <footer>
    <span>Clarity in the interface.</span><span>Care in the implementation.</span>
  </footer>
</div>

<style lang="postcss">
  .profile-code {
    @apply min-w-0 overflow-hidden rounded-[8px];
    border: 1px solid #303033;
  }

  footer {
    @apply flex flex-wrap justify-between gap-[6px] text-xs;
    padding: 13px 20px;
    background: #252526;
    color: #c5c5c5;
    border-top: 1px solid #303033;
  }
</style>
