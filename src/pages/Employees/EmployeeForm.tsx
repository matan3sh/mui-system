import { SyntheticEvent } from 'react';
import { Grid } from '@material-ui/core';
import { useForm } from 'hooks';
import { Form } from 'components';
import {
  AppCheckbox,
  AppInput,
  AppRadioGroup,
  AppSelect,
  AppDatePicker,
  AppButton,
} from 'components/controls';
import * as employeeService from 'services/employeeService';

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
  const validate = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ('fullName' in fieldValues) {
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    }
    if ('email' in fieldValues) {
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'This field is required.';
    }
    if ('phone' in fieldValues) {
      temp.phone =
        fieldValues.phone.length > 9 ? '' : 'Minimum 10 characters required.';
    }
    if ('departmentId' in fieldValues) {
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? '' : 'This field is required.';
    }
    setErrors({ ...temp });

    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === '');
    }
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

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
            error={errors.departmentId}
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
            <AppButton color='default' text='Reset' onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
