import React, { useContext } from "react";
import { Context } from "../../Context/Context.jsx";

const CartItemContent = ({ product }) => {
  const { cart, setCart } = useContext(Context);

  // Función para incrementar la cantidad
  const incrementProduct = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quanty: item.quanty + 1 } : item
      )
    );
  };

  // Función para decrementar la cantidad
  const decrementProduct = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quanty > 1
          ? { ...item, quanty: item.quanty - 1 }
          : item
      )
    );
  };

  return (
    <>
      <p className="counter-button" onClick={() => decrementProduct(product.id)}>
        -
      </p>
      <p>{product.quanty}</p>
      <p className="counter-button" onClick={() => incrementProduct(product.id)}>
        +
      </p>
    </>
  );
};

export default CartItemContent;
