import { describe, it, expect, } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ProductPage } from './product';
const queryClient = new QueryClient();
describe('ProductPage', () => {
  it('renders the product name', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ProductPage product={{ name: 'Test Product' }} />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });

  it('renders the product name, description, image, and back link', async () => {
    const testProduct = {
      name: 'Test Product',
      description: 'This is a test description',
      image: 'https://via.placeholder.com/150'
    };

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ProductPage product={testProduct} />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('This is a test description')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
    });

    // BackLink is static, no waitFor needed
    expect(screen.getByText('Back to Storefront')).toBeInTheDocument();
    expect(screen.getByText('Back to Storefront').closest('a')).toHaveAttribute('href', '/your-storefront');
  });
});

