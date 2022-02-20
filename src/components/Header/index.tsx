import { ToggleBtn } from '../ToggleBtn';
import * as Componet from './styles';

type Props = {
  toggleTheme: () => void;
};

export const Header = ({ toggleTheme }: Props) => {
  return (
    <Componet.Container>
      <div className="col-1">
        <h2>Social Media Dashboard</h2>
        <span>Total Followers: 23,004</span>
      </div>
      <div className="col-2">
        <span>Dark Mode</span>
        <ToggleBtn isChecked={false} changeTheme={toggleTheme} />
      </div>
    </Componet.Container>
  );
};
