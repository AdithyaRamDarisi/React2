import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
} from "../../services/employeeService";


// FETCH EMPLOYEES

export const fetchEmployees = createAsyncThunk(

    "employees/fetchEmployees",

    async (_, { rejectWithValue }) => {

        try {

            return await getEmployees();

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || error.message
            );

        }

    }

);


// ADD EMPLOYEE

export const createEmployee = createAsyncThunk(

    "employees/createEmployee",

    async (employee, { rejectWithValue }) => {

        try {

            return await addEmployee(employee);

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || error.message
            );

        }

    }

);


// UPDATE EMPLOYEE

export const editEmployee = createAsyncThunk(

    "employees/editEmployee",

    async ({ id, employee }, { rejectWithValue }) => {

        try {

            return await updateEmployee(id, employee);

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || error.message
            );

        }

    }

);


// DELETE EMPLOYEE

export const removeEmployee = createAsyncThunk(

    "employees/removeEmployee",

    async (id, { rejectWithValue }) => {

        try {

            return await deleteEmployee(id);

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || error.message
            );

        }

    }

);


// INITIAL STATE

const initialState = {

    employees: [],

    loading: false,

    error: null,

    success: null

};


// CREATE SLICE

const employeeSlice = createSlice({

    name: "employees",

    initialState,

    reducers: {

        clearMessages: (state) => {

            state.error = null;

            state.success = null;

        }

    },

    extraReducers: (builder) => {

        builder

            // FETCH PENDING

            .addCase(fetchEmployees.pending, (state) => {

                state.loading = true;

                state.error = null;

            })

            // FETCH SUCCESS

            .addCase(fetchEmployees.fulfilled, (state, action) => {

                state.loading = false;

                state.employees = action.payload;

            })

            // FETCH ERROR

            .addCase(fetchEmployees.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            })


            // ADD PENDING

            .addCase(createEmployee.pending, (state) => {

                state.loading = true;

                state.error = null;

                state.success = null;

            })

            // ADD SUCCESS

            .addCase(createEmployee.fulfilled, (state, action) => {

                state.loading = false;

                state.employees.push(action.payload);

                state.success = "Employee added successfully";

            })

            // ADD ERROR

            .addCase(createEmployee.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            })


            // UPDATE PENDING

            .addCase(editEmployee.pending, (state) => {

                state.loading = true;

                state.error = null;

                state.success = null;

            })

            // UPDATE SUCCESS

            .addCase(editEmployee.fulfilled, (state, action) => {

                state.loading = false;

                const index = state.employees.findIndex(

                    (employee) => employee.id === action.payload.id

                );

                if (index !== -1) {

                    state.employees[index] = action.payload;

                }

                state.success = "Employee updated successfully";

            })

            // UPDATE ERROR

            .addCase(editEmployee.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            })


            // DELETE PENDING

            .addCase(removeEmployee.pending, (state) => {

                state.loading = true;

                state.error = null;

                state.success = null;

            })

            // DELETE SUCCESS

            .addCase(removeEmployee.fulfilled, (state, action) => {

                state.loading = false;

                state.employees = state.employees.filter(

                    (employee) => employee.id !== action.payload

                );

                state.success = "Employee deleted successfully";

            })

            // DELETE ERROR

            .addCase(removeEmployee.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            });

    }

});

export const { clearMessages } = employeeSlice.actions;

export default employeeSlice.reducer;