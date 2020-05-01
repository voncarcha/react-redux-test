import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    all: [],
    filteredEmployees: [],
    selectedEmployee: {},
  },
  reducers: {
    setEmployees: (state, action) => {
      state.all = action.payload;
    },
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
  },
});

export const { setEmployees, setSelectedEmployee } = employeesSlice.actions;

// thunk implementation
export function getEmployeesAsync() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        'http://dummy.restapiexample.com/api/v1/employees',
      );
      dispatch(setEmployees(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };
}

export const selectAllEmployees = (state) => state.employees.all;
export const selectSelectedEmployee = (state) => state.employees.selectedEmployee;

export default employeesSlice.reducer;
