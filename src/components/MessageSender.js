import React, { useState } from 'react';
import './MessageSender.css';
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from '../firebase';
import firebase from 'firebase';

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState(null);
    const [{user}, dispatch] = useStateValue()

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            message: input, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL
        })

        setInput('');
        setImageURL(null);
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.currentTarget.value)} className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}`} />
                    <input value={imageURL} onChange={e => setImageURL(e.currentTarget.value)} placeholder="Image URL (optional)" />
                    <button onClick={handleSubmit} type="submit" >
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photos/Videos</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}} /> 
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
