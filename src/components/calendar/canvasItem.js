import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import moment from 'moment'
import * as constants from './constants'


const click = (callback, data) =>{
    callback(data) ;
} 



const CanvasItem = (props) => { 
    return(
        <div 
            onClick={() => {click(props.onClick,props.data)}}
            name={props.data.Event.From}
            className={props != null && props.data.Event.Subject ? "selected canvasItem" : "unmarked canvasItem" }
            style={constants.IsDefaultEvent(props.data.Event) ?  {height: props.data.Interval *30} :{}}  >
                <time>{moment(props.data.Event.From,"HH:mm").format("HH:mm")} - {moment(props.data.Event.To,"HH:mm").format("HH:mm")}</time>
                <div className="message">{props.data.Event.Subject}</div>
                <div className="name">{props.data.Event.Note}</div>
        </div>
    )
}

  
CanvasItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default CanvasItem;