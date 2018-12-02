import * as actionTypes from '../../actionTypes';
import courseApi from '../../api/mockCourseApi';

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
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {throw(error);});
  }
}

export function saveCourse(course){
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(
      savedCourse => {
        course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
        dispatch(createCourseSuccess(savedCourse));
    }
    ).catch(error => {throw(error);});
  }
}