import React from "react";
import { Button } from "./components/base/Button/Button";
import { Pagination } from "./components/base/Button/Pagination";

function App() {
  const results = [];
  for (let i = 1; i <= 115; i++) {
    const result = {
      id: i,
      value: `value${i}`,
    }

    results.push(result);
  }

  return (
    <div className="App">
      <Button label="Submit" size="md" />
      <Pagination results={results} resultNumber="10" pageNumber="5"></Pagination>
    </div>
  );
}

export default App;
