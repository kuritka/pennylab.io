import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import * as courseActions from './courseActions'
import { bindActionCreators } from 'redux';
import CourseList from './courseList'

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);    
    }


    courseRow(course, index){
        return <div key={index} >{course.title}</div>
    }

    redirectToAddCoursePage(){
        this.props.history.push('/course/');
        //browserHistory.Push('/course');
    }
    render() {
       // debugger;
       const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="acc Course button" onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses}/>
           </div>
        );
    }
}


//state is state within redux store. Injects few values to local state  and render method will render it... 
function mapStateToProps(state, ownProps){
    return {
        courses: state.courseReducerState
    }
}


// determines what actions are available in the component
//thanks this I can call bindActionCreators(courseActions,dispatch) - because of import * as courseActions ...
//instead of this.props.dispatch(createCourse(this.state.course))
function mapDispatchToProps(dispatch){
    return {
        //createCourse: (course) => dispatch(createCourse(course)) 
        actions: bindActionCreators(courseActions,dispatch)
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

//wrapping CoursePage into react-redux
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);