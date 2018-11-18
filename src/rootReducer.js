import {combineReducers} from 'redux'
import courseReducerState from './components/course/courseReducer'


const rootReducer = combineReducers ({
    courseReducerState 
});

export default rootReducer;