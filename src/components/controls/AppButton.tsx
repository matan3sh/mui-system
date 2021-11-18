import { Button, ButtonProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

interface IProps extends ButtonProps {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'none',
  },
}));

const AppButton = (props: IProps) => {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}>
      {text}
    </Button>
  );
};

export default AppButton;
