import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import moment from 'moment'

const click = (callback, data) =>{
    callback(data) ;
} 

const CanvasItem = (props) => { 
    return(
        <div 
        onClick={() => {click(props.onClick,props.event)}}
        name={props.event.From}
        className={props != null && props.event.From && props.event.Subject ? "selected canvasItem" : "unmarked canvasItem" }>
            <time>{moment(props.event.From,"HH:mm").format("LT")}</time>
            <div className="message">{props.event.Subject}</div>
            <div className="name">{props.event.Note}</div>
        </div>
    )
}

  
CanvasItem.propTypes = {
    event: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default CanvasItem;