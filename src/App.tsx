import * as Component from './App.styles';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { CardsArea } from './components/CardsArea';
import { SmallCardsArea } from './components/SmallCardsArea';
import { Header } from './components/Header';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Component.Container>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <CardsArea />
        <SmallCardsArea />
      </Component.Container>
    </ThemeProvider>
  );
};

export default App;
