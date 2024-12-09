import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
const BuyProduct =(products) => {
  const productRepeat = cart.find ((item) => item.id=== products.id)

  if (productRepeat) {
    setCart(cart.map ((item) => (item.id === products.id ? {...products, quanty: productRepeat.quanty}     : item      )))
  }else{
    setCart ([... cart, products])
  }
  
  } 

  return (
    <Context.Provider value={{ cart, setCart, BuyProduct }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
