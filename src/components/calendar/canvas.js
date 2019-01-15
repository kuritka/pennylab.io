import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import moment from 'moment'
import CanvasItem from './canvasItem'

const format = "HH:mm";

const defaultEvent = (time) =>{
    return {From: time.format("LT"),To: time.add(30,'minutes').format("LT"), Note: "", Subject:"", Week:"" };
}



const getEvent = (time, schedule) => {
    if(!schedule.Events) return defaultEvent(time);
    const events =  schedule.Events.filter(x => moment(time, format).isBetween(moment(x.From,format).subtract(1,'minutes'),moment( x.To,format)));
    return events && events[0] != null ? events[0] : defaultEvent(time);
}

const Canvas = (props) => {
    const startTime = "07:00";
    return(
        <div className="canvas">
                {[...Array(28)].map((x, i) =>
                        <CanvasItem key={'item'+i} 
                                    onClick={props.onClick}
                                    event={getEvent(moment(startTime,format).add(i*30, 'minute'), props.schedule)} />
                    )}
        </div>
    );
}


Canvas.propTypes = {
    schedule: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default Canvas;