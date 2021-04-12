import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./chatroom.css"
function ChatRoom(props) {
  const firestore = firebase.firestore();

const [formValue,setFormValue]=useState("");
  function ChatMessage(props) {
  const { user, body, uid, photoURL, createdAt } = props.message;

    return (

        <div className="user">
            <img className="profilepic" src={photoURL} alt="{user}'s pfp" />

        <div>
            <p className="username">{user} :</p>


            <p className="message">{body}</p>
        </div>
      </div>

  )
}

  const sendMessage = async (e) => {
      e.preventDefault();
      // gets name, userID and pfp of logged in user
      const { displayName, uid, photoURL } = props.Auth.currentUser;

      await messagesRef.add({
        user: displayName,
        body: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: uid,
        photoURL: photoURL
      })

      // resetting form value and scrolling to bottom
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

const dummy = useRef();
  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  // getting the message and sorting them by time of creation
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <div className="main">
      <div>
      <a href="https://www.instagram.com/memes_of_patel_nagar/?hl=en" className="patel" >Patel Nagar Chat</a>
        {/* we will loop over the message and return a
        ChatMessage component for each message */}
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>

      {/* Form to type and submit messages */}
      <form className="form" onSubmit={sendMessage}>
        <input className="type" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
        <button className="send"  type="submit" disabled={!formValue}>send</button>
      </form>
    </div>
  )
}
export default ChatRoom;
