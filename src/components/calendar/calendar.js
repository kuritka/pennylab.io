import React from 'react';
import DaySelector from './daySelector';
import {PropTypes} from 'prop-types'
import Canvas from './canvas'
import * as constants from './constants'
import moment from 'moment'

export default class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context); 
        this.state = {
            calendar:  Object.assign({}, this.props.calendar),
            schedule:  {Events:[]}
        }      
        this.dayClicked = this.dayClicked.bind(this);
        this.canvasItemClicked = this.canvasItemClicked.bind(this);
        this.computeSchedule = this.computeSchedule.bind(this);
        this.mapToScheduleEvents = this.mapToScheduleEvents.bind(this)
    }

    computeSchedule(schedule){
        var slices = (moment(moment(constants.endTime,constants.format).diff(moment(constants.startTime,constants.format))).format("HH")-1)*(60/constants.interval)
        var arr =[]
        for(var i =0; i < slices; i++){
            var momentStart = moment(constants.startTime,constants.format);
            var timeFrom = moment(momentStart.add(i*constants.interval, 'minute')).format(constants.format); 
            var timeTo = moment(momentStart.add(constants.interval, 'minute')).format(constants.format); 
            var e = this.mapToScheduleEvents(schedule, timeFrom);
            if(e != null){ 
                if(arr.length > 0 && JSON.stringify(arr[arr.length -1].Event) !== JSON.stringify(e)){
                    var interval = moment.duration(moment(e.To,constants.format).diff(moment(e.From,constants.format))).asMinutes() / constants.interval;
                    arr.push({Time: timeFrom, Event: e, Interval:interval})
                }
                continue
            } 
            arr.push({Time: timeFrom, Event: constants.GetDefaultEvent(timeFrom, timeTo), Interval: 1})
        }
        return arr;
    }

    mapToScheduleEvents(schedule, time) {
        var events = schedule.Events.filter(e => moment(time, constants.format)
            .isBetween(moment(e.From, constants.format).subtract(1, 'minutes'), moment(e.To, constants.format)));
        return events && events[0] != null ? events[0] : null;
    }

    dayClicked(event) {
      // event.preventDefault();
        let name = event.target.value;
        let schedule = this.props.calendar.schedule[name];
        this.setState({schedule: schedule})
    }


    canvasItemClicked(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <div>{this.props.calendar.name}</div>
                <DaySelector onClick={this.dayClicked} /> 
                <Canvas schedule={this.computeSchedule(this.state.schedule)} 
                    onClick={this.canvasItemClicked}/>
            </div>
        );
    }
}

Calendar.propTypes = {
    calendar: PropTypes.object.isRequired,
}