import {combineReducers} from 'redux'
import courseReducerState from './components/course/courseReducer'
import authorReducerState from './components/author/authorReducer'

//any neew reducer must be add here
//dont forget update INIT STATE and index.js to dispatch data
const rootReducer = combineReducers ({
    courseReducerState,
    authorReducerState
});

export default rootReducer;