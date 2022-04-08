import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Knock knock ! who id there</h2>
      <h4>{user ? user.displayName : "Vooooooooot"}</h4>
    </div>
  );
};

export default Products;
