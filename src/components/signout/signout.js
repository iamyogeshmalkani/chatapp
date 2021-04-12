import "./signout.css"
function SignOut(props) {
  return props.Auth.currentUser && (
    <div className="signoutd" >
      <button  className="signout" onClick={() => props.Auth.signOut()}>Sign Out</button>
    </div>
  )
}
export default SignOut;
