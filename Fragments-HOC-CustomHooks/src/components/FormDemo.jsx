import useForm from "../hooks/useForm";

function FormDemo() {
  const { formData, handleChange, resetForm } = useForm({
    username: "",
    email: "",
    role: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");

    resetForm();
  }

  return (
    <div>
      <h2>Employee Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Tester">Tester</option>
        </select>

        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default FormDemo;