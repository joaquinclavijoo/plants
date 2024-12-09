import React from "react";
import Navbar from "../Navbar/Navbar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import "./CartContent.css";

const CartContent = () => {
  return (
    <>
      <Navbar />
      <CartElements />
      <CartTotal />
    </>
  );
};

export default CartContent;
