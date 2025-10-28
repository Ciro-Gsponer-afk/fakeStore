import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Producto() {
  const { ProductID } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ProductID}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error("Error al cargar el producto:", error));
  }, [ProductID]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="producto-card" key={producto.id}>
      <img
        src={producto.image}
        alt={producto.description}
        className="producto-img"
      />
      <h3 className="producto-titulo">{producto.title}</h3>
      <p className="producto-categoria">{producto.category}</p>
      <p className="producto-precio">${producto.price}</p>
      <p className="producto-rating">⭐ {producto.rating?.rate} ({producto.rating?.count} reviews)</p>
    </div>
  );
}

export default Producto;
