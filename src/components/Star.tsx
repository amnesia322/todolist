import React from 'react';

type StarProps = {
    selected: boolean
}

const Star = (props: StarProps) => {
    return (
        <span>{props.selected ? <b> star </b> : ' star ' }</span>
    );
};

export default Star;