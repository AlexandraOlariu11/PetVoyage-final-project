import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{    
    --gray-1: #6c757d;
    --white : white;
    --black: black;
}

.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;


export default GlobalStyles;