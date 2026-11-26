function StudentCard({ student }) {
  const {
    name,
    role,
    department,
    email,
    status,
    skills,
    score
  } = student;

  return (
    <div className="student-card">
      <div className="student-top">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <span className={`status ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <h3>{name}</h3>
      <p className="student-role">{role}</p>

      <div className="student-info">
        <span>Department</span>
        <strong>{department}</strong>
      </div>

      <div className="student-info">
        <span>Email</span>
        <strong>{email}</strong>
      </div>

      <div className="student-info">
        <span>Score</span>
        <strong>{score}%</strong>
      </div>

      <div className="skills">
        {skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default StudentCard;