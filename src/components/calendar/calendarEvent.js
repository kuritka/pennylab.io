import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import TextInput from '../common/textInput'
import SelectInput from '../common/selectInput'


const CalendarEventForm = ({event, allWeekTypes, onSave, onChange, saving, errors}) => {
    return ( 
        <form>            
            <TextInput value={event.Event.Subject} name="Subject" label="Subject" onChange={onChange} />
            <TextInput value={event.Event.From} name="From" label="From" onChange={onChange} />
            <TextInput value={event.Event.To} name="To" label="To" onChange={onChange} />
            <TextInput value={event.Event.Note} name="Note" label="Note" onChange={onChange} />
            <SelectInput name="Week" label="Week" value={event.Event.Odd} defaultOption="Select Week" onChange={onChange} options={allWeekTypes}/>
            <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'} onClick={onSave}/>
        </form>
    )
}

CalendarEventForm.propTypes = {
    event: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    allWeekTypes: PropTypes.array.isRequired,
}

export default CalendarEventForm;