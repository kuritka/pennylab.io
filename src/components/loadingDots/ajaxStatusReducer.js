import * as actionTypes from '../../actionTypes'
import initialState from '../initialState'


function actionTypeEndsInSuccess(type ){
    return type.substring(type.length - 8) === '_SUCCESS';   
}


//DO NOT FORGET UPDATE ROOT REDUCER
export default function ajaxStatusReducer(state = initialState.numAjaxCallInProgress, action){
    if(action.type === actionTypes.BEGIN_AJAX_CALL){
        return state + 1;
    } else if (action.type === actionTypes.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
        return state -1;
    }
    return state;
}
