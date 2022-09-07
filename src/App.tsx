import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion title='Menu' collapsed={false}/>
    </div>
  );
}

export default App;
