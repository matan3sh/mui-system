import { useState, ChangeEvent } from 'react';
import { fieldsVTypes } from 'types';

const useForm = (initialFValues: fieldsVTypes) => {
  const [values, setValues] = useState<fieldsVTypes>(initialFValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

export default useForm;
