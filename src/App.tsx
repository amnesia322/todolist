import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Accordion title='---Menu---' collapsed={true}/>

        <Rating value={2}/>
    </div>
  );
}

export default App;
