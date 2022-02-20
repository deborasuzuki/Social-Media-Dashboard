import styled from 'styled-components';

type ContainerProps = {
  balance: number;
};

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 250px;
  height: 125px;
  padding: 20px 20px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.cardBg};

  display: flex;
  flex-direction: column;
  justify-contente: space-between;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
  }

  .row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 13px;
      color: ${(props) => props.theme.colors.textPrimary};
      font-weight: 700;
      margin-left: 5px;
    }
  }

  .row-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    p {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textSecondary};
    }

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 12px;
        color: ${(props) =>
          props.balance > 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'};
        font-weight: 700;
        text-transform: uppercase;
        margin-left: 4px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;
