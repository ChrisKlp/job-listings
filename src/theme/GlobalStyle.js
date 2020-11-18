import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
${reset}


*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Spartan', sans-serif;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.background};
}
`;

export default GlobalStyle;
