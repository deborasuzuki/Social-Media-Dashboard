import * as Component from './styles';

type Props = {
  title: string;
  description: string;
  image: string;
  color: string;
};

export const Card = ({ title, description, image, color }: Props) => {
  return (
    <Component.Container color={color}>
      <span>{title}</span>
      <p>{description}</p>
      <div>
        <img src={image} alt={title} />
      </div>
    </Component.Container>
  );
};
