import { Grid, TextField, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';

type fieldsVTypes = {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  departmentId: string;
  hireDate: Date;
  isPermanent: boolean;
};

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: '',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const EmployeeForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState<fieldsVTypes>(initialFValues);

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Full Name'
            value={values.fullName}
          />
          <TextField variant='outlined' label='Email' value={values.email} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
