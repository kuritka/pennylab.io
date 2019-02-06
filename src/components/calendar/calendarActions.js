import * as actionTypes from '../../actionTypes';
import calendarApi from '../../api/mockCalendarApi';
import {beginAjaxCall, ajaxCallError} from '../loadingDots/ajaxStatusActions'

export function loadCalendarSuccess(calendar){
    return {type: actionTypes.LOAD_CALENDAR_SUCCESS, calendar}
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


  export function loadCalendarEvent(event) { 
    return {type: actionTypes.LOAD_CALENDAR_EVENT_SUCCESS, event}
  }

  