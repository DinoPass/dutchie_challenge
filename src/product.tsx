import styled from '@emotion/styled';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from './queries/productQueries';
import { YourStorefront } from './your-storefront';

type ProductPageProp = {
  name?: string;
  description?: string;
  image?: string;
};


export function ProductPage({ product: testProduct }: { product?: ProductPageProp }) {

  const { id } = useParams<{ id: string }>()
    
 const { data: fetchedProduct, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id
  });

let displayProduct = testProduct || fetchedProduct;
const navigate = useNavigate()

if (isLoading) return <div>Loading…</div>;
if (isError || !displayProduct) return <div>Error loading product.</div>;

  return (
    <Container>
      <BackLink to={'/your-storefront'}>
        Back to Storefront
      </BackLink>
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
const ProductName = styled.h2`
  color: #666;
  font-weight: 600;
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
  margin: 0 auto 0 auto;
  font-size: 0.9rem;
  line-height: 1.25rem;
  width: 85%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;


const BackLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 4px 4px;
  color: #163f66;
  text-decoration: none;
  border-radius: 4px;
  
  
  &::before {
    content: "←";
    margin-right: 8px;
  }
  &:hover {
    color: #999;
  }

`
