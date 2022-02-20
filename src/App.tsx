import * as Component from './App.styles';

import { CardsArea } from './components/CardsArea';
import { SmallCardsArea } from './components/SmallCardsArea';
import { Header } from './components/Header';
import { SmallCard } from './components/SmallCard';
import { ToggleBtn } from './components/ToggleBtn';

const App = () => {
  return (
    <Component.Container>
      <Header />
      <CardsArea />
      <SmallCardsArea />
    </Component.Container>
  );
};

export default App;
