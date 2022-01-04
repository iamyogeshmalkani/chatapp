import firebase from 'firebase/app';
import "./signin.css"
function SignIn(props) {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.Auth.signInWithPopup(provider);
  }
  return (
    <div className="signin">
    <h1 className="heading">Chit Chat</h1>
    <p className="body">The Easiest way to chat with people around Patel Nagar </p>
      <button className="google" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}
export default SignIn ;
