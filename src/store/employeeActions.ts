import { createAsyncThunk } from '@reduxjs/toolkit';
import { Employee } from 'interfaces/employee';
import EmployeeApi from 'lib/api/employee';

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
