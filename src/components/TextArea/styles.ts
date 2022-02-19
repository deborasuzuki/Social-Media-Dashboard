import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 550px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

type TitleProps = {
  bold?: boolean;
};

export const Title = styled.div<TitleProps>`
  font-weight: ${(props) => (props.bold ? 600 : 300)};
  font-size: 32px;
  color: hsl(234, 12%, 34%);

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: hsl(229, 6%, 66%);
  text-align: center;
  padding-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
