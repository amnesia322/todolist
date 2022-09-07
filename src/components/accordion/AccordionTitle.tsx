import React from 'react';

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = (props: AccordionTitleProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default AccordionTitle;