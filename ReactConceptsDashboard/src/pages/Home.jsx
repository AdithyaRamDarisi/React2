import { Link } from "react-router-dom";

function Home() {
  const modules = [
    {
      id: 1,
      title: "List Rendering",
      description: "Render dynamic data using map, keys and nested lists.",
      path: "/students",
      icon: "01"
    },
    {
      id: 2,
      title: "Destructuring",
      description: "Practice objects, arrays, props, state and parameters.",
      path: "/destructuring",
      icon: "02"
    },
    {
      id: 3,
      title: "Lazy Loading",
      description: "Explore React.lazy, Suspense and dynamic imports.",
      path: "/lazy-loading",
      icon: "03"
    },
    {
      id: 4,
      title: "Performance Lab",
      description: "Understand code splitting and loading performance.",
      path: "/performance",
      icon: "04"
    }
  ];

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-badge">REACT LEARNING ENVIRONMENT</div>

        <h1>
          Learn React.
          <br />
          <span>Build it practically.</span>
        </h1>

        <p>
          Explore list rendering, destructuring, and lazy loading
          through interactive examples.
        </p>

        <Link to="/students" className="primary-button">
          Explore Modules →
        </Link>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Learning Modules</span>
          <h2>04</h2>
        </div>

        <div className="stat-card">
          <span>React Concepts</span>
          <h2>10+</h2>
        </div>

        <div className="stat-card">
          <span>Students</span>
          <h2>06</h2>
        </div>

        <div className="stat-card">
          <span>Departments</span>
          <h2>03</h2>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LEARNING PATH</span>
            <h2>Explore Concepts</h2>
          </div>
        </div>

        <div className="module-grid">
          {modules.map(({ id, title, description, path, icon }) => (
            <Link to={path} className="module-card" key={id}>
              <span className="module-number">{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="module-arrow">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;