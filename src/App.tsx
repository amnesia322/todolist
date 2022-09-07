import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Accordion title='---Menu---' collapsed={false}/>

        <Rating value={3}/>
    </div>
  );
}

export default App;
