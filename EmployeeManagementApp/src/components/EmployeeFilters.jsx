function EmployeeFilters({

    search,

    setSearch,

    department,

    setDepartment,

    status,

    setStatus

}) {

    return (

        <div className="filters">

            <input

                type="search"

                placeholder="Search by name or email..."

                value={search}

                onChange={(event) => setSearch(event.target.value)}

            />


            <select

                value={department}

                onChange={(event) => setDepartment(event.target.value)}

            >

                <option value="All">All Departments</option>

                <option value="Development">Development</option>

                <option value="Testing">Testing</option>

                <option value="HR">HR</option>

                <option value="Marketing">Marketing</option>

                <option value="Finance">Finance</option>

            </select>


            <select

                value={status}

                onChange={(event) => setStatus(event.target.value)}

            >

                <option value="All">All Status</option>

                <option value="Active">Active</option>

                <option value="Inactive">Inactive</option>

            </select>

        </div>

    );

}

export default EmployeeFilters;