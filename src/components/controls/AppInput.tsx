import { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

interface InputProps {
  name: string;
  value: number | string | Date | boolean;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AppInput = (props: InputProps) => {
  const { name, value, label, onChange } = props;

  return (
    <TextField
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default AppInput;
