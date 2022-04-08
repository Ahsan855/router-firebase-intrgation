import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth =getAuth(app)
const Home = () => {
  const [user]=useAuthState(auth)
  return (
    <div>
      <h1>thi is iajisdflasdf home</h1>
      <p>Current user is {user ? user.displayName : "no body"}</p>
    </div>
  );
};

export default Home;
