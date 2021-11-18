import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

interface FormProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const Form = ({ children }: FormProps) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete='off'>
      {children}
    </form>
  );
};

export default Form;
