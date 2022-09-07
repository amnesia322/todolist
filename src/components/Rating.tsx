import React from 'react';
import Star from "./Star";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

const Rating = (props: RatingProps) => {
            return (
                <div>
                    <Star selected={props.value >= 1}/>
                    <Star selected={props.value >= 2}/>
                    <Star selected={props.value >= 3}/>
                    <Star selected={props.value >= 4}/>
                    <Star selected={props.value >= 5}/>
                </div>
            );

};

export default Rating;