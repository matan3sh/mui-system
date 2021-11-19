import { createSlice } from '@reduxjs/toolkit';
import { getEmployees, addEmployee } from './employeeActions';
import { EmployeesSliceState } from 'interfaces/employee';

const initialState: EmployeesSliceState = {
  employees: [],
  getAllLoading: null,
  getAllError: null,
  addLoading: null,
  addError: null,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: {
    // Get all employees
    [getEmployees.pending]: (state) => {
      state.getAllLoading = true;
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.employees = payload;
      state.getAllLoading = false;
      state.getAllError = false;
    },
    [getEmployees.rejected]: (state, { payload }) => {
      state.getAllLoading = false;
      state.getAllError = payload;
    },

    // Add new employee
    [addEmployee.pending]: (state) => {
      state.addLoading = true;
    },
    [addEmployee.fulfilled]: (state, { payload }) => {
      state.employees = [payload, ...state.employees];
      state.addLoading = false;
      state.addError = false;
    },
    [addEmployee.rejected]: (state, { payload }) => {
      state.addLoading = false;
      state.addError = payload;
    },
  },
});

export default employeesSlice.reducer;
