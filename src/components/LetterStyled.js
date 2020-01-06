import styled from 'styled-components';

const LetterStyled = styled.button`
  transition: all 0.5s ease;
  padding: 0;
  margin: 1px;
  text-align: center;
  font-size: 5em;
  font-family: 'Vollkorn', serif;
  text-transform: uppercase;
  background: #f0f0f0;
  color: #888;
  width: 100%;
  height: 100vh;
  border: 0;
  overflow: hidden;
  &:focus {
    cursor: pointer;
    outline: none;
    color: white;
  }

  &.red {
    background: #400;
    &:hover {
      background: #f00;
    }
  }
  &.green {
    background: #040;
    &:hover {
      background: #0c0;
    }
  }
  &.blue {
    background: #004;
    &:hover {
      background: #00c;
    }
  }
  &.yellow {
    background: #440;
    &:hover {
      background: #cc0;
    }
  }
  &.purple {
    background: #044;
    &:hover {
      background: #0cc;
    }
  }
`;

export default LetterStyled;