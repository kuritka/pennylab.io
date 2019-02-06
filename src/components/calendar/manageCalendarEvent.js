import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import * as  calendarActions from './calendarActions'
import CalendarEvent from './calendarEvent';

class ManageCalendarEvent extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return(
            <div>
                <h1>Event planning</h1>
                 <CalendarEvent />
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return {
        calendar: state.calendarReducerSate
    }
}

function mapDispatchToProps(dispatch){
    return {
       actions: bindActionCreators(calendarActions,dispatch)
    }
}

ManageCalendarEvent.propTypes = {
    //  courses: PropTypes.array.isRequired,
      //course: PropTypes.array.isRequired,
      calendar: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
  }
  
  
export default connect(mapStateToProps,mapDispatchToProps)(ManageCalendarEvent) ;