import { render, screen, fireEvent } from '@testing-library/svelte';

import FrontendLab from './FrontendLab.svelte';

describe('FrontendLab integration', () => {
  it('resizes to messages from its own lab, including when the content becomes shorter', async () => {
    render(FrontendLab);
    const frame = screen.getByTitle(
      'Frontend Lab — interactive React components',
    ) as HTMLIFrameElement;

    await fireEvent(
      window,
      new MessageEvent('message', {
        origin: window.location.origin,
        source: frame.contentWindow,
        data: { type: 'frontend-lab:resize', height: 1400 },
      }),
    );
    expect(frame.style.height).toBe('1400px');

    await fireEvent(
      window,
      new MessageEvent('message', {
        origin: window.location.origin,
        source: frame.contentWindow,
        data: { type: 'frontend-lab:resize', height: 850.5 },
      }),
    );
    expect(frame.style.height).toBe('851px');
  });

  it('ignores resize messages from a different origin', async () => {
    render(FrontendLab);
    const frame = screen.getByTitle(
      'Frontend Lab — interactive React components',
    ) as HTMLIFrameElement;

    await fireEvent(
      window,
      new MessageEvent('message', {
        origin: 'https://unrelated.example',
        source: frame.contentWindow,
        data: { type: 'frontend-lab:resize', height: 1 },
      }),
    );

    expect(frame.style.height).toBe('1000px');
  });

  it('ignores messages from other windows on the same origin', async () => {
    render(FrontendLab);
    const frame = screen.getByTitle('Frontend Lab — interactive React components');

    await fireEvent(
      window,
      new MessageEvent('message', {
        origin: window.location.origin,
        source: window,
        data: { type: 'frontend-lab:resize', height: 1 },
      }),
    );

    expect((frame as HTMLIFrameElement).style.height).toBe('1000px');
  });

  it('ignores invalid heights from the lab', async () => {
    render(FrontendLab);
    const frame = screen.getByTitle(
      'Frontend Lab — interactive React components',
    ) as HTMLIFrameElement;

    await fireEvent(
      window,
      new MessageEvent('message', {
        origin: window.location.origin,
        source: frame.contentWindow,
        data: { type: 'frontend-lab:resize', height: -10 },
      }),
    );

    expect(frame.style.height).toBe('1000px');
  });
});
