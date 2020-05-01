import { combineReducers } from '@reduxjs/toolkit';

import employeesReducer from 'modules/employees';

export default combineReducers({
  employees: employeesReducer,
});
