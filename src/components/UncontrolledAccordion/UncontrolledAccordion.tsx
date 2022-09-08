import React, {useState} from 'react';
import OnOff from "./OnOff/OnOff";
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    title: string
    //collapsed: boolean
}

const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title}/> <button onClick={ ()=> setCollapsed(!collapsed)}>TOGGLE</button>
            {!collapsed &&  <AccordionBody/>}
        </div>
    );
};

export default UncontrolledAccordion;