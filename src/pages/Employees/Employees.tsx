import { useEffect, useState } from 'react';
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
import { EmployeesSliceState, Employee } from 'interfaces/employee';

import { useTable } from 'hooks';
import { PageHeader } from 'components';
import EmployeeForm from './EmployeeForm';

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address' },
  { id: 'phone', label: 'Phone No.' },
  { id: 'department', label: 'Department' },
];

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filterFn, setFilterFn] = useState({
    fn: (items: any) => {
      return items;
    },
  });

  const { employees }: EmployeesSliceState = useSelector(
    (state: RootStateOrAny) => state.employeesStore
  );

  const {
    TableContainer,
    TableHeader,
    TablePaginationComponent,
    recordsAfterAction,
  } = useTable(employees, headCells, filterFn);

  const handleSearch = (e: any) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items;
        else
          return items.filter((x: any) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

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
        {/* <EmployeeForm /> */}
        <TableContainer>
          <TableHeader />
          <TableBody>
            {recordsAfterAction().map((employee: Employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.fullName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <TablePaginationComponent />
      </Paper>
    </>
  );
};

export default Employees;
