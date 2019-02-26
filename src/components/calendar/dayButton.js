import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'

const DayButton = ({name, onClick, day}) => {
    let isChecked = day===name ? "checked" : "";
    return(
        <div>
            <input type="radio" className="day" name="day" id={name + "_id"}  onChange={onClick} value={name} checked={isChecked} />
            <label htmlFor={name + "_id"}>{name}</label>
        </div>
    );
}

DayButton.propTypes = {
    name: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default DayButton;