import { useState, useEffect } from "react";

function EmployeeForm({ onSave, editingEmployee, onCancel }) {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        department: "Development",

        position: "",

        status: "Active"

    });


    useEffect(() => {

        if (editingEmployee) {

            setFormData(editingEmployee);

        } else {

            setFormData({

                name: "",

                email: "",

                department: "Development",

                position: "",

                status: "Active"

            });

        }

    }, [editingEmployee]);


    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({

            ...formData,

            [name]: value

        });

    }


    function handleSubmit(event) {

        event.preventDefault();

        onSave(formData);

    }


    return (

        <form className="employee-form" onSubmit={handleSubmit}>

            <h2>

                {editingEmployee ? "Update Employee" : "Add Employee"}

            </h2>


            <input

                type="text"

                name="name"

                placeholder="Employee Name"

                value={formData.name}

                onChange={handleChange}

                required

            />


            <input

                type="email"

                name="email"

                placeholder="Employee Email"

                value={formData.email}

                onChange={handleChange}

                required

            />


            <select

                name="department"

                value={formData.department}

                onChange={handleChange}

            >

                <option value="Development">Development</option>

                <option value="Testing">Testing</option>

                <option value="HR">HR</option>

                <option value="Marketing">Marketing</option>

                <option value="Finance">Finance</option>

            </select>


            <input

                type="text"

                name="position"

                placeholder="Employee Position"

                value={formData.position}

                onChange={handleChange}

                required

            />


            <select

                name="status"

                value={formData.status}

                onChange={handleChange}

            >

                <option value="Active">Active</option>

                <option value="Inactive">Inactive</option>

            </select>


            <div className="form-buttons">

                <button type="submit">

                    {editingEmployee ? "Update Employee" : "Add Employee"}

                </button>


                <button type="button" onClick={onCancel}>

                    Cancel

                </button>

            </div>

        </form>

    );

}

export default EmployeeForm;