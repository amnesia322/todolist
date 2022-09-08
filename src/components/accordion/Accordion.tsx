import React from 'react';
import OnOff from "./OnOff/OnOff";
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed &&  <AccordionBody/>}
        </div>
    );
};

export default Accordion;