import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  color: hsl(229, 6%, 66%);

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 70px 0;

  @media (max-width: 768px) {
    margin: 70px 20px;
  }
`;
