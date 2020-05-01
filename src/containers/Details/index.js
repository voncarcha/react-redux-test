import React from 'react';
import Logout from 'components/Logout';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSelectedEmployee } from 'modules/employees';
import { Button } from 'reactstrap';

import * as S from './styles';

function Details({ history }) {
  const selectedEmployee = useSelector(selectSelectedEmployee);

  return (
    <S.Wrapper>
      <header>
        <Button onClick={() => history.goBack()}>Go Back</Button>
      </header>
      <article>
        <h5>
          <strong>ID:</strong> {selectedEmployee.id}
        </h5>
        <h5>
          <strong>Name:</strong> {selectedEmployee.employee_name}
        </h5>
        <h5>
          <strong>Salary:</strong> {selectedEmployee.employee_salary}
        </h5>
        <h5>
          <strong>Salary:</strong> {selectedEmployee.employee_age}
        </h5>
      </article>
      <Logout />
    </S.Wrapper>
  );
}

export default withRouter(Details);
