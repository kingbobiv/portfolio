import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    padding: 0;
    margin: 0;
    background: url(/images/bg-grid.jpg) repeat 0 0;
  }
  font-family: 'Fjalla One', sans-serif;
  font-family: 'Roboto', sans-serif;
`;

export default GlobalStyles;
