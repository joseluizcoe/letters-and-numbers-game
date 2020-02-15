import React, { useState, useEffect } from 'react';
import { Letters } from './components';
import { LETTERS } from './constants';

function App() {
  const [ clickedVowel, setClickedVowel] = useState(null);

  useEffect( () => {
      document.title = `${ clickedVowel } clicked`;
    }, [clickedVowel]
  );

  return (<Letters
    letters={LETTERS}
    updateLastClickedVowel={setClickedVowel}
  />);
}

export default App;
