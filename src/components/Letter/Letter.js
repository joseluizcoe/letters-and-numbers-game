import React from 'react';
import * as S from './LetterStyled';
import { COLORS } from '../../constants';


export const Letter = (props) => {
  const {letter, update, index} = props;
  const colorName = Object.keys(COLORS)[index];

  const handdleClick = (event) => {
    if(typeof update == 'function') {
      update(letter);
    }
  };

  let letterProps = {
    onClick: handdleClick
  };

  letterProps[colorName] = colorName;

  return (
    <S.LetterStyled
      {...letterProps}
    >
      {letter}
    </S.LetterStyled>
  );
}

export default Letter;
