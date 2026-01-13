import React from 'react';
import { Link } from 'react-router-dom';

import { CardContainer, Image } from './product-card.styles';


type ProductProps = {
  name: string
  prices: number
  imgUrl: string
  title: string
}

export function ProductCard({ name, prices, title, imgUrl }: ProductProps) {
  return (
    <Link to={'/product'}>
      <CardContainer>
        <Image src={imgUrl} alt={name} title={title} />
        <h3>${prices}</h3>
        <p>{name}</p>
      </CardContainer>
    </Link>
  )
}


import { useQuery } from '@tanstack/react-query'

