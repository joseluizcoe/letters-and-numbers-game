import React from 'react';
import styled from 'styled-components';

const LetterStyled = styled.button`
    padding: 0;
    margin : 0;
    text-align: center;
    font-size : 10em;
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-weight: bold;
    background: red;
    color: white;
    width : 17%;
    border :0;
    border-radius : 5%;
    &.red {
        background: red;
        color: white;
    }
    &.green {
        background: green;
        color: white;
    }
    &.blue{
        background: blue;
        color: white;
    }
    &.yellow {
        background: yellow;
        color: black;
    }
    &.purple {
        background : purple;
        color: white;
    }
`;

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
