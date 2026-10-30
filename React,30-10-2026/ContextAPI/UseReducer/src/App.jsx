import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {

  return (
    <div>

      <h1>React Task Management Application</h1>

      <TaskForm />

      <hr />

      <TaskStats />

      <hr />

      <TaskList />

    </div>
  );
}

export default App;