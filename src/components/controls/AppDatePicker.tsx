import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface DatePickerProps {
  name: string;
  value: Date;
  label: string;
  onChange: (func: any) => void;
}

const AppDatePicker = (props: DatePickerProps) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventPara = (name: string, value: any) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant='inline'
        inputVariant='outlined'
        label={label}
        format='dd/MM/yyyy'
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default AppDatePicker;
