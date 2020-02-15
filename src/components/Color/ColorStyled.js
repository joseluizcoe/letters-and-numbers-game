import styled from 'styled-components';

const ColorStyled = styled.button`
    padding: 20px;
    margin : 20px;
    width: 80%;
    text-align: center;
    font-size : 8em;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    font-weight: bold;
    background: red;
    color: white;
    border :0;
    border-radius : 50%;
    color: white;
    transform: rotate(90deg);
    flex: 2; 
    &.red {
        background: red;
    }
    &.green {
        background: green;
    }
    &.blue{
        background: blue;
    }
    &.yellow {
        background: yellow;
        color: black;
    }
    &.purple {
        background : purple;
    }
    &.black {
        background : black;
    }
    &.pink {
        background: pink;
    }
`;

export default ColorStyled;
