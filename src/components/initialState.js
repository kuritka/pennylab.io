import {EmptyCalendar} from './../api/mockCalendarApi'
//the more and more reducers will need to have initial state 
// so it is better to keep it separated on one place. 
//the right place is here
//dont forget update ROOT REDUCER and index.js to dispatch data
export default 
{
    authors: [],
    courses: [],
    weekTypes: [],
    calendar: EmptyCalendar,
    numAjaxCallInProgress: 0
}