import React from 'react';
import '../../../App.css'

type OnOffPropsType = {
    on: boolean
    onClick: (value: boolean)=>void
}

const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        padding: '3px'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        marginLeft: '5px',
        padding: '3px'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red',
        marginLeft: '5px'
    }


    return (
        <div>
           <div style={onStyle} onClick={()=> props.onClick(true)}>On</div>
           <div style={offStyle} onClick={()=> props.onClick(false)}>Off</div>
           <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;