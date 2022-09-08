import React, {useState} from 'react';
import '../../../App.css'


const OnOff = () => {
    const [on, setOn] = useState<boolean>(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        padding: '3px'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        marginLeft: '5px',
        padding: '3px'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
        marginLeft: '5px'
    }


    return (
        <div>
           <div style={onStyle} onClick={()=> setOn(true)}>On</div>
           <div style={offStyle} onClick={()=> setOn(false)}>Off</div>
           <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;