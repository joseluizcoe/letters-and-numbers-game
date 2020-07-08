import styled, {css} from 'styled-components';

export const LetterStyled = styled.a`
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
  display:flex;
  align-items: center;
  justify-content: center;

  user-select:none;
  -moz-user-select:none;
  -webkit-touch-callout:none;
  -ms-user-select:none;

  &:hover {
    cursor: pointer;
    outline: none;
    color: white;
  }

  ${props =>
    props.red &&
    css`
      background: #ffb48f;
      &:hover {
        background: #f00;
      }
    `}

  ${props =>
    props.green &&
    css`
      background: #f5e6cc;
      &:hover {
        background: #0c0;
      }
    `}

  ${props =>
    props.blue &&
    css`
      background: #17e9e0;
      &:hover {
        background: #00c;
      }
    `}

  ${props =>
    props.yellow &&
    css`
      background: #fccd04;
      &:hover {
        background: #ffaa09;
      }
    `}

  ${props =>
    props.purple &&
    css`
      background: #a64ac9;
      &:hover {
        background: #ff4aff;
      }
    `}

`;

export default { LetterStyled };
