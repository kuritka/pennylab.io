import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'

const DayButton = ({name, onClick}) => {
    return(
        <div>
            <input type="button" className="day" name={name} onClick={onClick} value={name}/>
        </div>
    );
}

DayButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default DayButton;