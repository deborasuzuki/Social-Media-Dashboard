import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      cardBg: string;
      cardHover: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
    };
  }
}
