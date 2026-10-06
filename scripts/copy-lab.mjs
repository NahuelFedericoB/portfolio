import { cp } from 'node:fs/promises';

await cp(
  new URL('../../frontend-lab/dist/', import.meta.url),
  new URL('../dist/lab/', import.meta.url),
  {
    recursive: true,
  },
);
