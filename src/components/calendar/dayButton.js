import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'

const DayButton = ({name, onClick}) => {
    return(
        <div>
            <input type="radio" className="day" name="day" id={name + "_id"}  onChange={onClick} value={name}  />
            <label htmlFor={name + "_id"}>{name}</label>
        </div>
    );
}

DayButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default DayButton;