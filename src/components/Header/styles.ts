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
      color: ${(props) => props.theme.colors.textSecondary};
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textPrimary};
    }
  }

  .col-2 {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textTertiary};

      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    .col-1 {
      width: 100%;
      padding-bottom: 24px;
      border-bottom: 0.5px solid ${(props) => props.theme.colors.textPrimary};

      h2 {
        font-size: 22px;
      }
    }

    .col-2 {
      width: 100%;
      padding-top: 20px;
      justify-content: space-between;
    }
  }
`;
