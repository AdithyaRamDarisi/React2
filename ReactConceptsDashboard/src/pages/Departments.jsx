import { departments } from "../data/students";
import DepartmentList from "../components/DepartmentList";

function Departments() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="eyebrow">MODULE 02</span>
        <h1>Department Explorer</h1>
        <p>
          Explore nested list rendering using departments and their team members.
        </p>
      </div>

      <DepartmentList departments={departments} />
    </div>
  );
}

export default Departments;