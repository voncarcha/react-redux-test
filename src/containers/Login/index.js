import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { setToken } from 'common/helpers';
import { getToken } from 'common/helpers';

import * as S from './styles';

function Login() {
  let history = useHistory();

  useEffect(() => {
    const hasToken = getToken();
    if (hasToken) {
      history.push('/home');
    }
  }, [history]);

  const handleLogin = () => {
    setToken('test-token');
    history.push('/home');
  };

  return (
    <S.Wrapper>
      <section>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <br />
        <Button color="primary" size="lg" block onClick={handleLogin}>
          Login
        </Button>
      </section>
    </S.Wrapper>
  );
}

export default Login;
