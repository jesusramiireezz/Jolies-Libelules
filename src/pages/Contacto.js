import React from 'react';
import './Contacto.css';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section className="contacto">
      <h2 className="titulo-seccion">Contacto</h2>
      <div className="info-contacto">
        <p><FaMapMarkerAlt className="icono" /> Carrer del Poble Espanyol, 20, Palma</p>
        <p><FaPhoneAlt className="icono" /> <a href="tel:+34672075100">672 075 100</a></p>
        <p><FaWhatsapp className="icono" /> <a href="https://wa.me/34672075100" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
        <p><FaInstagram className="icono" /> <a href="https://www.instagram.com/jolieslibelules" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </div>
      <p className="seo-contacto">
  ¿Buscas un centro de belleza en Palma de Mallorca? En <span className="marca-verde">Jolies Libelules</span> estamos a tu disposición para resolver dudas y ayudarte a reservar tu tratamiento de estética avanzada. Contáctanos por WhatsApp o visítanos en nuestro centro en Carrer del Poble Espanyol, 20.
</p>

    </section>
  );
};


export default Contacto;