import * as Componet from './styles';
import { useState } from 'react';

type Props = {
  isChecked: boolean;
  changeTheme: () => void;
};

export const ToggleBtn = (props: Props) => {
  const [isChecked, setChecked] = useState(props.isChecked);

  const handleChange = () => {
    setChecked(!isChecked);
    props.changeTheme();
  };

  return (
    <Componet.Container>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <div className="slider"></div>
      </label>
    </Componet.Container>
  );
};
