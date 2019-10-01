import React, { useState, useEffect } from 'react';
import Letter from './components/Letter';
import ContainerFlex from './components/ContainerFlex';
import styled from 'styled-components';

const Feedback = styled.h1`
  font-size: 4em;
  line-height: 1em;

  font-family: 'Vollkorn', serif;
  text-align: center;
  span {
    position: fixed;
    top: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    height : 45vh;
    width: 100%;
    margin : 5% 0;
    
  }
`;


function App() {
  // Declara uma nova variável de state, que chamaremos de "count"
  
  const [vowels] = useState(['A', 'E', 'I', 'O', 'U']);
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [lastClickedVowel, setLastClickedVowel] = useState('');

  useEffect( () => {
    document.title = `${ lastClickedVowel } clicked`
  });

  window.responsiveVoice.speak("Bem tôu, cadê você? vamos jogar?", "Brazilian Portuguese Female");

  return (
    <>
      <Feedback>{
        lastClickedVowel
          ? 'Você clicou na letra'
          : 'Clique em uma vogal'
        }
        <span>{lastClickedVowel}</span>
      </Feedback>
      <ContainerFlex>
        {
          vowels.map(
            (letter, index) =>
              Letter(letter, colors[index], setLastClickedVowel)
          )
        }
      </ContainerFlex>
    </>
  );
}

export default App;
