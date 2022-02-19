import * as Component from './App.styles';
import { CardsArea } from './components/CardsArea';
import { TextArea } from './components/TextArea';

const App = () => {
  return (
    <Component.Container>
      <TextArea />
      <CardsArea />
    </Component.Container>
  );
};

export default App;
