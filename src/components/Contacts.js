import React from 'react';
import Contact from './Contact';
import './Contacts.css';
import {useStateValue} from './StateProvider';

const Contacts = () => {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="contacts" >
            <div className="contacts__header">
                <h4 className="contacts__text">Contacts</h4>
            </div>
            <Contact imageUrl={user.photoURL} username={user.displayName} />
        </div>
    )
}

export default Contacts
