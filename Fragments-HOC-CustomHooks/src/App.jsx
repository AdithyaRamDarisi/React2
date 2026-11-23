import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import WindowInfo from "./components/WindowInfo";
import ThemeDemo from "./components/ThemeDemo";
import FormDemo from "./components/FormDemo";

import withAuth from "./hoc/withAuth";
import withLoading from "./hoc/withLoading";

const ProtectedDashboard = withAuth(Dashboard);
const UsersWithLoading = withLoading(UserList);

function App() {
  return (
    <>
      <Header />

      <ProtectedDashboard />

      <hr />

      <UsersWithLoading isLoading={false} />

      <hr />

      <WindowInfo />

      <hr />

      <ThemeDemo />

      <hr />

      <FormDemo />
    </>
  );
}

export default App;