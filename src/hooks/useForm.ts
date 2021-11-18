import { useState, ChangeEvent } from 'react';

const useForm = (initialFValues: any) => {
  const [values, setValues] = useState<any>(initialFValues);

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
