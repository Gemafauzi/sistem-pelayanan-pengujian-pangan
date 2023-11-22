import { useState } from "react";

const useForm = (initialValues = {}) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return { form, handleChange };
};

export default useForm;
