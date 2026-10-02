import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
  plugins: [svelte(), svelteTesting({ resolveBrowser: true })],
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.js'],
    coverage: {
      include: ['src/lib/**/*.{svelte,ts}'],
      exclude: [
        'src/__mocks__/**',
        'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        'src/**/*.d.ts',
        'src/**/*.d.js',
        'src/**/*.client.js',
        'src/**/*.server.js',
        'src/**/*.props.ts',
      ],
      reporter: ['text', 'html', 'text-summary'],
      thresholds: {
        autoUpdate: true,
      },
    },
  },
});
