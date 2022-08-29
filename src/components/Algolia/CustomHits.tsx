import React from 'react';
import styled from 'styled-components';
import { Highlight, useHits } from 'react-instantsearch-hooks-web';
import type { Hit, BaseHit } from 'instantsearch.js';

const S = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `,
  List: styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  Container: styled.li`
    padding: 15px;
    margin: 15px 0;
    display: flex;
    list-style: none;
    width: 100%;
    transition-property: all;
    transition-duration: 0.3s;
    border: 1px solid transparent;
    border-radius: 7px;
    &:hover {
      transform: scale(1.005);
      border: solid 1px gainsboro;
    }
  `,
  ImageContainer: styled.div``,
  Info: styled.section`
    padding: 20px;
    .title {
      font-size: 16px;
      margin-bottom: 5px;
      @media screen and (min-width: 700px) {
        font-size: 20px;
      }
    }
    .price {
      font-size: 14px;
      @media screen and (min-width: 700px) {
        font-size: initial;
      }
    }
    .category {
      font-size: 12px;
      margin-top: 15px;
      .categories {
        padding: 3px 5px;
        border: solid 1px gray;
        width: fit-content;
        border-radius: 5px;
      }
    }
  `,
};

interface Product {
  objectID: string;
  name: string;
  description: string;
  brand: string;
  categories: string[];
  price: number;
  image: string;
  popularity: number;
}

function CustomHit({ hit }: { hit: Hit<BaseHit> }) {
  const item = hit as unknown as Product;

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={item.image} alt={item.name} />
      </S.ImageContainer>
      <S.Info>
        <h2 className='title'>
          <Highlight attribute='name' hit={hit} />
        </h2>
        <p className='price'>${item.price}</p>
        <p className='category'>
          Category: <span className='categories'>{item.categories[0]}</span>{' '}
        </p>
      </S.Info>
    </S.Container>
  );
}

// eslint-disable-next-line import/prefer-default-export
export function CustomHits() {
  const { hits } = useHits();

  return (
    <S.Root>
      <S.List>
        {hits.map((item) => (
          <CustomHit hit={item} />
        ))}
      </S.List>
    </S.Root>
  );
}
