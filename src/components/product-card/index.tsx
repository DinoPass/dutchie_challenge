import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, Image } from './product-card.styles';

type ProductProps = {
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
    <Link to={`/product/${id}`} title={`Product detail for ${name}`}>
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
    </Link>
  );
}

