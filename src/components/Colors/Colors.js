import React from 'react';
import Color from '../Color';
import ColorsStyled from './ColorsStyled';

function Colors(props){
    let { colors, updateLastClickedColor } = props;
    return(
      <ColorsStyled>
        {
          colors.map(
            (color, index) =>
              Color(color, colors[index], updateLastClickedColor)
          )
        }
      </ColorsStyled>
    );
}

export default Colors;
