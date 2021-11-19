import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllEmployees } from 'services/employeeService';

import { Employee } from 'interfaces/employee';

interface EmployeesSliceState {
  employees: Employee[];
  loading: boolean | null;
  error: boolean | null;
}

const initialState: EmployeesSliceState = {
  employees: [],
  loading: null,
  error: null,
};

export const getEmployees: any = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    return await getAllEmployees();
  }
);

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: {
    [getEmployees.pending]: (state, action) => {
      state.loading = true;
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.employees = payload;
      state.loading = false;
    },
    [getEmployees.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default employeesSlice.reducer;
