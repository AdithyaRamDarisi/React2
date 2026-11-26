function FilterBar({
  search,
  setSearch,
  department,
  setDepartment,
  departments
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
      >
        <option value="All">All Departments</option>

        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;