import React from "react";
import "./Login.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { useStateValue } from "../Redux/StateProvider";
import { actionTypes } from "../Redux/Reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const handleSignUp = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider).then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      });
      console.log("Authentication successful:", result.user);
    } catch (error) {
     console.log(error.message)
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="flex-div">
          <div className="name-content">
            <h1 className="logo">facebook</h1>
            <p>Connect with friends and the world around you on Facebook.</p>
          </div>
          <form className="login-form">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="facebook Logo"
            />
            <h2>Facebook</h2>
            <button onClick={handleSignUp} className="login-button">
              Log In With Gmail
            </button>
            <a href="#">Forgot Password ?</a>
            <button className="create-account">Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
