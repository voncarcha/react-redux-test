import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  background: #6676b7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > section {
    width: 500px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    padding: 40px;
  }
`;
