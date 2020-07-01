import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #3f403f;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
