import { useSelector } from "react-redux";

import TaskItem from "./TaskItem";

function TaskList({ onEdit }) {

    const tasks = useSelector(
        state => state.tasks.tasks
    );

    return (

        <div className="task-list">

            <h2>My Tasks ({tasks.length})</h2>

            {tasks.length === 0 ? (

                <p>No tasks available. Add your first task!</p>

            ) : (

                tasks.map(task => (

                    <TaskItem
                        key={task.id}
                        task={task}
                        onEdit={onEdit}
                    />

                ))

            )}

        </div>

    );

}

export default TaskList;