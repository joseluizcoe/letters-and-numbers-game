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
    background: #ffb48f;
    &:hover {
      background: #f00;
    }
  }
  &.green {
    background: #f5e6cc;
    &:hover {
      background: #0c0;
    }
  }
  &.blue {
    background: #17e9e0;
    &:hover {
      background: #00c;
    }
  }
  &.yellow {
    background: #fccd04;
    &:hover {
      background: #ffaa09;
    }
  }
  &.purple {
    background: #a64ac9;
    &:hover {
      background: #ff4aff;
    }
  }
`;

export default LetterStyled;