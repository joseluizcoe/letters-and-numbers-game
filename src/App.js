import React, { useState, useEffect } from 'react';
import { Letters, ContainerFlex} from './components';
import { LETTERS } from './constants';

function App() {
  const [
    lastClickedVowel, 
    updateLastClickedVowel,
  ] = useState('');

  useEffect( 
    () => {
      document.title = `${ lastClickedVowel } clicked`;
    },
    [lastClickedVowel]
  );

  return (
    <>
      <ContainerFlex>
          <Letters
            letters={LETTERS}
            updateLastClickedVowel={updateLastClickedVowel}
          />
      </ContainerFlex>
    </>
  );
}

export default App;
