import * as actionTypes from '../../actionTypes'
import initialState from '../initialState'

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case actionTypes.CREATE_COURSE:
            //spread of array and replace course by deep copy of action.couse           
            return [...state,Object.assign({}, action.course)]; 

        case actionTypes.CREATE_COURSES_SUCCESS:
            //spread of array and replace course by deep copy of action.couse           
            return [...state,Object.assign({}, action.course)]; 

        case actionTypes.UPDATE_COURSES_SUCCESS:
            //brand new array without course, + course copy           
            return [...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)]; 

        case actionTypes.LOAD_COURSES_SUCCESS:
            //spread of array and replace course by deep copy of action.course           
            return action.courses; 
        default: 
            return state;
    }
}