import React from 'react';
import './ServicioModal.css';

const ServicioModal = ({ servicio, onClose }) => {
  if (!servicio) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-contenido">
        <button className="modal-cerrar" onClick={onClose}>✕</button>
        <h2>{servicio.titulo}</h2>
        <p>{servicio.descripcion}</p>
  
        {servicio.detalleHtml && (
          <div
            className="modal-detalle"
            dangerouslySetInnerHTML={{ __html: servicio.detalleHtml }}
          />
        )}
  
        {servicio.categorias?.map((cat, i) => (
          <div key={i} className="modal-categoria">
            <h3>{cat.titulo}</h3>
            <ul>
              {cat.precios.map((item, j) => (
                <li key={j}>
                  <strong>{item.nombre}</strong>
                  {item.detalle && ` – ${item.detalle}`}
                  {item.precio && `: ${item.precio}€`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ServicioModal;
