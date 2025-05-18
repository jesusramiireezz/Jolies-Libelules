import React from 'react';
import './ServicioCard.css';

const ServicioCard = ({ titulo, descripcion, imagen, precio, duracion, whatsapp }) => {
  return (
    <div className="servicio-card">
      <img src={imagen} alt={titulo} className="servicio-imagen" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {precio && <p className="precio">Desde {precio}</p>}
      {duracion && <p className="duracion">Duración: {duracion}</p>}
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
  );
};

export default ServicioCard;
