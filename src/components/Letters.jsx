import React from 'react';
import Letter from './Letter';
import {COLORS} from '../constants';

function Letters(props){
    let { letters, updateLastClickedVowel } = props;
    return(<>
      {
        letters.map(
          (letter, index) => {
            let color = Object.keys(COLORS)[index];
            return Letter(letter, String(color), updateLastClickedVowel)
          }
            
        )
      }
    </>)
}

export default Letters;
