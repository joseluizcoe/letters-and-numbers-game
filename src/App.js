import React, { useState, useEffect } from 'react';
import { Letters, ContainerFlex , Feedback} from './components';
import { LETTERS } from './constants';

function App() {
  const [letters] = useState(LETTERS);
  const [lastClickedVowel, updateLastClickedVowel] = useState('');

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
          ? 'Você clicou na letra'
          : 'Clique em uma vogal'
        }
        <span>
          {lastClickedVowel}
        </span>
      </Feedback>
      <ContainerFlex>
        <Letters
          letters={letters}
          updateLastClickedVowel={updateLastClickedVowel}
        />
      </ContainerFlex>
    </>
  );
}

export default App;
