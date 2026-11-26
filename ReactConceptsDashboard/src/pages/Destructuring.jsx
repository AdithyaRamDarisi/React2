import { useState } from "react";

function ProfileCard({ profile }) {
  const { name, role, location, skills } = profile;

  return (
    <div className="demo-card">
      <div className="avatar large">{name.charAt(0)}</div>

      <h3>{name}</h3>
      <p>{role}</p>
      <p>📍 {location}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span className="skill-tag" key={`${skill}-${index}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Destructuring() {
  const profile = {
    name: "Adithya",
    role: "Associate Software Engineer",
    location: "Ongole",
    skills: ["React", "JavaScript", "CSS", "HTML"]
  };

  // Object destructuring
  const { name, role, location } = profile;

  // Array destructuring
  const technologies = ["React", "Redux", "Node.js"];
  const [firstTechnology, secondTechnology, thirdTechnology] = technologies;

  // State destructuring
  const [count, setCount] = useState(0);

  // Function parameter destructuring
  function displayEmployee({ name, role }) {
    return `${name} works as ${role}`;
  }

  return (
    <div className="page">
      <div className="page-header">
        <span className="eyebrow">MODULE 03</span>
        <h1>Destructuring Playground</h1>
        <p>
          Extract values from objects, arrays, props, state and function parameters.
        </p>
      </div>

      <div className="demo-grid">
        <div className="demo-card">
          <span className="demo-label">OBJECT DESTRUCTURING</span>
          <h3>{name}</h3>
          <p>{role}</p>
          <p>{location}</p>
          <pre>
            {`const { name, role, location } = profile;`}
          </pre>
        </div>

        <div className="demo-card">
          <span className="demo-label">ARRAY DESTRUCTURING</span>
          <h3>Technologies</h3>

          <div className="technology-list">
            <p>1. {firstTechnology}</p>
            <p>2. {secondTechnology}</p>
            <p>3. {thirdTechnology}</p>
          </div>

          <pre>
            {`const [first, second, third] = technologies;`}
          </pre>
        </div>

        <div className="demo-card">
          <span className="demo-label">STATE DESTRUCTURING</span>
          <h3>Counter: {count}</h3>

          <div className="counter-buttons">
            <button onClick={() => setCount(count - 1)}>−</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          <pre>
            {`const [count, setCount] = useState(0);`}
          </pre>
        </div>

        <div className="demo-card">
          <span className="demo-label">FUNCTION PARAMETER DESTRUCTURING</span>
          <h3>Employee Message</h3>

          <p>{displayEmployee(profile)}</p>

          <pre>
            {`function displayEmployee({ name, role }) { ... }`}
          </pre>
        </div>

        <div className="demo-card full-width">
          <span className="demo-label">PROPS DESTRUCTURING</span>
          <h3>Reusable Profile Component</h3>

          <ProfileCard profile={profile} />

          <pre>
            {`function ProfileCard({ profile }) {
  const { name, role, location, skills } = profile;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Destructuring;