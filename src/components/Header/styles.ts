import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1090px;

  .col-1 {
    h2 {
      margin: 0;
      font-size: 28px;
      color: hsl(230, 17%, 14%);
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: hsl(228, 12%, 44%);
    }
  }

  .col-2 {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 700;
      color: hsl(230, 22%, 74%);

      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;
