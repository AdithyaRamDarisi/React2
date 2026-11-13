import { useState } from "react";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { useAppContext } from "./context/AppContext";

function App() {

    const [editingTask, setEditingTask] = useState(null);

    const { theme } = useAppContext();

    return (

        <div className={`app ${theme}`}>

            <Navbar />

            <main className="container">

                <h1>Task Management Dashboard</h1>

                <TaskForm
                    editingTask={editingTask}
                    setEditingTask={setEditingTask}
                />

                <TaskList
                    onEdit={setEditingTask}
                />

            </main>

        </div>

    );

}

export default App;