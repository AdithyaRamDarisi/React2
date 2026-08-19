import React from "react";
import Delhi from "./ContextContainer/Delhi";
import { GiftProvider } from "./Context/ExampleContext";

const App = () => {
  return (
    <div>
      <h1>Sending Gift to Bangalore</h1>

      <GiftProvider>
        <Delhi />
      </GiftProvider>
    </div>
  );
};

export default App;