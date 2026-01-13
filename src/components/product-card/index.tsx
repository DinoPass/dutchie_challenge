import React from 'react';
import { Link } from 'react-router-dom';

import { CardContainer, Image } from './product-card.styles';


type ProductProps = {
  name: string
}

export function ProductCard({ name }: ProductProps) {
  return (
    <Link to={'/product'}>
      <CardContainer>
        <Image
          src={`https://images.dutchie.com/519e2ac68c3968e4b20d9910e3b473aa?auto=format&dpr=2&bg=FFFFFF&crop=faces&fit=crop&max-h=291&max-w=409&min-h=291&min-w=409&ixlib=react-7.2.0`}
          alt={'Cheeba Chews'}
          title={'A picture of Cheeba Chews'}
        />
        
        <h3>{name}</h3>
        
      </CardContainer>
    </Link>
  )
}


import { useQuery } from '@tanstack/react-query'

