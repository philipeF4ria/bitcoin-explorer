import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 90px;
  background: #2d2e2d;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;

  > svg {
    color: #f7a900;
    margin: 0 8px 0 12px;
  }

  @media (max-width: 600px) {
    justify-content: center;

    position: sticky;
  }
`;
