import React from 'react';
import { StyledArrow } from './style';
import ArrowImg from '../../images/arrow.svg';

function NextArrow({ counter }) {
  return (
    <StyledArrow onClick={() => counter()}>
      <img src={ArrowImg} alt='avançar' />
    </StyledArrow>
  );
}

export default NextArrow;
