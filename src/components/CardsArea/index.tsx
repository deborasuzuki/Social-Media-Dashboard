import { Card } from '../Card';
import * as Component from './styles';
import calculatorImg from '../../images/icon-calculator.svg';
import karmaImg from '../../images/icon-karma.svg';
import supervisorImg from '../../images/icon-supervisor.svg';
import teambuilderImg from '../../images/icon-team-builder.svg';

export const CardsArea = () => {
  const cardList = [
    {
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      image: supervisorImg,
      color: 'hsl(180, 62%, 55%)',
    },
    {
      title: 'Team Builder',
      description:
        'Scans our talent network to create the optimal team for your project',
      image: teambuilderImg,
      color: 'hsl(0, 78%, 62%)',
    },
    {
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      image: karmaImg,
      color: 'hsl(34, 97%, 64%)',
    },
    {
      title: 'Calculator',
      description:
        'Uses data from past projects to provide better delivery estimates',
      image: calculatorImg,
      color: 'hsl(212, 86%, 64%)',
    },
  ];

  return (
    <Component.Container>
      <Component.Column>
        <Card {...cardList[0]} />
      </Component.Column>
      <Component.Column double>
        <Card {...cardList[1]} />
        <Card {...cardList[2]} />
      </Component.Column>
      <Component.Column>
        <Card {...cardList[3]} />
      </Component.Column>
    </Component.Container>
  );
};
