import { useQuery } from '@tanstack/react-query';
import { PageWrapper } from './components/layout/page-wrapper';
import styled from '@emotion/styled';
import { ProductCard } from './components/product-card';
import { fetchProducts } from './queries/productQueries';

export function YourStorefront() {

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5
  });

  if (isLoading) {
    return (
      <PageWrapper heading="Your Storefront" icon="menu">
        <ProductGrid>
          loading…
        </ProductGrid>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper heading="Your Storefront" icon="menu">
        <ProductGrid>
          Error loading product
        </ProductGrid>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper heading="Your Storefront" icon="menu">
      <ProductGrid>
        {products!.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
            prices={product.prices}
            name={product.name}
            imgUrl={product.image}
            title={product.title}
            strainType={product.strainType}
            thcContent={product.thcContent}
            cbdContent={product.cbdContent}
          />
        ))}
      </ProductGrid>
    </PageWrapper>
  );
}

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
