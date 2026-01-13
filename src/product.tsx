import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const API_URL = 'http://localhost:1337/get-products';

async function fetchProduct(id: string) {

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.find((p: any) => p.id === id);
  
}

export function ProductPage() {

  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id
  });

console.log({ product, isLoading, isError });
  console.log('ProductPage id:', id);
  return (
    <Container>
      <Header>(Placeholder) Cheeba Chews | Sativa Chocolate Taffy</Header>
      <Divider />
      <Description>
        This is a placeholder product detail page. It will contain the description, allotment details, and other product
        information.
      </Description>
      <ImageContainer>
        <img
          src={
            'https://images.dutchie.com/519e2ac68c3968e4b20d9910e3b473aa?auto=format&dpr=2&bg=FFFFFF&crop=faces&fit=crop&max-h=291&max-w=409&min-h=291&min-w=409&ixlib=react-7.2.0'
          }
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
