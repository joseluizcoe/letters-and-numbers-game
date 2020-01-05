import React from 'react';
import Letter from './Letter';
import {COLORS} from '../constants';

function Letters(props){
    let { letters, updateLastClickedVowel } = props;
    return(<>
        {
            letters.map(
              (letter, index) =>
                Letter(letter, COLORS[index], updateLastClickedVowel)
            )
          }
    </>)
}

export default Letters;
