import React, { useEffect, useRef, useState } from 'react';
import "./App.css"
import SignIn from "./components/signin/signin.js";
import SignOut from "./components/signout/signout.js";
import ChatRoom from "./components/chatroom/chatroom.js"

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAstyxpEBS0kDNUvIWrYwK5WckhtLSPbB4",
    authDomain: "yo-yo-messenger.firebaseapp.com",
    projectId: "yo-yo-messenger",
    storageBucket: "yo-yo-messenger.appspot.com",
    messagingSenderId: "910581999610",
    appId: "1:910581999610:web:6b302fff37f397384f2643",
    measurementId: "G-B79S25RXHL"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

function App() {
  // checks if user is authenticated i.e. logged in
  const [user] = useAuthState(auth);

  return (
    <div>
      <SignOut
      Auth={auth}/>
      <section>
        {/* Shows chatroom if user is logged in
        else show signin page */}
        {user ? <ChatRoom
          Auth={auth}
           /> : <SignIn
          Auth={auth} />}
      </section>
    </div>
  );
}




export default App;
