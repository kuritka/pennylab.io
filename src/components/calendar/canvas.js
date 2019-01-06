import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import moment from 'moment'
import CanvasItem from './canvasItem'

const format = "HH:mm";

const getDefaultEvent = (time) =>{
    return {From: time.format("LT"),To: time.add(30,'minutes').format("LT"), Note: "", Subject:"", Week:"" };
}

const getEvent = (time, schedule) => {
    if(!schedule.Events) return getDefaultEvent(time);
    const events =  schedule.Events.filter(x => moment(time, format).isBetween(moment(x.From,format).subtract(1,'minutes'),moment( x.To,format)));
    return events && events[0] != null ? events[0] : getDefaultEvent(time);
}

const Canvas = (schedule, onClick) => {
    const startTime = "07:00";
    return(
        <div className="canvas">
                {[...Array(28)].map((x, i) =>
                        <CanvasItem key={'item'+i} onClick={onClick} event={getEvent(moment(startTime,format).add(i*30, 'minute'), schedule)} />
                        // <div key={'item'+i} className={  this.isInRange(moment(startTime,format).add(i*30, 'minute'))   ?  "canvasItem selected" : "canvasItem unmarked" } >
                        // </div>
                    )}
        </div>
    );
}


Canvas.propTypes = {
    schedule: PropTypes.object.isRequired,
    //onClick: PropTypes.func./,
}
export default Canvas;