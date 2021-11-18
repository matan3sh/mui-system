import { Grid } from '@material-ui/core';
import { useForm } from 'hooks';
import { Form } from 'components';
import {
  AppCheckbox,
  AppInput,
  AppRadioGroup,
  AppSelect,
} from 'components/controls';
import * as employeeService from 'services/employeeService';
import AppDatePicker from 'components/controls/AppDatePicker';
import AppButton from 'components/controls/AppButton';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  phone: '',
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
          <AppInput
            label='Phone'
            name='phone'
            value={values.phone}
            onChange={handleInputChange}
          />
          <AppInput
            label='CIty'
            name='city'
            value={values.city}
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
          <AppSelect
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <AppDatePicker
            name='hireDate'
            label='Hire Date'
            onChange={handleInputChange}
            value={values.hireDate}
          />
          <AppCheckbox
            name='isPermanent'
            label='Permanent Employee'
            onChange={handleInputChange}
            value={values.isPermanent}
          />

          <div>
            <AppButton type='submit' text='Submit' />
            <AppButton color='default' text='Reset' />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
