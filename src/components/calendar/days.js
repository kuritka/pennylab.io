import React from 'react';

import './calendar.css';


export default class Days extends React.Component {
    render() {
        return (
            <div>
               days of week  
               <div className="week">
                    <div className="day">Sun</div>
                    <div className="day">Mon</div>
                    <div className="day">Tue</div>
                    <div className="day">Wed</div>
                    <div className="day">Thr</div>
                    <div className="day">Fri</div>
                    <div className="day">Sat</div>
               </div>       
            </div>
        );
    }
}