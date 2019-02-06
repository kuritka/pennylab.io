import React  from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CalendarPage from '../calendar/calendarPage'
import CoursesPage  from '../course/coursesPage'
import HomePage from '../home/homePage'
import ManageCoursesPage from '../course/courseManage'
import LoadingDots from '../loadingDots/loadingDots'
import {PropTypes} from 'prop-types'
import ManageCalendarEvent from '../calendar/manageCalendarEvent'

const Header = ({loading}) => {
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
                        {loading && <LoadingDots  />}
                    </li>
                </ul>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/event" component={ManageCalendarEvent} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:id" component={ManageCoursesPage} />
            </div>
           
        </Router>
    );
};


Header.propTypes = {
    loading: PropTypes.bool.isRequired
}

function About() {
    return (
        <div>
        <h2>About</h2>
        </div>
    );
}

export default Header;