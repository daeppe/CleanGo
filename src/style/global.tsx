import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --black: #0C090B;
  --dark-green: #313630;
  --green: #546652;
  --gray: #CFCFCF;
  --white: #FFFFFF;
  --font-standard: "Lato", sans-serif;
  --font-secondary: 'Oswald', sans-serif;
}

html, body, div, main, aside, section, article, footer, header {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
   }
  
   body {
      background: var(--white);
      font-family: var(---font-standard);
    }    
  
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
  
    button {
      cursor: pointer;
    }
    
    a, li {
      list-style: none;
      text-decoration: none;
    }
  `;
