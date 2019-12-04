import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Popup = ({isActive}) => {
    return (
        <div className="popup" onClick={() => {
            isActive(false)
        }}>
            <div className="popup-info">
                <p>Please, add a task...</p>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    )
}

export default Popup;