import React from "react";

const EmployeeTable = ({
  employees = [],
  searchTerm = "",
  selectedDepartment = "All",
  onEdit,
  onDelete
}) => {

  // Search and filter employees
  const filteredEmployees = employees.filter((employee) => {

    const name = (employee.name || "").toLowerCase();
    const email = (employee.email || "").toLowerCase();
    const department = (employee.department || "").toLowerCase();

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      name.includes(search) ||
      email.includes(search) ||
      department.includes(search);

    const matchesDepartment =
      selectedDepartment === "All" ||
      department === selectedDepartment.toLowerCase();

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="employee-table-container">

      <table className="employee-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredEmployees.length > 0 ? (

            filteredEmployees.map((employee) => (

              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>{employee.name || "N/A"}</td>

                <td>{employee.email || "N/A"}</td>

                <td>{employee.department || "N/A"}</td>

                <td>
                  ₹{Number(employee.salary || 0).toLocaleString("en-IN")}
                </td>

                <td>

                  <button
                    onClick={() => onEdit && onEdit(employee)}
                    className="edit-btn"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete && onDelete(employee.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No employees found
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
};

export default EmployeeTable;