import styled from 'styled-components';

type ContainerProps = {
  color: string;
};

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 350px;
  height: 250px;
  margin: 5px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 10px 20px hsl(234, 12%, 82%);

  display: flex;
  flex-direction: column;

  border-top: 4px solid ${(props) => props.color};

  span {
    color: hsl(234, 12%, 34%);
    font-weight: 600;
  }

  p {
    letter-spacing: 0.04em;
    font-size: 12px;
  }

  div {
    display: flex;
    justify-content: end;
    margin-top: 20px;

    img {
      width: 65px;
      height: 65px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    font-size: 18px;

    border-top: 4px solid ${(props) => props.color};

    padding: 20px;

    p {
      font-size: 12px;
    }

    div {
      display: flex;
      justify-content: end;
      margin-top: 20px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
