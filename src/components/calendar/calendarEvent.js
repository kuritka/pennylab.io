import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'
import TextInput from '../common/textInput'
import * as constants from './constants'
import moment from 'moment'


const CalendarEvent = ({event, onSave, onChange, saving, errors}) => {
    console.log(event)
    return (
        <form>            
            <TextInput value={event.Subject} name="subject" label="subject" />
            <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'} onClick={onSave}/>
        </form>
    )
}

CalendarEvent.propTypes = {
    event: PropTypes.object.isRequired,
}

export default CalendarEvent;