import { useState, useEffect } from "react";
import "./Productos.css";
import { useNavigate } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error("Error al cargar productos:", error));
  }, []);

  const Cambiar = (id) => {
    navigate(`/${id}`);
  };
  
  return (
    <div className="productos-container">
      <h2 className="productos-title">Lista de productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.image} alt={producto.description} className="producto-img"/>
            <h3 className="producto-titulo">{producto.title}</h3>
            <p className="producto-categoria">{producto.category}</p>
            <p className="producto-precio">${producto.price}</p>
            <button onClick={() => Cambiar(producto.id)}>Ir al Producto</button>
            <p className="producto-rating">{producto.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
