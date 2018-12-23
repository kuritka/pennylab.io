import * as  actionTypes from '../../actionTypes';
import initialState from '../initialState'

export default function calendarReducer(state = initialState.calendar, action) { 
    switch(action.type){
        case actionTypes.LOAD_CALENDAR_SUCCESS: 
            return Object.assign({}, action.calendar);
        default: 
            return state;
    }
}



