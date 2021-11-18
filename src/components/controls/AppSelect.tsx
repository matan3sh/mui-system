import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { ChangeEvent } from 'react';

interface SelectProps {
  name: string;
  value: number | string | Date | boolean;
  label: string;
  error?: string;
  onChange: (e: ChangeEvent<any>) => void;
  options: { id: string; title: string }[];
}

const AppSelect = (props: SelectProps) => {
  const { name, value, label, onChange, options, error = null } = props;

  return (
    <FormControl variant='outlined' {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value=''>None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default AppSelect;
