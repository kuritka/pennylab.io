import React from 'react';
import DaySelector from './daySelector';
import {PropTypes} from 'prop-types'
import Canvas from './canvas'

export default class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context); 
        this.state = {
            calendar:  Object.assign({}, this.props.calendar),
            schedule:  {}
        }      
        this.dayClicked = this.dayClicked.bind(this);
        this.canvasItemClicked = this.canvasItemClicked.bind(this);
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
                 <Canvas schedule={this.state.schedule} onClick={this.canvasItemClicked}/>
            </div>
        );
    }
}

Calendar.propTypes = {
    calendar: PropTypes.object.isRequired,
 //   actions: PropTypes.object.isRequired
}