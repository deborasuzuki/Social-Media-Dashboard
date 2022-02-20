import styled from 'styled-components';

type ContainerProps = {
  color: string;
  balance: number;
};

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 250px;
  height: 215px;
  padding: 30px 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.cardBg};

  display: flex;
  flex-direction: column;
  justify-contente: space-between;

  border-top: 4px solid ${(props) => props.color};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
  }

  .row-1 {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 12px;
      color: ${(props) => props.theme.colors.textPrimary};
      font-weight: 700;
      margin-left: 5px;
    }
  }

  .row-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    p {
      margin: 0;
      font-size: 54px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textSecondary};
    }

    span {
      font-size: 12px;
      color: hsl(228, 12%, 44%);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.4em;
    }
  }

  .row-3 {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 12px;
      color: ${(props) =>
        props.balance > 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'};
      font-weight: 700;
      margin-left: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;
