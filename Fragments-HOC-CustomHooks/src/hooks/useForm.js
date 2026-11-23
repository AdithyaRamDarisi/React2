import { useState } from "react";

function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData(initialValues);
  }

  return { formData, handleChange, resetForm };
}

export default useForm;