import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import EmployeeApi from 'lib/api/employee';
import { EmployeesSliceState, Employee } from 'interfaces/employee';

const initialState: EmployeesSliceState = {
  employees: [],
  getAllLoading: null,
  getAllError: null,
  addLoading: null,
  addError: null,
};

export const getEmployees: any = createAsyncThunk<Employee[]>(
  'employees/fetchEmployees',
  async () => {
    const res = await new EmployeeApi().getAll();
    return res;
  }
);

export const addEmployee: any = createAsyncThunk<Employee, Employee>(
  'employees/createEmployee',
  async (data) => {
    const res = await new EmployeeApi().add(data);
    return res;
  }
);

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
