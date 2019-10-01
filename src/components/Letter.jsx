import React from 'react';
import LetterStyled from './LetterStyled';

function Letter(letter, className, update) {
    function handdleClick(){
      update(letter);
      window.responsiveVoice.speak(letter, "Brazilian Portuguese Female");
    }
  
    return (
      <LetterStyled
        className={className}
        key={letter}
        onClick={
          (event) => handdleClick()
        }
      >
        {letter}
      </LetterStyled>
    )
}

export default Letter;
