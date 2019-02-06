import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import moment from 'moment'
import * as  calendarActions from './calendarActions'
import * as constants from './constants'
import DaySelector from './daySelector';
import Canvas from './canvas'
import CalendarEvent from './calendarEvent'




class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context); 
        this.state = {
            calendar:  Object.assign({}, this.props.calendar),
            schedule:  {Events:[]},
            showEvent: false,
            selectedEvent: {}                     
        }      
        this.dayClicked = this.dayClicked.bind(this);
        this.canvasItemClicked = this.canvasItemClicked.bind(this);
        this.computeSchedule = this.computeSchedule.bind(this);
        this.mapToScheduleEvents = this.mapToScheduleEvents.bind(this);
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
        let name = event.target.value;
        let schedule = this.props.calendar.schedule[name];
        this.setState({schedule: schedule})
    }


    canvasItemClicked(event) {
        this.props.actions.loadCalendarEvent(event);
        this.setState({showEvent: true, selectedEvent: event});
    }

    render() {
        return (
            <div>
                <div>{this.props.calendar.name}</div>
                <DaySelector onClick={this.dayClicked} /> 
                <Canvas schedule={this.computeSchedule(this.state.schedule)} 
                    onClick={this.canvasItemClicked} />
                 { this.state.showEvent ? <CalendarEvent event={this.state.selectedEvent}/> : null }
           </div>
        );
    }
}

Calendar.propTypes = {
    calendar: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}



//state is state within redux store. Injects few values to local state  and render method will render it... 
function mapStateToProps(state, ownProps){
    return {
        calendar: state.calendarReducerSate
    }
}

function mapDispatchToProps(dispatch){
    return {
        //createCourse: (course) => dispatch(createCourse(course)) 
        actions: bindActionCreators(calendarActions,dispatch)
    }
}


Calendar.propTypes = {
    calendar: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}


//wrapping CoursePage into react-redux
//with router is here because Calendar is sub component of calendar page and 
//props.history is not injected to sub components form their parent. It is done by router component
//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Calendar));
export default connect(mapStateToProps,mapDispatchToProps)(Calendar);

