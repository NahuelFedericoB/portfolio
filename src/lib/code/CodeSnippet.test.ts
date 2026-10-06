import { render, screen } from '@testing-library/svelte';
import CodeSnippet from './CodeSnippet.svelte';

describe('Code snippet', () => {
  it('preserves source text and displays markup as code, without creating HTML elements', () => {
    const code = 'const example = "<img src=x onerror=alert(1) />";\n// Second line';
    render(CodeSnippet, { code, file: 'example.ts', label: 'Example code' });

    const source = screen.getByLabelText('Example code').querySelector('code');
    expect(source?.textContent).toBe(code);
    expect(source?.querySelector('img')).toBeNull();
  });
});
