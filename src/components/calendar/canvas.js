import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import CanvasItem from './canvasItem'


const Canvas = (props) => {    
    //props.schedule.Events;
    return(
        <div className="canvas">
            {props.schedule.map((e,i) => 
                <CanvasItem key={'item'+i} 
                    onClick={props.onClick}
                    data={e} />    
                )}
        </div>
    );
}


Canvas.propTypes = {
    schedule: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}
export default Canvas;