import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 1090px;
  height: auto;
  margin 10px auto;

  .rowCard-1 {
    display: flex;
    justify-content: start;
    margin-bottom: 20px;

    span {
      font-size: 24px;
      font-weight: 700;
      color:  ${(props) => props.theme.colors.textPrimary};
    }
  }

  .rowCard-2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
      flex-direction: column;
      width:100%;
      height: auto;
      margin 50px auto 0;

          .rowCard-2 {
        flex-direction: column;
        margin-bottom: 0;
      }
  }
  
`;
