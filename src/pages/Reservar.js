import React from 'react';
import './Reservar.css';

const Reservar = () => {
  return (
    <section className="reservar">
      <div className="contenedor">
        <h2 className="titulo">Reserva tu cita</h2>
        <p className="descripcion">
          Estaremos encantados de ayudarte a elegir el tratamiento ideal para ti. Puedes escribirnos directamente por WhatsApp para consultar disponibilidad y confirmar tu cita.
        </p>
        <a
          href="https://wa.me/34672075100?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="boton-reservar"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Reservar;