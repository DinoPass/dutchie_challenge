import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const API_URL = 'http://localhost:1337/get-products';

async function fetchProduct(id: string) {

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.find((p: any) => String(p.id) === String(id))
  
}

type ProductPageProp = {
  name?: string;
  description?: string;
  image?: string;
};


export function ProductPage({ product: testProduct }: { product?: ProductPageProp }) {

  const { id } = useParams<{ id: string }>();
    
 const { data: fetchedProduct, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id
  });
let displayProduct = testProduct || fetchedProduct;

if (isLoading) return <div>Loading…</div>;
if (isError || !displayProduct) return <div>Error loading product.</div>;


  return (
    <Container>
      <Header>{displayProduct.name}</Header>
      <Divider />
      <Description>
        {displayProduct.description}
      </Description>
      <ImageContainer>
        <img
          src={displayProduct.image}
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Divider = styled.div`
  width: 50%;
  height: 1px;
  background-color: #c8ced4;
  margin: 20px auto;
`;

const Description = styled.p`
  text-align: center;
  padding: 1px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
