import * as actionTypes from '../../actionTypes';
import courseApi from '../../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from '../loadingDots/ajaxStatusActions'

export function createCourse (course) {
  //  debugger;
    return {type: actionTypes.CREATE_COURSE, course}
}

export function loadCoursesSuccess (courses) {
  //  debugger;
    return {type: actionTypes.LOAD_COURSES_SUCCESS, courses}
}

export function updateCourseSuccess (course) {
  //  debugger;
    return {type: actionTypes.UPDATE_COURSES_SUCCESS, course}
}

export function createCourseSuccess (course) {
  //  debugger;
    return {type: actionTypes.CREATE_COURSES_SUCCESS, course}
}


//list of thunks...
export function loadCourses(){
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {throw(error);});
  }
}

export function saveCourse(course){
  return function(dispatch, getState) {
    dispatch(beginAjaxCall())
    return courseApi.saveCourse(course).then(
      savedCourse => {
        course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
        dispatch(createCourseSuccess(savedCourse));
    }
    ).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  }
}