import { useEffect, useState, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import {

    fetchEmployees,

    createEmployee,

    editEmployee,

    removeEmployee,

    clearMessages

} from "./features/employees/employeeSlice";


import Header from "./components/Header";

import EmployeeForm from "./components/EmployeeForm";

import EmployeeTable from "./components/EmployeeTable";

import EmployeeFilters from "./components/EmployeeFilters";


function App() {

    const dispatch = useDispatch();


    // Redux Global State

    const { employees, loading, error, success } = useSelector(

        (state) => state.employees

    );


    // Local Component State

    const [showForm, setShowForm] = useState(false);

    const [editingEmployee, setEditingEmployee] = useState(null);

    const [search, setSearch] = useState("");

    const [department, setDepartment] = useState("All");

    const [status, setStatus] = useState("All");


    // Fetch Employees

    useEffect(() => {

        dispatch(fetchEmployees());

    }, [dispatch]);


    // Add and Update Employee

    async function handleSave(employeeData) {

        try {

            if (editingEmployee) {

                await dispatch(

                    editEmployee({

                        id: editingEmployee.id,

                        employee: employeeData

                    })

                ).unwrap();

            } else {

                await dispatch(

                    createEmployee(employeeData)

                ).unwrap();

            }


            setShowForm(false);

            setEditingEmployee(null);

        } catch (error) {

            console.error("Employee operation failed:", error);

        }

    }


    // Edit Employee

    function handleEdit(employee) {

        dispatch(clearMessages());

        setEditingEmployee(employee);

        setShowForm(true);

    }


    // Delete Employee

    async function handleDelete(id) {

        const confirmDelete = window.confirm(

            "Are you sure you want to delete this employee?"

        );


        if (confirmDelete) {

            try {

                await dispatch(removeEmployee(id)).unwrap();

            } catch (error) {

                console.error("Delete failed:", error);

            }

        }

    }


    // Search and Filter

    const filteredEmployees = useMemo(() => {

        return employees.filter((employee) => {

            const matchesSearch =

                employee.name.toLowerCase().includes(search.toLowerCase()) ||

                employee.email.toLowerCase().includes(search.toLowerCase());


            const matchesDepartment =

                department === "All" ||

                employee.department === department;


            const matchesStatus =

                status === "All" ||

                employee.status === status;


            return (

                matchesSearch &&

                matchesDepartment &&

                matchesStatus

            );

        });

    }, [employees, search, department, status]);


    return (

        <div className="app-container">

            <Header />


            <main className="main-content">


                <div className="top-section">

                    <div>

                        <h2>Employee Dashboard</h2>

                        <p>Manage your organization employees</p>

                    </div>


                    <button

                        className="add-btn"

                        onClick={() => {

                            dispatch(clearMessages());

                            setEditingEmployee(null);

                            setShowForm(!showForm);

                        }}

                    >

                        {showForm ? "Close Form" : "+ Add Employee"}

                    </button>

                </div>


                {/* Loading State */}

                {loading && (

                    <div className="loading">

                        Loading...

                    </div>

                )}


                {/* Error State */}

                {error && (

                    <div className="error-message">

                        {error}

                        <button onClick={() => dispatch(fetchEmployees())}>

                            Retry

                        </button>

                    </div>

                )}


                {/* Success State */}

                {success && (

                    <div className="success-message">

                        {success}

                    </div>

                )}


                {/* Employee Form */}

                {showForm && (

                    <EmployeeForm

                        onSave={handleSave}

                        editingEmployee={editingEmployee}

                        onCancel={() => {

                            setShowForm(false);

                            setEditingEmployee(null);

                        }}

                    />

                )}


                {/* Filters */}

                <EmployeeFilters

                    search={search}

                    setSearch={setSearch}

                    department={department}

                    setDepartment={setDepartment}

                    status={status}

                    setStatus={setStatus}

                />


                {/* Employee Count */}

                <div className="employee-count">

                    Showing {filteredEmployees.length} of {employees.length} Employees

                </div>


                {/* Employee Table */}

                {!loading && !error && (

                    <EmployeeTable

                        employees={filteredEmployees}

                        onEdit={handleEdit}

                        onDelete={handleDelete}

                    />

                )}


            </main>

        </div>

    );

}

export default App;