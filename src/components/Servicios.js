import React from 'react';
import './Servicios.css';
import { FaCheckCircle } from 'react-icons/fa';

const Servicios = () => {
    return (
        <section className="servicios-preview" id="servicios">
            <h2>Nuestros Servicios</h2>
            <div className="servicios-section">

                {/* Bloque 1: Centro de Belleza */}
                <div className="servicio-bloque">
                    <h3>
                        <span className="icono-titulo">💆🏻‍♀️</span> Centro de Belleza
                    </h3>
                    <ul>
                        <li><FaCheckCircle className="icono" /> Tratamientos Faciales y Corporales</li>
                        <li><FaCheckCircle className="icono" /> Depilación Láser Diodo</li>
                        <li><FaCheckCircle className="icono" /> Tratamiento HIFU</li>
                        <li><FaCheckCircle className="icono" /> Radiofrecuencia INDIBA</li>
                    </ul>
                </div>

                {/* Bloque 2: Alquiler Aparatología */}
                <div className="servicio-bloque destacado">
                    <h3>
                        <span className="icono-titulo">🧴</span> Alquiler de Aparatología
                    </h3>
                    <ul>
                        <li><FaCheckCircle className="icono" /> INDIBA ONE</li>
                        <li><FaCheckCircle className="icono" /> Láser Diodo Milesman</li>
                        <li><FaCheckCircle className="icono" /> HIFU</li>
                    </ul>
                    <p className="precio">130€ / por día</p>
                    <p className="transporte">* Te lo llevamos y recogemos</p>
                    <a
                        href="https://wa.me/34672075100?text=Hola%2C%20me%20interesa%20alquilar%20un%20aparato%20de%20estética"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-alquiler"
                    >
                        Más info
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Servicios;
