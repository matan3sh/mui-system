import { ReactNode, SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: SyntheticEvent) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const Form = ({ children, onSubmit }: FormProps) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete='off' onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
