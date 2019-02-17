import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import moment from 'moment'
import * as  calendarActions from './calendarActions'
import * as constants from './constants'
import DaySelector from './daySelector';
import Canvas from './canvas'
import CalendarEventForm from './calendarEvent'




class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context); 
        this.state = {
            calendar:  Object.assign({}, this.props.calendar),
            schedule:  {Events:[]},
            showEvent: false,
            selectedEvent: {},
            selectedDay: "",                     
        }      
        this.dayClicked = this.dayClicked.bind(this);
        this.computeSchedule = this.computeSchedule.bind(this);
        this.mapToScheduleEvents = this.mapToScheduleEvents.bind(this);
        this.eventClicked = this.eventClicked.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
    }

    computeSchedule(schedule){
        const noIndex = -1;
        var slices = (moment(moment(constants.endTime,constants.format).diff(moment(constants.startTime,constants.format))).format("HH")-1)*(60/constants.interval)
        var arr =[]
        var realIndex = 0;
        for(var i =0; i < slices; i++){
            var momentStart = moment(constants.startTime,constants.format);
            var timeFrom = moment(momentStart.add(i*constants.interval, 'minute')).format(constants.format); 
            var timeTo = moment(momentStart.add(constants.interval, 'minute')).format(constants.format); 
            var e = this.mapToScheduleEvents(schedule, timeFrom);
            if(e != null){ 
                if(arr.length > 0 && JSON.stringify(arr[arr.length -1].Event) !== JSON.stringify(e)){
                    var interval = moment.duration(moment(e.To,constants.format).diff(moment(e.From,constants.format))).asMinutes() / constants.interval;
                    arr.push({Time: timeFrom, Event: e, Interval:interval, SelectedDay: schedule.SelectedDay, Index: realIndex++})
                }
                continue
            } 
            arr.push({Time: timeFrom, Event: constants.GetDefaultEvent(timeFrom, timeTo), Interval: 1, SelectedDay: schedule.SelectedDay, Index: noIndex})
        }
        //fix prolinate time ranges
        for(var current=0 ; current<arr.length; current++ ){
            var following = current+1;
            if(following <  arr.length-1){
                if(arr[current].Index === noIndex){
                    arr[current].Event.To =  arr[following].Event.From         
                }
                //TODO: following hour
                // if(arr[following].Index === noIndex){
                //     arr[following].Event.From =  arr[current].Event.To
                // }
            }
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
        schedule.SelectedDay = name;
        this.setState({schedule: schedule, selectedDay: name})
    }


    eventClicked(event) {
        if(event.SelectedDay){
            this.setState({showEvent: true,selectedEvent: event });
        }
    }

    saveEvent(event){
        event.preventDefault();
        this.setState({showEvent: false});
    }

    changeEvent(event) { 
        const selectedEvent = this.state.selectedEvent;
        const field = event.target.name;
        let c = this.props.calendar;
        if(selectedEvent.Index === -1) {
            selectedEvent.Index = c.schedule[selectedEvent.SelectedDay].Events.length;
            c.schedule[selectedEvent.SelectedDay].Events.push(selectedEvent.Event);
        }

        if(selectedEvent.Index > -1){
            console.log(selectedEvent);
            selectedEvent.Event[field] = event.target.value;
            c.schedule[selectedEvent.SelectedDay].Events[selectedEvent.Index][field] = event.target.value;
        }
                
        return this.setState({calendar: c, selectedEvent: selectedEvent});
    }


    render() {
        return (
            <div>
                <div>{this.props.calendar.name}</div>
                 { this.state.showEvent ?
                    <CalendarEventForm onChange={this.changeEvent} onSave={this.saveEvent} allWeekTypes={this.props.weekTypes} event={this.state.selectedEvent}/> : 
                    <div>
                        <DaySelector onClick={this.dayClicked} /> 
                        <Canvas schedule={this.computeSchedule(this.state.schedule)} 
                        onClick={this.eventClicked} />
                    </div>
                }
           </div>
        );
    }
}



//state is state within redux store. Injects few values to local state  and render method will render it... 
function mapStateToProps(state, ownProps){

    const weekTypesDropDown = state.weekTypesReducerState.map(weekType => 
        {
           return {
              value: weekType.id,
              text: weekType.id
           }
        });
    return {
        weekTypes: weekTypesDropDown,
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
    actions: PropTypes.object.isRequired,
   // onClick: PropTypes.func.isRequired,
}


//wrapping CoursePage into react-redux
//with router is here because Calendar is sub component of calendar page and 
//props.history is not injected to sub components form their parent. It is done by router component
//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Calendar));
export default connect(mapStateToProps,mapDispatchToProps)(Calendar);

