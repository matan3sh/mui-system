import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';

interface CheckBoxProps {
  name: string;
  value: boolean;
  label: string;
  onChange: (func: any) => void;
}

const AppCheckbox = (props: CheckBoxProps) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventPara = (name: string, value: boolean) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color='primary'
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default AppCheckbox;
