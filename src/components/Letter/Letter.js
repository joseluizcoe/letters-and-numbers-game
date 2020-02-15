import React from 'react';
import * as S from './LetterStyled';

export const Letter = (props) => {
  const {letter, update} = props;

  const handdleClick = (event) => {
    if(update) {
      update(letter[0]);
    }

    let voice = window.responsiveVoice;
    return voice ? voice.speak(letter[0], "Brazilian Portuguese Female") : undefined;
  }

  const isValidLetter = () => {
    let letterList = 'abcdefghijklmnopqrstuvwxyz';
    let isString = typeof letter === 'string';
    let thisLetter = isString
      ? letter[0].toLowerCase()
      : '';
    let isThisLetterInLetterList =
      letterList.indexOf(thisLetter) >= 0;

    return isThisLetterInLetterList;
  };

  const thisLetterIsValid = isValidLetter();

  return (
    <>
      {thisLetterIsValid && (
        <S.LetterStyled
          key={letter[0]}
          onClick={handdleClick}
        >
          {letter[0]}
        </S.LetterStyled>
      )}
    </>
  );
}

export default Letter;
