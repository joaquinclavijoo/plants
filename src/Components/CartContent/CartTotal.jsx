import React, { useContext } from "react";
import { Context } from "../../Context/Context.jsx";

const CartTotal = () => {
  const { cart } = useContext(Context);

  const total = cart.reduce((acc, el) => acc + el.price * (el.quanty || 1), 0);

  return (
    <div className="carttotal">
      <h3>Total a Pagar: ${total}</h3>
    </div>
  );
};

export default CartTotal;
