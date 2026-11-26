import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Overview", path: "/" },
    { name: "Students", path: "/students" },
    { name: "Departments", path: "/departments" },
    { name: "Destructuring", path: "/destructuring" },
    { name: "Lazy Loading", path: "/lazy-loading" },
    { name: "Performance", path: "/performance" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="brand-icon">R</div>
        <span>ReactLab</span>
      </div>

      <div className="nav-links">
        {links.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;