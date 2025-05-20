import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Jolies Libelules" />
                </div>
                <div className="footer-links">
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/donde-encontrarnos">Dónde encontrarnos</Link>
                    <Link to="/reservar">Reservar</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
                <div className="footer-social">
                    <a href="https://wa.me/34672075100?text=Hola%20me%20gustar%C3%ADa%20pedir%20cita%20para%20un%20tratamiento" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/jolieslibelules" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Jolies Libelules. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
