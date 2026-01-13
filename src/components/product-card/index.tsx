import React from 'react';
import { Link } from 'react-router-dom';

import { CardContainer, Image } from './product-card.styles';


type ProductProps = {
  name: string;
  prices: number[];
  imgUrl: string;
  title: string;
  strainType: string;
  thcContent: string;
  cbdContent: string;
}

export function ProductCard({ name, prices, title, imgUrl, strainType, thcContent, cbdContent }: ProductProps) {
console.log('Price prop:', prices, 'typeof:', typeof prices);
const displayPrice = Array.isArray(prices) ? prices[0] : prices;

  return (
    <Link to={'/product'}>
      <CardContainer>
        <Image src={imgUrl} alt={name} title={title} />
        <h3>${displayPrice.toFixed(2)}</h3>
        <h4>⚡ {strainType}</h4>
        <p>{name}</p>
        <p><strong>THC:</strong> {thcContent} | <strong>CBD:</strong> {cbdContent}</p>
      </CardContainer>
    </Link>
  )
}


import { useQuery } from '@tanstack/react-query'

