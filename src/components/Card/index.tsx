import * as Component from './styles';
import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

type Props = {
  social: string;
  username: string;
  followers: string;
  balance: number;
  color: string;
};

export const Card = ({
  social,
  username,
  followers,
  balance,
  color,
}: Props) => {
  return (
    <Component.Container color={color} balance={balance}>
      <div className="row-1">
        <img src={social} alt={social} />
        <span>{username}</span>
      </div>
      <div className="row-2">
        <p>{followers}</p>

        {username === 'Nathan F.' ? (
          <span>Subscribers</span>
        ) : (
          <span>Followers</span>
        )}
      </div>
      <div className="row-3">
        {balance > 0 ? (
          <img src={arrowUp} alt={arrowUp} />
        ) : (
          <img src={arrowDown} alt={arrowDown} />
        )}

        <span>{Math.abs(balance)}</span>
        <span>Today</span>
      </div>
    </Component.Container>
  );
};
