import React from 'react';

export default function CharacteristicValue(props) {
    return (
        <div className={`fighter-characteristic text-value text-center ${props.characteristic.modifier > 0 ? "text-positive" : props.characteristic.modifier < 0 ? "text-negative" : ""} ${props.is2d6 ? "text-2d6" : ""}`}>
            {props.characteristic.base + (props.characteristic.modifier * props.direction)}{props.unit}
        </div>
    );
}