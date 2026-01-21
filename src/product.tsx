import styled from '@emotion/styled';
import {Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PageWrapper } from '../src/components/layout/page-wrapper';
import { fetchProduct, Product } from './queries/productQueries';

type ProductPageProp = {
  name?: string;
  description?: string;
  image?: string;
};

export function ProductPage({ product: testProduct }: { product?: ProductPageProp }) {

  const { id } = useParams<{ id: string }>();

  const { data: fetchedProduct, isLoading, isError } = useQuery({
  queryKey: ['product', id],
  queryFn: () => fetchProduct(id as string),
  enabled: Boolean(id),
});

  const displayProduct = testProduct ?? fetchedProduct;

  if (isLoading) return <div>Loading…</div>;
  if (isError || !displayProduct) return <div>Error loading product.</div>;

  return (
    <PageWrapper heading="Your Storefront" icon="menu">
    <Container>
      <Header>
        <ProductName>{displayProduct.name}</ProductName>
      </Header>
      <Divider />
      <Description>
        {displayProduct.description}
      </Description>
      <ImageContainer>
        <img
          src={displayProduct.image}
          alt={displayProduct.name}
          loading="lazy"
        />
      </ImageContainer>
    </Container>
    </PageWrapper>
  );
}

const Container = styled.div`
  padding: 1px;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;
const ProductName = styled.div`
  color: #666;
  font-weight: 600;
`;
const Divider = styled.div`
  width: 70px;
  height: 2px;
  background-color: #e5e7eb;
  margin: 16px auto;
  border-radius: 1px;
`;

const Description = styled.p`
  text-align: center;
  margin: 12px auto 20px;
  font-size: 0.95rem;
  line-height: 1.5;
  max-width: 520px;
  color: #555;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  img {
    max-width: 320px;
    width: 100%;
    border-radius: 8px;
  }
`;


const BackLinkWrapper = styled.div`
  padding-left: 10px;
  margin-bottom: 20px;
`;
