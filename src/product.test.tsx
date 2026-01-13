import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ProductPage } from './product';
const queryClient = new QueryClient();
describe('ProductPage', () => {
  it('renders the product name', () => {
    render(
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProductPage product={{ name: 'Test Product' }} />
      </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
