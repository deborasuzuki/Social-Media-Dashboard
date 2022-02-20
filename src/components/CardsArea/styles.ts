import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1090px;
  height: 215px;
  margin 50px auto 30px;

  @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      margin 50px auto 0;
  }
  
`;
