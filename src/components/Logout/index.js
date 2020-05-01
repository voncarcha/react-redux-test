import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

import { removeToken } from 'common/helpers';

import * as S from './styles';

function Logout() {
  let history = useHistory();
  const handleLogout = () => {
    removeToken('test-token');
    history.push('/login');
  };
  
  return (
    <S.Wrapper>
      <Button outline color="danger" onClick={handleLogout}>
        Logout
      </Button>
    </S.Wrapper>
  );
}

export default Logout;
