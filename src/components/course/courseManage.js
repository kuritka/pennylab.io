import React from 'react'
import {PropTypes} from 'prop-types'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as courseActions from './courseActions'
import CourseForm from './courseForm'

    
class ManageCourse extends React.Component {
      constructor(props, context) {
        super(props, context);
        //if state is not setted correctly (i.e. typo, ornot setted), than component is uncontrolled
        this.state = {
            course: Object.assign({},this.props.course),
            errors: {}
        }
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
      }

      //occurs when props changed
      componentWillReceiveProps(nextProps){
         if(this.props.course.id !== nextProps.course.id){
            this.setState({course: Object.assign({}, nextProps.course)});
         }
      }

      //single change handler for all form fields
      updateCourseState(event){
         const field = event.target.name;
         let course =  this.state.course;
         course[field] =  event.target.value;
         return this.setState({course: course});
      }

      saveCourse(event){
         event.preventDefault();
         this.props.actions.saveCourse(this.state.course)
         this.props.history.push('/courses');
      }
    
      render() {
      //   const {courses} = this.props;
         return (
            <div>
               <h1>Manage Course Page</h1>
               <CourseForm 
               //   allAuthors={ [{text:"Pepek", value:"Pepek"},{text:"Fredy", value:"Fredy"}]} 
                  allAuthors={ this.props.authors } 
                  errors={this.state.errors} 
                  course={this.state.course} 
                  onChange={this.updateCourseState}
                  onSave={this.saveCourse}/>
            </div>
          );
      }
}
    
function getCourseById(courses, id){
   const course = courses.filter(course => course.id === id);
   if(course && course[0] !=null) return course[0];
   return {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
}

//state is offering root reducer states, ownProps are router properties
function mapStateToProps(state, ownProps){
   const courseId = ownProps.match.params.id; //from path /course/:id
   let course =getCourseById(state.courseReducerState, courseId)

   //authorReducerState is the same state name as it is defined in the rootReducer!
   const authorsFormattedForDropDown = state.authorReducerState.map(author => 
      {
         return {
            value: author.id,
            text: author.firstName + " " + author.lastName
         }
      });

   return {
      course: course,
      authors: authorsFormattedForDropDown
   }
}
    
function mapDispatchToProps(dispatch){
    return {
       actions: bindActionCreators(courseActions,dispatch)
    }
}
    
ManageCourse.propTypes = {
  //  courses: PropTypes.array.isRequired,
    //course: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

    
export default connect(mapStateToProps,mapDispatchToProps)(ManageCourse);
    