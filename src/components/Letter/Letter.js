import React from 'react';
import LetterStyled from './LetterStyled';

export function Letter(letter, className, update) {
    function handdleClick() {
      if(update) {
        update(letter[0]);
      }

      let voice = window.responsiveVoice;
      return voice ? voice.speak(letter[0], "Brazilian Portuguese Female") : undefined;
    }
  
    function isValid() {
      let letterList = 'abcdefghijklmnopqrstuvwxyz';
      let isString = (typeof letter === 'string');
      let thisLetter = (isString) ? letter[0].toLowerCase() : '';
      let isThisLetterInLetterList = (letterList.indexOf(thisLetter) >= 0 );

      return isThisLetterInLetterList;
    }

    return (
      <LetterStyled
        className={className}
        key={letter[0]}
        onClick={
          (event) => handdleClick()
        }
      >
        { 
          ( isValid() )
          ? letter[0]
          : ''
        }
      </LetterStyled>
    )
}

export default Letter;
