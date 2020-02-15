import React from 'react';
import Letter from '../Letter/Letter';
import * as S from './LettersStyled';
import {COLORS} from '../../constants';

function Letters(props){
    let { letters, updateLastClickedVowel } = props;
    return (
      <S.LettersStyled>
      {
        letters.map(
          (letter, index) => {
            let color = Object.keys(COLORS)[index];
            return Letter(letter, String(color), updateLastClickedVowel)
          }
            
        )
      }
      </S.LettersStyled>
    )
}

export default Letters;
