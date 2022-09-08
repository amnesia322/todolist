import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import Rating from "./components/Rating";
import OnOff from "./components/accordion/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  return (
    <div className="App">
     {/* <UncontrolledAccordion title='---Menu---' collapsed={true}/>
        <Rating value={2}/>*/}
       {/* <OnOff/>*/}
        <UncontrolledAccordion title='---Menu---'/>
    </div>
  );
}

export default App;
