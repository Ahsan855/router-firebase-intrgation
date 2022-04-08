import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const Login = () => {
    const auth = getAuth(app)
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h3>Please login</h3>
      <div style={{ margin: "20px" }}>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Google sign In
        </button>
      </div>
      <form action="">
        <input type="email" placeholder="your email" />
        <br />
        <input type="password" name="" id="" placeholder="[password" />
        <br />
        <input type="submit" value="Login" placeholder="register" />
      </form>
    </div>
  );
};

export default Login;
