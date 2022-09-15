import React from 'react';

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitleProps) => {
    return (
        <div>
            <h1 onClick={()=>props.onClick()}>{props.title}</h1>
        </div>
    );
};

export default AccordionTitle;