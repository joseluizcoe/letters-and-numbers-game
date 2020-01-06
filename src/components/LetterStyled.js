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
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  &:focus {
    cursor: pointer;
    outline: none;
  }

  &.red {
    background: #900;
    color: white;
    &:hover {
      background: #f00;
    }
  }
  &.green {
    background: #090;
    color: white;
    &:hover {
      background: #0c0;
    }
  }
  &.blue {
    background: #009;
    color: white;
    &:hover {
      background: #00c;
    }
  }
  &.yellow {
    background: #ee0;
    color: black;
    &:hover {
      background: #cc0;
    }
  }
  &.purple {
    background: #0ee;
    color: white;
    &:hover {
      background: #0cc;
    }
  }
`;

export default LetterStyled;