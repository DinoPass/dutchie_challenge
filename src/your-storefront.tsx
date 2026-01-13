import { useQuery } from '@tanstack/react-query';
import { PageWrapper } from './components/layout/page-wrapper';
import styled from '@emotion/styled';
import { ProductCard } from './components/product-card';

const API_URL = 'http://localhost:1337/get-products';

type Product = {
  name: string;
};

async function fetchItems(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('failed to fetch');
  return res.json();
}

export function YourStorefront() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchItems,
  });

  if (isLoading) {
    return (
        <div>
        Loading…
        </div>
    );
  }

  if (error) {
    return (
      <div>
        Error loading products
      </div>
    );
  }

  // At this point, products is guaranteed to exist
  return (
    <PageWrapper heading="Your Storefront" icon="menu">
      <ProductGrid>
        {items!.map((product) => (
          <ProductCard
            name={product.name}
          />
        ))}
      </ProductGrid>
    </PageWrapper>
  );
}

const ProductGrid = styled.div`
  display: flex;
`;
