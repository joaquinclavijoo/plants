import React, {useContext, useState, useEffect } from "react";
import "./Products.css";
import {Context} from "../../Context/Context.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { BuyProduct} = useContext (Context);
  

  useEffect(() => {
    fetch("public/Data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar los productos:", error)); // Manejo de errores opcional
  }, []);

  


  return products.map((products) => {
    return (
        <div className="card" key={products.img}>
            <img src={products.img} alt="img-products-card"/>
            <h3>{products.name}</h3>
            <h4>{products.price}</h4>
            <button onClick={ () => BuyProduct(products) }>Añadir al Carrito</button>
        </div>
    )
  })
 
};

export default Products;
