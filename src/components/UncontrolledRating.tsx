import React, {useState} from 'react';
import Star from "./Star";

export type ValueUncontrolledRating = 0 | 1 | 2 | 3 | 4 | 5


const UncontrolledRating = () => {
    const [value, setValue] = useState<ValueUncontrolledRating>(0)
    const [selected, setSelected] = useState(false)
            return (
                <div>
                    <Star1 selected={value >= 1}/> <button onClick={()=> setValue(1)}>1</button>
                    <Star1 selected={value >= 2}/> <button onClick={()=> setValue(2)}>2</button>
                    <Star1 selected={value >= 3}/> <button onClick={()=> setValue(3)}>3</button>
                    <Star1 selected={value >= 4}/> <button onClick={()=> setValue(4)}>4</button>
                    <Star1 selected={value >= 5}/> <button onClick={()=> setValue(5)}>5</button>
                </div>
            );

};

type Star1Props = {
    selected: boolean
}

const Star1 = (props: Star1Props) => {
    return (
        <span>{props.selected ? <b> star </b> : ' star ' }</span>
    );
};

export default UncontrolledRating;