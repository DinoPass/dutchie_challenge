import { useQuery } from '@tanstack/react-query';
import { PageWrapper } from './components/layout/page-wrapper';
import styled from '@emotion/styled';
import { ProductCard } from './components/product-card';
import { fetchProducts } from './queries/productQueries'

type Product = {
  id: string;
  name: string;
  prices: number[];
  image: string;
  title: string;
  strainType: string;
  thcContent: string;
  cbdContent: string;
};

export function YourStorefront() {

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div>
        loading…
      </div>
    );
  }

  if (error) {
    return (
      <div>
        product error
      </div>
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
`;
