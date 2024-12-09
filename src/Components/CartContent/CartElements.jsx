import React, { useContext } from "react";
import { Context } from "../../Context/Context.jsx";
import CartItemContent from "./CartItemContent.jsx";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

  const deleteProducts = (id) => {
    const newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };

  return (
    <div className="products-card-container">
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <CartItemContent product={product} />
          <h4>{product.price}</h4>
          <h3
            className="cart-delete-product"
            onClick={() => deleteProducts(product.id)}
          >
            ❌
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CartElements;


