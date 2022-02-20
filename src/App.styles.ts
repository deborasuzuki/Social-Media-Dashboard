import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 35px 0;

  @media (max-width: 768px) {
    margin: 70px 20px;
  }
`;
