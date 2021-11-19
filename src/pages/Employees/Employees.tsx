import { makeStyles, Paper } from '@material-ui/core';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
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

  return (
    <>
      <PageHeader
        title='New Employee'
        subtitle='Form design with validation'
        icon={<PeopleOutlineTwoTone fontSize='large' />}
      />
      <Paper className={classes.pageContent}>{/* <EmployeeForm /> */}</Paper>
    </>
  );
};

export default Employees;
