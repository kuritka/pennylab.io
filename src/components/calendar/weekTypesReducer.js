import * as actionTypes from '../../actionTypes'
import   initialState from '../initialState'

export default function weekTypesReducer(state = initialState.weekTypes, action) {
    switch(action.type) {
        case actionTypes.LOAD_WEEKTYPES_SUCCESS:
          return Object.assign(...state,action.weekTypes); 
        default: 
            return state;
    }
}