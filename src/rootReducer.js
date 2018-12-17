import {combineReducers} from 'redux'
import courseReducerState from './components/course/courseReducer'
import authorReducerState from './components/author/authorReducer'
import ajaxStatusReducerState from './components/loadingDots/ajaxStatusReducer'

//any neew reducer must be add here
//dont forget update INIT STATE and index.js to dispatch data
const rootReducer = combineReducers ({
    courseReducerState,
    authorReducerState,
    ajaxStatusReducerState
});

export default rootReducer;