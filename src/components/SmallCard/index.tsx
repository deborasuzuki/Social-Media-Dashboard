import * as Component from './styles';
import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

type Props = {
  social: string;
  action: string;
  counter: string;
  balance: number;
};

export const SmallCard = ({ social, action, counter, balance }: Props) => {
  return (
    <Component.Container balance={balance}>
      <div className="row-1">
        <span>{action}</span>
        <img src={social} alt={social} />
      </div>
      <div className="row-2">
        <p>{counter}</p>

        <div>
          {balance > 0 ? (
            <img src={arrowUp} alt={arrowUp} />
          ) : (
            <img src={arrowDown} alt={arrowDown} />
          )}

          <span>{Math.abs(balance)}%</span>
        </div>
      </div>
    </Component.Container>
  );
};
