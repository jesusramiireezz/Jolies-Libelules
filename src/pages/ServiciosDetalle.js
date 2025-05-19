import React, { useState } from 'react';
import ServicioCard from '../components/ServicioCard';
import ServicioModal from '../components/ServicioModal';
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
    detalleHtml: `
  <div class="modal-detalle">
    <h3>¿Por qué hacer una higiene facial?</h3>
    <p>Una <strong>higiene facial profesional</strong> es esencial para eliminar impurezas, células muertas y exceso de grasa. Además, ayuda a oxigenar la piel y mejora la absorción de tratamientos posteriores.</p>

    <h3>Nuestros tratamientos</h3>
    <ul>
      <li><strong>Limpieza Express – 40€</strong><br>Una limpieza rápida y efectiva para dejar tu piel fresca, suave y revitalizada.</li>
      <li><strong>Tratamiento Ageloc – 55€</strong><br>Un tratamiento avanzado para rejuvenecer la piel y darle un aspecto más firme y luminoso.</li>
    </ul>
  </div>
`
,
    categorias: [
    
    ]
  },
  {
    titulo: 'Depilación Láser Diodo',
    descripcion: 'Tecnología eficaz y duradera para todo tipo de piel.',
    imagen: 'https://drvargas.co/wp-content/uploads/2023/08/dr-vargas-depilacion-laser-diodo.webp',
    precio: '13€',
    duracion: '30-60 min',
    whatsapp: true,
    detalleHtml: `
  <div class="modal-detalle">
    <h3>¿Qué es el láser diodo?</h3>
    <p>El <strong>láser de diodo</strong> se caracteriza por tener una longitud de onda más larga, lo que le permite penetrar más eficazmente en la piel.</p>
    <p>Gracias a su sistema personalizado, se ajusta a tu sensibilidad, color de piel y densidad del vello. Es <strong>efectivo, rápido e indoloro</strong> sobre cualquier tipo de piel.</p>
    <p>Consiste en aplicar luz láser sobre la zona donde crece el vello. La melanina absorbe la luz, genera calor y destruye las células responsables del crecimiento del pelo.</p>

    <h3>¿Cuántas sesiones necesito?</h3>
    <p>Generalmente entre <strong>6 y 8 sesiones</strong> son suficientes para eliminar casi todo el vello, aunque los resultados son visibles desde la primera sesión.</p>
    <p>En casos hormonales (como el vello facial), se requerirán más sesiones.</p>

    <h3>Packs disponibles</h3>
    <ul>
      <li><strong>PACK 40€</strong> – Pubis completo, Interglúteos, Axilas</li>
      <li><strong>PACK 60€</strong> – Medias piernas, Pubis completo, Interglúteos, Axilas</li>
      <li><strong>PACK 75€</strong> – Piernas completas, Axilas, Interglúteos</li>
      <li><strong>PACK 90€</strong> – Piernas completas, Genital completo, Axilas, Interglúteos</li>
      <li><strong>PACK 100€ (HOMBRE)</strong> – Medio cuerpo inferior completo</li>
      <li><strong>PACK 120€ (HOMBRE)</strong> – Medio cuerpo inferior + superior completo</li>
      <li><strong>PACK 150€</strong> – Cuerpo entero mujer</li>
      <li><strong>PACK 180€</strong> – Cuerpo entero hombre</li>
    </ul>

    <h3>Zonas sueltas</h3>
    <ul>
      <li><strong>ZONA XS – 13€</strong> <br>Pubis superior, Barbilla, Dedos, Entrecejo, Patillas, Línea alba, Areolas, Ingles, Axilas</li>
      <li><strong>ZONA S – 20€</strong> <br>Axilas, Ingles</li>
      <li><strong>ZONA M – 30€</strong> <br>Facial completo, Lumbares</li>
      <li><strong>ZONA L – 40€</strong> <br>Pubis completo, Medios brazos, Medias piernas, Pecho, Abdomen</li>
      <li><strong>ZONA XL – 65€</strong> <br>Piernas completas, Abdomen completo, Espalda completa</li>
    </ul>
  </div>
`
,
categorias: []

  },
  {
    titulo: 'Tratamiento HIFU',
    descripcion: 'Reafirmación facial con ultrasonido focalizado.',
    imagen: 'https://laserluz.com/blog/wp-content/uploads/2023/11/Hifu-facial.webp',
    precio: '90€',
    duracion: '60 min',
    whatsapp: true,
    detalleHtml: `
      <div class="modal-detalle">
        <h3>¿Qué es HIFU?</h3>
        <p><strong>HIFU (Ultrasonido Focalizado de Alta Intensidad)</strong> es una tecnología avanzada que dirige ondas de ultrasonido a capas profundas de la piel. Estimula la producción de colágeno, mejora la firmeza y la elasticidad, sin cirugía.</p>
        <h3>Beneficios en rostro</h3>
        <ul>
          <li>Reduce arrugas y líneas de expresión</li>
          <li>Mejora flacidez facial</li>
          <li>Reafirma y tonifica la piel</li>
          <li>Resultados visibles desde la primera sesión</li>
        </ul>
        <h3>Beneficios en cuerpo</h3>
        <ul>
          <li>Ideal para zonas con flacidez</li>
          <li>Estimula colágeno sin bisturí</li>
          <li>Tonifica brazos, abdomen y más</li>
        </ul>
        <h3>Zonas tratables</h3>
        <ul>
          <li>Flancos</li>
          <li>Abdomen</li>
          <li>Glúteos</li>
          <li>Cara interna de muslos</li>
          <li>Cara interna de brazos</li>
        </ul>
      </div>
    `,
    categorias: [
      {
        titulo: 'HIFU Completo',
        precios: [
          { nombre: 'Sesión', detalle: 'Resultados visibles desde la primera sesión', precio: 120 }
        ]
      }
    ]
  },
  {
    titulo: 'Radiofrecuencia INDIBA',
    descripcion: 'Tecnología avanzada para regeneración celular y lifting.',
    imagen: 'https://sensabell.com/wp-content/uploads/2023/09/indiba-rejuve-1024x630.jpg',
    precio: '75€',
    duracion: '45 min',
    whatsapp: true,
    detalleHtml: `
  <div class="modal-detalle">
    <h3>¿Qué es INDIBA?</h3>
    <p><strong>INDIBA</strong> aumenta la temperatura del tejido y la actividad celular, potenciando la síntesis de colágeno y elastina, y mejorando el flujo sanguíneo. Es un tratamiento no invasivo.</p>

    <h3>Aplicación facial y corporal</h3>
    <p>Está indicado tanto para rostro como cuerpo, ayudando a combatir la flacidez, mejorar la textura de la piel, reducir la celulitis y redefinir el contorno corporal.</p>

    <h3>Beneficios en rostro</h3>
    <ul>
      <li>Mejora la firmeza y elasticidad</li>
      <li>Aporta luminosidad</li>
      <li>Reduce líneas de expresión</li>
      <li>Efecto lifting</li>
    </ul>

    <h3>Beneficios en cuerpo</h3>
    <ul>
      <li>Reafirma la piel</li>
      <li>Reduce la celulitis</li>
      <li>Remodela el contorno corporal</li>
      <li>Activa la circulación y drenaje linfático</li>
      <li>Favorece la descomposición de grasa</li>
    </ul>
  </div>
`,

    categorias: [
      {
        titulo: 'Facial',
        precios: [
          { nombre: 'Sesión', detalle: 'Rejuvenecimiento y lifting facial', precio: 65 }
        ]
      },
      {
        titulo: 'Corporal',
        precios: [
          { nombre: 'Sesión', detalle: 'Reafirmación, celulitis y remodelado', precio: 75 }
        ]
      }
    ]
  }
];

const ServiciosDetalle = () => {
  const [modalServicio, setModalServicio] = useState(null);

  return (
    <section className="servicios-detalle">
      <h2 style={{ textAlign: 'center', margin: '2rem 0', fontFamily: 'Quicksand', color: '#333' }}>
        Nuestros servicios en detalle
      </h2>
      <div className="servicios-grid">
        {servicios.map((servicio, i) => (
          <ServicioCard key={i} {...servicio} onVerDetalles={() => setModalServicio(servicio)} />
        ))}
      </div>

      {modalServicio && (
        <ServicioModal
          servicio={modalServicio}
          onClose={() => setModalServicio(null)}
        />
      )}
    </section>
  );
};

export default ServiciosDetalle;
