import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h1>thi is iajisdflasdf home</h1>
      <p>Current user is {user ? user.displayName : "no body"}</p>
    </div>
  );
};

export default Home;
