import * as actionTypes from '../../actionTypes';
import calendarApi from '../../api/mockCalendarApi';
import {beginAjaxCall, ajaxCallError} from '../loadingDots/ajaxStatusActions'

export function loadCalendarSuccess(calendar){
    return {type: actionTypes.LOAD_CALENDAR_SUCCESS, calendar}
}

export function loadWeekTypeSuccess() {

}


//list of thunks...
export function loadCalendar(){
    return function(dispatch) {
      dispatch(beginAjaxCall())
      return calendarApi.getCalendarById(1).then(calendar => {
        dispatch(loadCalendarSuccess(calendar))
      }).catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
    }
  }

export function loadAllWeekTypes(){
  return function(dispatch) {
    return calendarApi.getAllWeekTypes().then(weekTypes => {
      console.log(weekTypes);
      dispatch(loadWeekTypeSuccess(weekTypes))
    }).catch(error => {throw(error);});
  }
} 


  export function loadCalendarEvent(calendar) {
    return {type: actionTypes.LOAD_CALENDAR_EVENT_SUCCESS, calendar}
  }

  