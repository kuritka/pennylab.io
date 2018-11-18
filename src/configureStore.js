import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    return createStore (
        rootReducer,
        initialState,
        //thunk is handling making asynchronous call
        applyMiddleware(thunk,reduxImmutableStateInvariant()) 
        /* apply other pieces of middleware here (logging, scheduling actions ...)... */
    )
}