import React from 'react';
import '../../../App.css'

type OnOffProps = {
    value: boolean
}

const OnOff = (props: OnOffProps) => {
    const stylesCircle = {
        width: "15px",
        height: "15px",
        background: props.value ? 'green' : 'red',
        borderRadius: "50%",
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (
        <div>
            <span style={props.value ? {backgroundColor: "green"} : {backgroundColor: ''}}> On </span>
            <span style={!props.value ? {backgroundColor: "red"} : {backgroundColor: ''}}> Off </span>
            <div style={stylesCircle}></div>
        </div>
    );
};

export default OnOff;