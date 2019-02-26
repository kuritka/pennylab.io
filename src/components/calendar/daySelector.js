import React from 'react';
import DayButton from './dayButton'
import {PropTypes} from 'prop-types'
import './calendar.css';

const DaySelector = ({onClick, day}) => {
    return (
        <div>
            <div className="week">
                <DayButton name="Sun" onClick={onClick} day={day}></DayButton>
                <DayButton name="Mon" onClick={onClick} day={day}></DayButton>
                <DayButton name="Tue" onClick={onClick} day={day}></DayButton>
                <DayButton name="Wed" onClick={onClick} day={day}></DayButton>
                <DayButton name="Thr" onClick={onClick} day={day}></DayButton>
                <DayButton name="Fri" onClick={onClick} day={day}></DayButton>
                <DayButton name="Sat" onClick={onClick} day={day}></DayButton>
            </div>       
        </div>
    );
}

DaySelector.propTypes = {
    onClick: PropTypes.func.isRequired,
    day: PropTypes.string.isRequired,
}


export default DaySelector