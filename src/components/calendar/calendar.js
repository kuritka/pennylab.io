import React from 'react';
import Days from './days';
import {PropTypes} from 'prop-types'
import * as calendarActions from './calendarActions'

export default class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context); 
        this.state = {
            calendar:  Object.assign({}, this.props.calendar)
        }      
    }

    render() {
        return (
            <div>
                <div>{this.props.calendar.id}</div>
                 <Days />   

            </div>
        );
    }
}

Calendar.propTypes = {
    calendar: PropTypes.object.isRequired,
 //   actions: PropTypes.object.isRequired
}