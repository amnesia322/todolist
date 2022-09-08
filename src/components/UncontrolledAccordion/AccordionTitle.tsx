import React from 'react';

type AccordionTitleProps = {
    title: string
    changeCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitleProps) => {
    return (
        <div>
            <h1 onClick={props.changeCollapsed}>{props.title}</h1>
        </div>
    );
};

export default AccordionTitle;