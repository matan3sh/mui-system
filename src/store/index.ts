import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeeSlice';

export default configureStore({
  reducer: {
    employeesStore: employeesReducer,
  },
});
