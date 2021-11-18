import { SyntheticEvent } from 'react';
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
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFValues);

  const validate = () => {
    let temp: any = {};
    temp.fullName = values.fullName ? '' : 'This field is required.';
    temp.email = /$^|.+@.+..+/.test(values.email)
      ? ''
      : 'This field is required.';
    temp.phone =
      values.phone.length > 9 ? '' : 'Minimum 10 characters required.';
    temp.departmentId =
      values.departmentId.length !== 0 ? '' : 'This field is required.';

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (validate()) {
      window.alert('Test');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <AppInput
            label='Full Name'
            name='fullName'
            value={values.fullName}
            error={errors.fullName}
            onChange={handleInputChange}
          />
          <AppInput
            label='Email'
            name='email'
            value={values.email}
            error={errors.email}
            onChange={handleInputChange}
          />
          <AppInput
            label='Phone'
            name='phone'
            value={values.phone}
            error={errors.phone}
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
