import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 550px;
  margin 50px auto;

  @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      margin 50px auto 0;
  }
  
`;

type ColumnProps = {
  double?: boolean;
};

export const Column = styled.div<ColumnProps>`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.double ? 'space-between' : 'center')};
`;
