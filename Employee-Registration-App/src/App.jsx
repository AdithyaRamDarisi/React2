import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const emptyEmployee = {
    name: "",
    email: "",
    department: "",
    salary: "",
    joiningDate: "",
  };

  const [employeeForm, setEmployeeForm] = useState(emptyEmployee);

  const [employeeList, setEmployeeList] = useState(() => {
    try {
      const savedEmployees = localStorage.getItem("registeredEmployees");
      const parsedEmployees = savedEmployees
        ? JSON.parse(savedEmployees)
        : [];

      return Array.isArray(parsedEmployees) ? parsedEmployees : [];
    } catch {
      return [];
    }
  });

  const [searchText, setSearchText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Save employees whenever the list changes.
  useEffect(() => {
    localStorage.setItem(
      "registeredEmployees",
      JSON.stringify(employeeList)
    );
  }, [employeeList]);

  // Handle changes in form fields.
  function handleChange(event) {
    const { name, value } = event.target;

    setEmployeeForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setErrorMessage("");
    setSuccessMessage("");
  }

  // Validate employee information.
  function validateForm() {
    if (
      !employeeForm.name.trim() ||
      !employeeForm.email.trim() ||
      !employeeForm.department ||
      !employeeForm.salary ||
      !employeeForm.joiningDate
    ) {
      return "Please fill in all fields.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(employeeForm.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (
      !Number.isFinite(Number(employeeForm.salary)) ||
      Number(employeeForm.salary) <= 0
    ) {
      return "Salary must be greater than zero.";
    }

    if (employeeForm.joiningDate > new Date().toLocaleDateString("en-CA")) {
      return "Joining date cannot be in the future.";
    }

    const duplicateEmail = employeeList.some(
      (employee) =>
        employee.email.toLowerCase() ===
          employeeForm.email.trim().toLowerCase() &&
        employee.id !== editingId
    );

    if (duplicateEmail) {
      return "An employee with this email already exists.";
    }

    return "";
  }

  // Register a new employee or update an existing employee.
  function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const cleanedEmployee = {
      ...employeeForm,
      name: employeeForm.name.trim(),
      email: employeeForm.email.trim(),
      salary: Number(employeeForm.salary),
    };

    if (editingId !== null) {
      setEmployeeList((previousList) =>
        previousList.map((employee) =>
          employee.id === editingId
            ? { ...employee, ...cleanedEmployee }
            : employee
        )
      );

      setSuccessMessage("Employee updated successfully!");
    } else {
      const newEmployee = {
        id: crypto.randomUUID(),
        ...cleanedEmployee,
      };

      setEmployeeList((previousList) => [
        ...previousList,
        newEmployee,
      ]);

      setSuccessMessage("Employee registered successfully!");
    }

    setEmployeeForm(emptyEmployee);
    setEditingId(null);
  }

  // Load employee information into the form for editing.
  function handleEdit(employee) {
    setEmployeeForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      salary: String(employee.salary),
      joiningDate: employee.joiningDate,
    });

    setEditingId(employee.id);
    setErrorMessage("");
    setSuccessMessage("");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Delete an employee.
  function handleDelete(employeeId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    setEmployeeList((previousList) =>
      previousList.filter((employee) => employee.id !== employeeId)
    );

    if (editingId === employeeId) {
      cancelEdit();
    }

    setErrorMessage("");
    setSuccessMessage("Employee deleted successfully!");
  }

  // Cancel editing and reset the form.
  function cancelEdit() {
    setEmployeeForm(emptyEmployee);
    setEditingId(null);
    setErrorMessage("");
    setSuccessMessage("");
  }

  // Search employees by name, email, or department.
  const filteredEmployees = employeeList.filter((employee) => {
    const searchValue = searchText.trim().toLowerCase();

    return (
      employee.name.toLowerCase().includes(searchValue) ||
      employee.email.toLowerCase().includes(searchValue) ||
      employee.department.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main className="app-container">
      <header className="app-header">
        <div>
          <p className="eyebrow">EMPLOYEE MANAGEMENT</p>
          <h1>Employee Registration</h1>
          <p className="subtitle">
            Register, manage, and search your employee records.
          </p>
        </div>

        <div className="employee-counter">
          <span>Total Employees</span>
          <strong>{employeeList.length}</strong>
        </div>
      </header>

      {/* Employee Registration Form */}
      <section className="panel">
        <div className="section-heading">
          <div>
            <h2>
              {editingId !== null
                ? "Edit Employee"
                : "Register New Employee"}
            </h2>
            <p>Enter the employee details below.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="employeeName">Full Name</label>
              <input
                id="employeeName"
                name="name"
                type="text"
                value={employeeForm.name}
                onChange={handleChange}
                placeholder="Enter full name"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="employeeEmail">Email Address</label>
              <input
                id="employeeEmail"
                name="email"
                type="email"
                value={employeeForm.email}
                onChange={handleChange}
                placeholder="employee@example.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="employeeDepartment">Department</label>
              <select
                id="employeeDepartment"
                name="department"
                value={employeeForm.department}
                onChange={handleChange}
              >
                <option value="">Select department</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Testing">Testing</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="employeeSalary">Monthly Salary (₹)</label>
              <input
                id="employeeSalary"
                name="salary"
                type="number"
                min="1"
                step="any"
                value={employeeForm.salary}
                onChange={handleChange}
                placeholder="Enter monthly salary"
              />
            </div>

            <div className="form-group">
              <label htmlFor="joiningDate">Joining Date</label>
              <input
                id="joiningDate"
                name="joiningDate"
                type="date"
                max={new Date().toLocaleDateString("en-CA")}
                value={employeeForm.joiningDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {errorMessage && (
            <p className="message error-message" role="alert">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="message success-message" role="status">
              {successMessage}
            </p>
          )}

          <div className="form-actions">
            <button type="submit" className="primary-button">
              {editingId !== null
                ? "Update Employee"
                : "Register Employee"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="secondary-button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Employee List */}
      <section className="panel employee-section">
        <div className="section-heading employee-list-heading">
          <div>
            <h2>Employee Directory</h2>
            <p>
              Showing {filteredEmployees.length} of {employeeList.length}{" "}
              employees
            </p>
          </div>

          <div className="search-box">
            <label htmlFor="employeeSearch">Search employees</label>
            <input
              id="employeeSearch"
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search name, email, department..."
            />
          </div>
        </div>

        {employeeList.length === 0 ? (
          <div className="empty-state">
            <h3>No employees registered</h3>
            <p>Register your first employee using the form above.</p>
          </div>
        ) : filteredEmployees.length === 0 ? (
          <div className="empty-state">
            <h3>No matching employees</h3>
            <p>Try searching with another name, email, or department.</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Monthly Salary</th>
                  <th>Joining Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <div className="employee-name">
                        {employee.name}
                      </div>
                      <div className="employee-email">
                        {employee.email}
                      </div>
                    </td>

                    <td>
                      <span className="department-badge">
                        {employee.department}
                      </span>
                    </td>

                    <td>
                      {Number(employee.salary).toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td>{employee.joiningDate}</td>

                    <td>
                      <div className="action-buttons">
                        <button
                          type="button"
                          className="edit-button"
                          onClick={() => handleEdit(employee)}
                          aria-label={`Edit ${employee.name}`}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() => handleDelete(employee.id)}
                          aria-label={`Delete ${employee.name}`}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer className="app-footer">
        Built with React, useState, useEffect, and localStorage.
      </footer>
    </main>
  );
}

export default App;