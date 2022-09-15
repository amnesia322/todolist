import React, {useState} from 'react';
import Star from "./Star";

export type ValueUncontrolledRating = 0 | 1 | 2 | 3 | 4 | 5


const UncontrolledRating = () => {
    const [value, setValue] = useState<ValueUncontrolledRating>(0)

    const changeValue = (starID: ValueUncontrolledRating) => {
        setValue(starID)
    }

            return (
                <div>
                    <Star1 selected={value >= 1} value={1} changeValue={changeValue}/>
                    <Star1 selected={value >= 2} value={2} changeValue={changeValue}/>
                    <Star1 selected={value >= 3} value={3} changeValue={changeValue}/>
                    <Star1 selected={value >= 4} value={4} changeValue={changeValue}/>
                    <Star1 selected={value >= 5} value={5} changeValue={changeValue}/>
                </div>
            );

};

type Star1Props = {
    selected: boolean
    value: ValueUncontrolledRating
    changeValue: (starID: ValueUncontrolledRating) => void
}

const Star1 = (props: Star1Props) => {
    return (
        <span onClick={ () => props.changeValue(props.value)}>{props.selected ? <b> star </b> : ' star ' }</span>
    );
};

export default UncontrolledRating;