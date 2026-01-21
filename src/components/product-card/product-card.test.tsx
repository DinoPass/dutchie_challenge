import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from './index';

describe('ProductCard', () => {
  it('renders the product name, image, and price', () => {
    render(
      <BrowserRouter>
        <ProductCard
          id="1"
          name="Test Product"
          prices={[10]}
          imgUrl="/test.jpg"
          title="Test Title"
          strainType="Sativa"
          thcContent="20%"
          cbdContent="1%"
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });
});

