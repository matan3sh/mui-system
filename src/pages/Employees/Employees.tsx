import { useEffect } from 'react';
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { PeopleOutlineTwoTone } from '@material-ui/icons';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getEmployees } from 'store/employeeActions';
import { EmployeesSliceState } from 'interfaces/employee';

import { useTable } from 'hooks';
import { PageHeader } from 'components';
import EmployeeForm from './EmployeeForm';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { TableContainer } = useTable();

  const { employees }: EmployeesSliceState = useSelector(
    (state: RootStateOrAny) => state.employeesStore
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <>
      <PageHeader
        title='New Employee'
        subtitle='Form design with validation'
        icon={<PeopleOutlineTwoTone fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TableContainer>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.fullName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Employees;
