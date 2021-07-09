import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [pepole, setpepole] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{pepole.length} birthdays today</h3>
        <List pepole={pepole} />
        <button onClick={() => setpepole([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
