import React, { useContext } from 'react';
import Letter from '../Letter/Letter';
import * as S from './LettersStyled';
import {COLORS} from '../../constants';
import LettersContext from '../../context';

const Letters = () => {
  const { letters, setClickedVowel } = useContext(
    LettersContext
  );

  console.log('letters', letters);

    return (
      <S.LettersStyled>
        {letters.map((letter, index) => {
          let color = Object.keys(COLORS)[index];
          return Letter(
            letter,
            String(color),
            setClickedVowel
          );
        })}
      </S.LettersStyled>
    );
}

export default Letters;
