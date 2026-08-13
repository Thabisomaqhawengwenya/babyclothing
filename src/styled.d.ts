import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgCream: string;
      gold: string;
      goldHover: string;
      charcoal: string;
      sand: string;
      sandLight: string;
      sage: string;
      white: string;
      overlay: string;
      borderLight: string;
      textMuted: string;
    };
    fonts: {
      serif: string;
      sans: string;
    };
    layout: {
      maxWidth: string;
    };
    transitions: {
      smooth: string;
      fast: string;
    };
    breakpoints: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }
}
