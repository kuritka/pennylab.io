import * as actionTypes from '../../actionTypes';
import calendarApi from '../../api/mockCalendarApi';



export function loadWeekTypesSuccess (weekTypes) {
    //debugger;
    return {type: actionTypes.LOAD_WEEKTYPES_SUCCESS, weekTypes}
}

export function loadWeekTypes(){
    return function(dispatch) {
      return calendarApi.getAllWeekTypes().then(weekTypes => {
        dispatch(loadWeekTypesSuccess(weekTypes))
      }).catch(error => {throw(error);});
    }
  }