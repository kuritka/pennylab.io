import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import * as courseActions from './courseActions'
import { bindActionCreators } from 'redux';

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {title: ""}
        };
        //I must bind event handler to context of this instance otherwise it is in the context of render 
        // so state is null.   
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onClickSave = this.onClickSave.bind(this)
    }

    onTitleChange(event) {
        const course = this.state.course
        course.title = event.target.value
        this.setState({course: course})
    }
    
    onClickSave() {
        //debugger;
        //I can call props.Actions, thanks to mapDispatchToProps
        this.props.actions.createCourse(this.state.course)
    }

    courseRow(course, index){
        return <div key={index} >{course.title}</div>
    }
    render() {
       // debugger;
        return (
            <div>
                 <h1>Courses</h1>
                 <h2>Add course</h2>
                 {this.props.courses.map(this.courseRow)}
                 <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                 <input type="submit" onClick={this.onClickSave} value="Save"/>  
            </div>
        );
    }
}


//state is state within redux store. In ject bew values to local state  and render method woill render it... 
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