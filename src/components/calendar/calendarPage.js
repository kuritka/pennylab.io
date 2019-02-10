import React from 'react';
import {Link} from 'react-router-dom';
import Calendar from './calendar'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import * as  calendarActions from './calendarActions'

class CalendarPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onCalendarClick = this.redirectToEvent.bind(this);
    }

    redirectToEvent(event) {
       if(event.SelectedDay) { 
            this.props.history.push('/events');
            console.log(event);
       }
    }

    render() {
        const {calendar} = this.props;
        console.log(this.props)
        return (
            <div>
                <h1>Calendar</h1>
                <p>React Redux and React Router in ES6 for ultra responsive web apps</p>
                <Calendar calendar={calendar} onClick={this.redirectToEvent} />
                <Link to="/">Home</Link>            
            </div>
        );
    }
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

CalendarPage.propTypes = {
    calendar: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}


//wrapping CoursePage into react-redux
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPage);