import React from 'react';
import './DondeEstamos.css';

const DondeEstamos = () => {
  return (
    <section className="donde-estamos">
      <h2>Dónde encontrarnos</h2>
      <p className="seo-location">
  Estamos en Carrer del Poble Espanyol, 20 (Palma de Mallorca). <span className="marca-verde">Jolies Libelules</span> es tu centro de belleza de confianza en Palma, especializado en tratamientos estéticos como HIFU e INDIBA.
</p>

      <div className="contenedor-localizacion">
        <div className="mapa-bloque">
          <iframe
            title="Ubicación Jolies Libelules"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150.87140783777!2d2.6297006!3d39.572329700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792653ba7f327%3A0x7651ec13eebad1f6!2sCarrer%20del%20Poble%20Espanyol%2C%2020%2C%20Ponent%2C%2007014%20Palma%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1747584051693!5m2!1ses!2ses"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>Carrer del Poble Espanyol, 20</p>
        </div>

        <div className="video-bloque">
          <video controls preload="auto">
            <source src="/videos/primeraparte.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DondeEstamos;
