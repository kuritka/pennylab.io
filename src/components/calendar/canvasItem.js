import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import moment from 'moment'

const CanvasItem = (event, onClick) => {
    console.log(event);
    return(
        <div className="canvasItem">
            <time>{event.event.From}</time>
            <div className="message">{event.event.Subject}</div>
            <div className="name">{event.event.Note}</div>
        </div>
    )
}


CanvasItem.propTypes = {
    event: PropTypes.object.isRequired,
   // onClick: PropTypes.func.isRequired,
}
export default CanvasItem;