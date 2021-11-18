import { ChangeEvent } from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from '@material-ui/core';

interface RadioGroupProps {
  name: string;
  value: number | string | Date | boolean;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  items: { id: string; title: string }[];
}

const AppRadioGroup = (props: RadioGroupProps) => {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default AppRadioGroup;
