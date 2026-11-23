function FragmentDemo() {
  const employees = [
    { id: 1, name: "Adithya", role: "React Developer" },
    { id: 2, name: "Rahul", role: "Frontend Developer" },
    { id: 3, name: "Sneha", role: "UI Designer" },
  ];

  return (
    <>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default FragmentDemo;