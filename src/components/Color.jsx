import React from 'react';
import ColorStyled from './ColorStyled';
import { COLORS } from './../constants';

export function Color(color, className, update) {
    function handdleClick() {
      if(update) {
        update(color);
      }

      let voice = window.responsiveVoice;
      let voiceName = "Brazilian Portuguese Female";

      return voice ?
        voice
          .speak(
            `${COLORS[color]}`,
            voiceName
          )
        : undefined;
    }
  
    function isValid() {
      let isThisColorInLetterList = (COLORS[color]);

      return isThisColorInLetterList;
    }

    return (
      <ColorStyled
        className={className}
        key={COLORS[color]}
        onClick={
          (event) => handdleClick()
        }
      >
        { 
          ( isValid() )
          ? ':)'
          : ''
        }
      </ColorStyled>
    )
}

export default Color;
