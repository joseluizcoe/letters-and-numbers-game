import React, { useState, useEffect } from 'react';
import { Letters, ContainerFlex, Colors , Feedback} from './components';
import { LETTERS, COLORS } from './constants';

function App() {
  const [
    lastClickedVowel, 
    updateLastClickedVowel,
    updateLastClickedColor
  ] = useState('');

  useEffect( 
    () => {
      document.title = `${ lastClickedVowel } clicked`;
    },
    [lastClickedVowel]
  );

  return (
    <>
      <Feedback>
        {
          lastClickedVowel
          ? 'Você clicou na letra: '
          : 'Clique em uma vogal: '
        }
        <span>
          {lastClickedVowel}
        </span>
      </Feedback>
      <ContainerFlex>
        {
          LETTERS.length
          ?
          <Letters
            letters={LETTERS}
            updateLastClickedVowel={updateLastClickedVowel}
          />
          : 
          <Colors
            colors={Object.keys(COLORS)}
            updateLastClickedColor={updateLastClickedColor}
          />
        }
      </ContainerFlex>
    </>
  );
}

export default App;
