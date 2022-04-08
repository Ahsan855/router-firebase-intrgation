import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth =getAuth(app)
const Products = () => {
 const [user]=useAuthState(auth)
  return (
    <div>
      <h2>Knock knock ! who id there</h2>
      <h4>{user ? user.displayName : "Vooooooooot"}</h4>
    </div>
  );
};

export default Products;
