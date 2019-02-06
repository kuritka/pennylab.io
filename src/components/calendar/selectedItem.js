import React from 'react';
import './calendar.css';
import {PropTypes} from 'prop-types'



const SelectedItem = (props) => {
    return (
        <div>
            {props.event.Subject}
        </div>
    )
}

SelectedItem.propTypes = {
    event: PropTypes.object.isRequired,
}

export default SelectedItem;