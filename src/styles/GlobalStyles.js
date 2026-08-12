import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgCream};
    color: ${({ theme }) => theme.colors.charcoal};
    font-family: ${({ theme }) => theme.colors.sans};
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* Grab cursor for carousel drag */
  .carousel-viewport {
    cursor: grab;
  }
  .carousel-viewport:active {
    cursor: grabbing;
  }
`;
