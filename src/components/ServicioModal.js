import React, { useEffect } from 'react';
import './ServicioModal.css';

const ServicioModal = ({ servicio, onClose }) => {
  // ✅ Esto debe ir siempre al principio
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  // ✅ Esto debe ir después del useEffect
  if (!servicio) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={onClose}>✕</button>
        <div className="modal-scroll">
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
    </div>
  );
};

export default ServicioModal;
