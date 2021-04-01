import styled from 'styled-components';

export const IntroDisplayBlock = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  /* z-index: -2; */
  &:focus {
    outline: none;
  }
`;

export const Display = styled.div`
  font-size: '1rem';
  font-family: 'VT323', monospace;
  color: rgb(50, 255, 0);
  margin: 1.5rem;
  pointer-events: none;
  z-index: -2;
`;
