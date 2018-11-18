import React from 'react';
import {Link} from 'react-router-dom';
import Calendar from './calendar'

export default class CalendarPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Calendar</h1>
                <p>React Redux and React Router in ES6 for ultra responsive web apps</p>
                <Calendar />
                <Link to="/">Home</Link>            
            </div>
        );
    }
}