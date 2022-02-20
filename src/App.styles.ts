import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 35px 0;

  @media (max-width: 768px) {
    margin: 50px 25px;
  }
`;
