import React from 'react';
import DayButton from './dayButton'
import {PropTypes} from 'prop-types'
import './calendar.css';

const DaySelector = ({onClick}) => {
    return (
        <div>
            <div className="week">
                <DayButton name="Sun" onClick={onClick}></DayButton>
                <DayButton name="Mon" onClick={onClick}></DayButton>
                <DayButton name="Tue" onClick={onClick}></DayButton>
                <DayButton name="Wed" onClick={onClick}></DayButton>
                <DayButton name="Thr" onClick={onClick}></DayButton>
                <DayButton name="Fri" onClick={onClick}></DayButton>
                <DayButton name="Sat" onClick={onClick}></DayButton>
            </div>       
        </div>
    );
}

DaySelector.propTypes = {
    onClick: PropTypes.func.isRequired,
}


export default DaySelector