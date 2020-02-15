import React, { useState, useEffect } from 'react';
import { Letters, ContainerFlexStyled} from './components';
import { LETTERS } from './constants';

function App() {
  const [ clickedVowel, setClickedVowel] = useState(null);

  useEffect( () => {
      document.title = `${ clickedVowel } clicked`;
    }, [clickedVowel]
  );

  return (
    <>
      <ContainerFlexStyled>
          <Letters
            letters={LETTERS}
            updateLastClickedVowel={setClickedVowel}
          />
      </ContainerFlexStyled>
    </>
  );
}

export default App;
