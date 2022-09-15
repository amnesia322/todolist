import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating";
import OnOff from "./components/accordion/OnOff/OnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

  return (
    <div className="App">
      {/*<UncontrolledAccordion title='---Menu---' collapsed={true}/>*/}
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Accordion title='Menu' collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        <OnOff on={on} onClick={setOn}/>

       {/* <OnOff/>*/}
        {/*<UncontrolledAccordion title='---Menu---'/>
        <UncontrolledRating />*/}
    </div>
  );
}

export default App;
