import React from 'react';
import DaySelector from './daySelector';
import {PropTypes} from 'prop-types'
import moment from 'moment'

export default class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context); 
        this.state = {
            calendar:  Object.assign({}, this.props.calendar),
            schedule:  Object.assign({}, this.props.calendar.schedule)
        }      
        this.isInRange = this.isInRange.bind(this);
        this.dayClicked = this.dayClicked.bind(this);
    }

    isInRange(time){
        const format = "HH:mm";
        if(!this.state.schedule.Events) return false;
        const events =  this.state.schedule.Events.filter(x => moment(time, format).isBetween(moment(x.From,format).subtract(1,'minutes'),moment( x.To,format)));
        return events && events[0] != null;
    }

    dayClicked(event) {
        event.preventDefault();
        let name = event.target.name;
        let schedule = this.props.calendar.schedule[name];
        this.setState({schedule: schedule})
    }

    render() {
        const format = "HH:mm";
        const startTime = "07:00";
        return (
            <div>
                <div>{this.props.calendar.name}</div>
                 <DaySelector onClick={this.dayClicked} /> 
                 <div className="canvas">
                    {[...Array(28)].map((x, i) => 
                        <div key={'item'+i} className={  this.isInRange(moment(startTime,format).add(i*30, 'minute'))   ?  "canvasItem selected" : "canvasItem unmarked" } >
                                <time>{ moment(startTime,format).add(i*30, 'minute').format('LT') }</time>
                                <div className="message"> blah blah blah</div>
                                <div className="name">J. Franklin</div>
                        </div>
                    )}
               </div>  
            </div>
        );
    }
}

Calendar.propTypes = {
    calendar: PropTypes.object.isRequired,
 //   actions: PropTypes.object.isRequired
}