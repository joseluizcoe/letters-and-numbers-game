import React, { useContext } from 'react';
import Letter from '../Letter';
import * as S from './LettersStyled';
import LettersContext from '../../context';

const Letters = () => {
  const { letters, setClickedVowel } = useContext(
    LettersContext
  );

  return (
    <S.LettersStyled>
      { 
        letters.map(
          (letter, index) => 
            <Letter
              key={index}
              index={index}
              letter={letter[0]}
              update={setClickedVowel}
            />
        )
      }
    </S.LettersStyled>
  );
}

export default Letters;
