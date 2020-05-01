import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 60px;
  max-width: 900px;
  margin: auto;
  > header {
    max-width: 600px;
    display: flex;
    align-items: center;
    > span {
      font-size: 16px;
      display: block;
      flex: 0 0 150px;
    }
  }
  > section {
    margin-top: 20px;
  }
`;

export const Logout = styled.div`
  position: absolute;
  top: 30px;
  right: 60px;
`;
