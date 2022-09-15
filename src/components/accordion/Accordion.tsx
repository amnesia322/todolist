import React from 'react';
import OnOff from "./OnOff/OnOff";
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>props.onClick(!props.collapsed)} />
            {!props.collapsed &&  <AccordionBody/>}
        </div>
    );
};

export default Accordion;