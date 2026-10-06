import { render, screen, fireEvent, within } from '@testing-library/svelte';
import Architecture from './Architecture.svelte';

describe('Architecture explorer', () => {
  it('switches the effect and component path while keeping the service and normalizer unchanged', async () => {
    render(Architecture);
    const effect = screen.getByRole('region', { name: 'Effect' });
    const service = screen.getByLabelText('Service code').textContent;
    const normalizer = screen.getByLabelText('Normalizer code').textContent;

    expect(screen.getByRole('button', { name: 'Svelte' })).toHaveAttribute('aria-pressed', 'true');
    expect(within(effect).getByLabelText('Effect code')).toHaveTextContent('$effect(');
    expect(screen.getByRole('link', { name: 'Users.svelte' })).toHaveAttribute(
      'href',
      '#architecture-effect',
    );

    await fireEvent.click(screen.getByRole('button', { name: 'React' }));

    expect(screen.getByRole('button', { name: 'React' })).toHaveAttribute('aria-pressed', 'true');
    expect(within(effect).getByLabelText('Effect code')).toHaveTextContent('useEffect(');
    expect(within(effect).getByLabelText('Effect code')).toHaveTextContent('setIsLoading(true)');
    expect(screen.getByRole('link', { name: 'Users.tsx' })).toHaveAttribute(
      'href',
      '#architecture-effect',
    );
    expect(screen.getByLabelText('Service code').textContent).toBe(service);
    expect(screen.getByLabelText('Normalizer code').textContent).toBe(normalizer);

    await fireEvent.click(screen.getByRole('button', { name: 'Svelte' }));
    expect(within(effect).getByLabelText('Effect code')).toHaveTextContent('$effect(');
    expect(screen.queryByRole('link', { name: 'Users.tsx' })).not.toBeInTheDocument();
  });

  it('uses native expandable folders and links each source to its code section', async () => {
    render(Architecture);
    const tree = screen.getByRole('navigation', { name: 'Example project structure' });
    const serviceFolder = within(tree).getByText('services/', { exact: true }).closest('details');

    expect(serviceFolder).toHaveAttribute('open');
    await fireEvent.click(within(tree).getByText('services/', { exact: true }));
    expect(serviceFolder).not.toHaveAttribute('open');
    await fireEvent.click(within(tree).getByText('services/', { exact: true }));
    expect(serviceFolder).toHaveAttribute('open');
    expect(within(tree).getByRole('link', { name: 'fetchUsers.ts' })).toHaveAttribute(
      'href',
      '#architecture-service',
    );
    expect(within(tree).getByRole('link', { name: 'normalizeUsers.ts' })).toHaveAttribute(
      'href',
      '#architecture-normalizer',
    );
  });
});
