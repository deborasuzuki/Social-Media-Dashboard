import * as Component from './styles';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import instagramIcon from '../../images/icon-instagram.svg';
import youtubeIcon from '../../images/icon-youtube.svg';
import { SmallCard } from '../SmallCard';

export const SmallCardsArea = () => {
  const cardList = [
    {
      social: facebookIcon,
      action: 'Page Views',
      counter: '87',
      balance: 3,
    },
    {
      social: facebookIcon,
      action: 'Likes',
      counter: '52',
      balance: -2,
    },
    {
      social: instagramIcon,
      action: 'Likes',
      counter: '5462',
      balance: 2257,
    },
    {
      social: instagramIcon,
      action: 'Profile Views',
      counter: '52k',
      balance: 1375,
    },
    {
      social: twitterIcon,
      action: 'Retweets',
      counter: '117',
      balance: 303,
    },
    {
      social: twitterIcon,
      action: 'Likes',
      counter: '507',
      balance: 553,
    },
    {
      social: youtubeIcon,
      action: 'Likes',
      counter: '107',
      balance: -19,
    },
    {
      social: youtubeIcon,
      action: 'Total Views',
      counter: '1407',
      balance: -12,
    },
  ];

  return (
    <Component.Container>
      <div className="rowCard-1">
        <span>Overview - Today</span>
      </div>
      <div className="rowCard-2">
        <SmallCard {...cardList[0]} />
        <SmallCard {...cardList[1]} />
        <SmallCard {...cardList[2]} />
        <SmallCard {...cardList[3]} />
      </div>
      <div className="rowCard-2">
        <SmallCard {...cardList[4]} />
        <SmallCard {...cardList[5]} />
        <SmallCard {...cardList[6]} />
        <SmallCard {...cardList[7]} />
      </div>
    </Component.Container>
  );
};
