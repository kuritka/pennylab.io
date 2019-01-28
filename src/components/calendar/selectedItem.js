import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import * as constants from './constants'
import moment from 'moment'

const countVertialPosition = (event) =>{
    return (moment(moment(event.From,"HH:mm").diff(moment(constants.startTime,"HH:mm"))).format("HH")-1)*60
}

const SelectedItem = (props) => {
    return (
        <div
            name={'selected_'+props.event.From}
            style={{marginTop:  countVertialPosition(props.event)+'px'}}
            className="selectedItem">
            {props.event.Subject}
        </div>
    )
}

SelectedItem.propTypes = {
    event: PropTypes.object.isRequired,
}

export default SelectedItem;