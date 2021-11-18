import { Grid } from '@material-ui/core';
import { Form } from 'components';
import { AppInput, AppRadioGroup } from 'components/controls';
import { useForm } from 'hooks';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

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

const EmployeeForm = () => {
  const { values, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <AppInput
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
          />
          <AppInput
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <AppRadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
