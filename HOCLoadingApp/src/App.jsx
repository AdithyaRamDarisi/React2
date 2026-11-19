import { useState, useEffect } from "react";
import Users from "./components/Users";
import withLoading from "./hocs/withLoading";
const UsersWithLoading = withLoading(Users);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>HOC Loading Example</h1>
      <UsersWithLoading isLoading={isLoading} />
    </div>
  );
}

export default App;