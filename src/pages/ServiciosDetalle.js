import React from 'react';
import ServicioCard from '../components/ServicioCard';
import '../components/ServicioCard.css';
import './ServiciosDetalle.css';

const servicios = [
  {
    titulo: 'Tratamientos Faciales y Corporales',
    descripcion: 'Limpieza profunda, hidratación, rejuvenecimiento y más.',
    imagen: 'https://cdn.euroinnova.edu.es/img/subidasEditor/est%C3%A9tica%201-1617422468.webp',
    precio: '35€',
    duracion: '50 min',
    whatsapp: true,
  },
  {
    titulo: 'Depilación Láser Diodo',
    descripcion: 'Tecnología eficaz y duradera para todo tipo de piel.',
    imagen: 'https://drvargas.co/wp-content/uploads/2023/08/dr-vargas-depilacion-laser-diodo.webp',
    precio: 'desde 25€',
    duracion: '30-60 min',
    whatsapp: true,
  },
  {
    titulo: 'Tratamiento HIFU',
    descripcion: 'Reafirmación facial con ultrasonido focalizado.',
    imagen: 'https://laserluz.com/blog/wp-content/uploads/2023/11/Hifu-facial.webp',
    precio: 'desde 90€',
    duracion: '60 min',
    whatsapp: true,
  },
  {
    titulo: 'Radiofrecuencia INDIBA',
    descripcion: 'Tecnología avanzada para regeneración celular y lifting.',
    imagen: 'https://sensabell.com/wp-content/uploads/2023/09/indiba-rejuve-1024x630.jpg',
    precio: 'desde 75€',
    duracion: '45 min',
    whatsapp: true,
  },
];

const ServiciosDetalle = () => {
  return (
    <section className="servicios-detalle">
      <h2 style={{ textAlign: 'center', margin: '2rem 0', fontFamily: 'Quicksand', color: '#333' }}>
        Nuestros servicios en detalle
      </h2>
      <div className="servicios-grid" style={{
        display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', padding: '0 2rem'
      }}>
        {servicios.map((servicio, i) => (
          <ServicioCard key={i} {...servicio} />
        ))}
      </div>
    </section>
  );
};

export default ServiciosDetalle;
