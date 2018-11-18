import React  from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CalendarPage from '../calendar/calendarPage'
import CoursesPage  from '../course/coursesPage'
import HomePage from '../home/homePage'

const Header = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                       <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/calendar" >Caledar</Link>
                    </li>
                    <li>
                        <Link to="courses" >Courses</Link>
                    </li>
                    <li>
                        <Link to="about" >About</Link>
                    </li>
                </ul>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/courses" component={CoursesPage} />
            </div>
           
        </Router>
    );
};


function About() {
    return (
        <div>
        <h2>About</h2>
        </div>
    );
}

export default Header;