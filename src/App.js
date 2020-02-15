import React, { useState, useEffect } from 'react';
import { Letters, ContainerFlex} from './components';
import { LETTERS } from './constants';

function App() {
  const [ clickedVowel, setClickedVowel] = useState(null);

  useEffect( () => {
      document.title = `${ clickedVowel } clicked`;
    }, [clickedVowel]
  );

  return (
    <>
      <ContainerFlex>
          <Letters
            letters={LETTERS}
            updateLastClickedVowel={setClickedVowel}
          />
      </ContainerFlex>
    </>
  );
}

export default App;
