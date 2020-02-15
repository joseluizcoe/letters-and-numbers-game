import React, {useEffect, useState} from 'react';
import LettersContext from './index';
import { LETTERS } from '../constants';

function LetterProvider(props) {
  const [clickedVowel, setClickedVowel] = useState(null);

  useEffect(() => {
    document.title = `${clickedVowel} clicked`;
  }, [clickedVowel]);

  const contextValues = {
    clickedVowel,
    setClickedVowel,
    letters: LETTERS,
  };

  return (
    <LettersContext.Provider value={contextValues}>
      {props.children}
    </LettersContext.Provider>
  );
}

export default LetterProvider;