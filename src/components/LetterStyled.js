import styled from 'styled-components';

const LetterStyled = styled.button`
  transition: all 0.5s ease;
  padding: 0;
  margin: 1px 0;
  text-align: center;
  font-size: 5em;
  font-family: 'Vollkorn', serif;
  text-transform: uppercase;
  background: #f0f0f0;
  color: #666;
  width: 100%;
  height: 18vh;
  border: 0;
  overflow: hidden;
  &:focus {
    cursor: pointer;
    outline: none;
  }

  &.red {
    background: #400;
    color: white;
    &:hover {
      background: #f00;
    }
  }
  &.green {
    background: #040;
    color: white;
    &:hover {
      background: #0c0;
    }
  }
  &.blue {
    background: #004;
    color: white;
    &:hover {
      background: #00c;
    }
  }
  &.yellow {
    background: #440;
    color: black;
    &:hover {
      background: #cc0;
    }
  }
  &.purple {
    background: #044;
    color: white;
    &:hover {
      background: #0cc;
    }
  }
`;

export default LetterStyled;