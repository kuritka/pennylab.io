import * as actionTypes from '../../actionTypes'

export default function courseReducer(state = [], action) {
    //debugger;
    switch(action.type) {
        case actionTypes.CREATE_COURSE:
        //spread of array and replace course by deep copy of action.couse           
        return [...state,Object.assign({}, action.course)]; 

        case actionTypes.LOAD_COURSES_SUCCESS:
        //spread of array and replace course by deep copy of action.couse           
        return action.courses; 
        default: 
            return state;
    }
}