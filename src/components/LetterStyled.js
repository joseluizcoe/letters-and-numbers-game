import styled from 'styled-components';

const LetterStyled = styled.button`
    transition: all 0.5s ease;
    padding: 0;
    margin : 0;
    text-align: center;
    font-size : 10em;
    font-family: 'Vollkorn', serif;
    text-transform: uppercase;
    font-weight: bold;
    background: red;
    color: white;
    width : 17%;
    border :0;
    border-radius : 5%;
    overflow: hidden;
    &:hover,
    &:focus {
        cursor: pointer;
        outline: none;
        font-size : 14em;
    }
    &.red {
        background: red;
        color: white;
    }
    &.green {
        background: green;
        color: white;
    }
    &.blue{
        background: blue;
        color: white;
    }
    &.yellow {
        background: yellow;
        color: black;
    }
    &.purple {
        background : purple;
        color: white;
    }
`;

export default LetterStyled;