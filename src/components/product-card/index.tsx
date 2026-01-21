import styled from '@emotion/styled';
import { CardContainer, Image, CardLink } from './product-card.styles';

export type ProductProps = {
  id: string;
  name: string;
  prices: number[];
  imgUrl: string;
  title: string;
  strainType: string;
  thcContent: string;
  cbdContent: string;
};

export function ProductCard({ id, name, prices, title, imgUrl, strainType, thcContent, cbdContent }: ProductProps) {
  const displayPrice = Array.isArray(prices) && prices.length > 0 ? prices[0] : 0;

  return (
    <CardLink to={`/product/${id}`} tabIndex={0} role="button">
      <CardContainer>

        <figure>
          <Image src={imgUrl} alt={name} title={title} />
          <figcaption>{name}</figcaption>
        </figure>
        <h3>${displayPrice.toFixed(2)}</h3>
        <h4>⚡ {strainType}</h4>
        <p>
          <strong>THC:</strong> {thcContent} | <strong>CBD:</strong> {cbdContent}
        </p>

      </CardContainer>
    </CardLink>
  );
}

