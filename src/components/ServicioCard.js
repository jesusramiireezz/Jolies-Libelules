import React from 'react';
import './ServicioCard.css';

const ServicioCard = ({ titulo, descripcion, imagen, precio, duracion, whatsapp, onVerDetalles }) => {
  return (
    <div className="servicio-card">
  <div className="card-contenido">
    <img src={imagen} alt={titulo} className="servicio-imagen" />
    <h3>{titulo}</h3>
    <p>{descripcion}</p>
    {precio && <p className="precio">Desde {precio}</p>}
  </div>

  <div className="card-botones">
    {onVerDetalles && (
      <button className="boton-detalles" onClick={onVerDetalles}>
        Ver detalles
      </button>
    )}
    {whatsapp && (
      <a
        href={`https://wa.me/34672075100?text=${encodeURIComponent(`Hola, me interesa el servicio de ${titulo}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="boton-reservar"
      >
        Reserva tu cita
      </a>
    )}
  </div>
</div>

  );
};

export default ServicioCard;
