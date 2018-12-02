import React from 'react'
import {PropTypes} from 'prop-types'
import TextInput from '../common/textInput'
import SelectInput from '../common/selectInput'
    
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Courses</h1>
            <TextInput name="title" label="title" value={course.title} onChange={onChange} error={errors.title}/>
            <SelectInput name="authorId" label="Author" value={course.authorId} defaultOption="Select Author" onChange={onChange} error={errors.title} options={allAuthors}/>
            <TextInput name="category"  label="Category" value={course.category} onChange={onChange} errors={errors.category} />
            <TextInput name="length"  label="Length" value={course.length} onChange={onChange} errors={errors.length} />
            <input type="submit" disabled={loading} value={loading ? 'Saving...' : 'Save'} onClick={onSave}/>
        </form>
    );
}
    
CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    loading: PropTypes.func,
   // errors:  PropTypes.func
}
    
export default CourseForm;
    