import React from 'react';
import ServicioCard from '../components/ServicioCard';
import '../components/ServicioCard.css';
import './ServiciosDetalle.css';

const servicios = [
  {
    titulo: 'Tratamientos Faciales y Corporales',
    descripcion: 'Limpieza profunda, hidratación, rejuvenecimiento y más.',
    imagen: '',
    precio: '35€',
    duracion: '50 min',
    whatsapp: true,
  },
  {
    titulo: 'Depilación Láser Diodo',
    descripcion: 'Tecnología eficaz y duradera para todo tipo de piel.',
    imagen: '',
    precio: 'desde 25€',
    duracion: '30-60 min',
    whatsapp: true,
  },
  {
    titulo: 'Depilación Tradicional',
    descripcion: 'Cera caliente, tibia y técnica rápida para todo el cuerpo.',
    imagen: '',
    precio: 'desde 10€',
    duracion: '20-40 min',
    whatsapp: true,
  },
  {
    titulo: 'Tratamiento HIFU',
    descripcion: 'Reafirmación facial con ultrasonido focalizado.',
    imagen: 'https://source.unsplash.com/360x200/?hifu',
    precio: 'desde 90€',
    duracion: '60 min',
    whatsapp: true,
  },
  {
    titulo: 'Radiofrecuencia INDIBA',
    descripcion: 'Tecnología avanzada para regeneración celular y lifting.',
    imagen: 'https://source.unsplash.com/360x200/?indiba',
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
