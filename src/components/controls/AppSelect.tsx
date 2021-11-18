import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { ChangeEvent } from 'react';

interface SelectProps {
  name: string;
  value: number | string | Date | boolean;
  label: string;
  onChange: (e: ChangeEvent<any>) => void;
  options: { id: string; title: string }[];
}

const AppSelect = (props: SelectProps) => {
  const { name, value, label, onChange, options } = props;

  return (
    <FormControl variant='outlined'>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value=''>None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
