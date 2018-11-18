import * as actionTypes from '../../actionTypes'
import courseApi from '../../api/mockCourseApi'

export function createCourse (course) {
  //  debugger;
    return {type: actionTypes.CREATE_COURSE, course}
}

export function loadCoursesSuccess (courses) {
  //  debugger;
    return {type: actionTypes.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses(){
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {throw(error);});
  }
}