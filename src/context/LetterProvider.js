import React, {useEffect, useState} from 'react';
import LettersContext from './index';
import { LETTERS } from '../constants';

const LetterProvider = (props) => {
  const [clickedVowel, setClickedVowel] = useState(null);

  useEffect(() => {
    document.title = `${clickedVowel} clicked`;
    speak(clickedVowel);
  }, [clickedVowel]);

  const isValidLetter = (letter) => {
    let letterList = 'abcdefghijklmnopqrstuvwxyz';
    let isString = typeof letter === 'string';
    let thisLetter = isString ? letter.toLowerCase() : '';
    let isThisLetterInLetterList =
      letterList.indexOf(thisLetter) >= 0;

    return isThisLetterInLetterList;
  };

  const speak = (somethingToSpeak) => {
    let voice = window.responsiveVoice;
    return voice && 
      voice.speak(
        somethingToSpeak,
        'Brazilian Portuguese Female'
      );
  };
  
  const contextValues = {
    clickedVowel,
    setClickedVowel,
    isValidLetter,
    speak,
    letters: LETTERS
  };

  return (
    <LettersContext.Provider value={contextValues}>
      {props.children}
    </LettersContext.Provider>
  );
}

export default LetterProvider;