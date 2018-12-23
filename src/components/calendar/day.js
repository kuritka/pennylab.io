import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'

const DayButton = ({day}) => {
    return(
        <div className="day">Sun</div>
    );
}

DayButton.propTypes = {
    day: PropTypes.object.isRequired
}


export default DayButton;