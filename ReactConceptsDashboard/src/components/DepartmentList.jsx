function DepartmentList({ departments }) {
  return (
    <div className="department-grid">
      {departments.map(({ id, name, manager, employees }) => (
        <div className="department-card" key={id}>
          <div className="department-header">
            <div className="department-icon">
              {name.charAt(0)}
            </div>

            <div>
              <h3>{name}</h3>
              <p>{manager}</p>
            </div>
          </div>

          <div className="employee-count">
            {employees.length} Employees
          </div>

          <h4>Team Members</h4>

          <ul className="employee-list">
            {employees.map(({ id, name, role }) => (
              <li key={id}>
                <div className="employee-avatar">
                  {name.charAt(0)}
                </div>

                <div>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DepartmentList;