import { useState, ChangeEvent } from 'react';

const useForm = (
  initialFValues: any,
  validateOnChange: boolean = false,
  validate: (values: object) => void
) => {
  const [values, setValues] = useState<any>(initialFValues);
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

export default useForm;
