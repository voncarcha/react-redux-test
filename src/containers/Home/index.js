import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, Input } from 'reactstrap';
import {
  getEmployeesAsync,
  selectAllEmployees,
  setSelectedEmployee,
} from 'modules/employees';

import Logout from 'components/Logout';

import * as S from './styles';

function Home() {
  let history = useHistory();
  const dispatch = useDispatch();
  const employees = useSelector(selectAllEmployees);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    dispatch(getEmployeesAsync());
  }, [dispatch]);

  const onClickRow = (id) => {
    const selectedEmployee = employees.find((e) => e.id === id);
    dispatch(setSelectedEmployee(selectedEmployee));
    history.push(`/details/${id}`);
  };

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    const filteredItems = employees.filter((i) => {
      return (
        i.employee_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    });
    setFilteredEmployees(filteredItems);
  };

  const employeeData = filteredEmployees.length === 0 ? employees : filteredEmployees;

  return (
    <S.Wrapper>
      <header>
        <span>Search Employee:</span>
        <Input type="text" name="search" onChange={(e) => handleSearch(e)} />
      </header>
      <section>
        <Table dark hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((i) => (
              <tr key={i.id}>
                <td>{i.employee_name}</td>
                <td width="150">
                  <Button onClick={() => onClickRow(i.id)}>View Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <Logout />
    </S.Wrapper>
  );
}

export default Home;
