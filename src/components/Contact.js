import React from 'react'
import './Contact.css'
import Avatar from '@material-ui/core/Avatar'

const Contact = ({ imageUrl, username }) => {
    return (
        <div className="contact">
            {imageUrl && <Avatar src={imageUrl} />}
            {username && <h2 className="contact__text">{username}</h2>}
        </div>
    )
}

export default Contact
