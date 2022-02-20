import { Card } from '../Card';
import * as Component from './styles';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import instagramIcon from '../../images/icon-instagram.svg';
import youtubeIcon from '../../images/icon-youtube.svg';

export const CardsArea = () => {
  const cardList = [
    {
      social: facebookIcon,
      username: '@nathanf',
      followers: '1987',
      balance: 12,
      color: 'hsl(208, 92%, 53%)',
    },
    {
      social: twitterIcon,
      username: '@nathanf',
      followers: '1044',
      balance: 99,
      color: 'hsl(203, 89%, 53%)',
    },
    {
      social: instagramIcon,
      username: '@realnathanf',
      followers: '11k',
      balance: 1099,
      color: 'hsl(329, 70%, 58%)',
    },
    {
      social: youtubeIcon,
      username: 'Nathan F.',
      followers: '8239',
      balance: -144,
      color: 'hsl(348, 97%, 39%)',
    },
  ];

  return (
    <Component.Container>
      <Card {...cardList[0]} />
      <Card {...cardList[1]} />
      <Card {...cardList[2]} />
      <Card {...cardList[3]} />
    </Component.Container>
  );
};
