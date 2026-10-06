import svelteEffect from './examples/svelte-effect.ts.txt?raw';
import reactEffect from './examples/react-effect.ts.txt?raw';
import service from './examples/fetchUsers.ts.txt?raw';
import normalizer from './examples/normalizeUsers.ts.txt?raw';
import types from './examples/Users.types.ts.txt?raw';
import getOr from './examples/getOr.ts.txt?raw';

export type ArchitectureFramework = 'svelte' | 'react';

export const frameworks: { id: ArchitectureFramework; label: string }[] = [
  { id: 'svelte', label: 'Svelte' },
  { id: 'react', label: 'React' },
];

export const effects = { svelte: svelteEffect, react: reactEffect };
export const sharedSources = { service, normalizer, types, getOr };

export function getArchitectureFolders(framework: ArchitectureFramework) {
  return [
    {
      name: 'components',
      purpose: 'Own the loading state and pass the result to the UI.',
      file: `Users.${framework === 'svelte' ? 'svelte' : 'tsx'}`,
      target: 'effect',
    },
    {
      name: 'services',
      purpose: 'Handle requests, report errors, and return normalized data.',
      file: 'fetchUsers.ts',
      target: 'service',
    },
    {
      name: 'normalizers',
      purpose: 'Map API fields to the shape the interface consumes.',
      file: 'normalizeUsers.ts',
      target: 'normalizer',
    },
    {
      name: 'types',
      purpose: 'Describe the filters, API response, and normalized users.',
      file: 'Users.types.ts',
      target: 'types',
    },
    {
      name: 'utils',
      purpose: 'Keep the shared null-safe property accessor in one place.',
      file: 'getOr.ts',
      target: 'get-or',
    },
  ];
}
