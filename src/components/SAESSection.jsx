import React from 'react';
import Tramites from './Trámites.png'; 

const resources = [
  {
    type: 'video',
    title: 'Cómo inscribirte en el SAES',
    url: 'https://www.youtube.com/watch?v=cvq7xoITukU',
  },
  {
    type: 'video',
    title: 'Registrar ETS en SAES',
    url: 'https://www.youtube.com/watch?v=9bgexzx9nHU',
  },
  {
    type: 'video',
    title: 'Cómo consultar calificaciones',
    url: 'https://www.youtube.com/watch?v=s0uzgwnMlfQ',
  },
  {
    type: 'video',
    title: 'Cómo reinscribirse y descargar tu horario',
    url: 'https://www.youtube.com/watch?v=QQIsryWVC_M', 
  },
  {
    type: 'video',
    title: 'Cómo usar MOD SAES para armar tu horario',
    url: 'https://www.youtube.com/watch?v=R1NszcwodSo', 
  },
  {
    type: 'video',
    title: 'Cómo checar disponibiladad de cupos y horarios',
    url: 'https://www.youtube.com/watch?v=HCbgv6zgN8w', 
  },
  {
    type: 'image',
    title: 'Cómo tramitar una constancia u otros docs más rápido desde SAES que en gestión',
    url: Tramites, 
    alt: 'Pantalla principal del sistema SAES',
  },
  {
    type: 'video',
    title: 'Cómo desbloquear mi SAES',
    url: 'https://www.youtube.com/results?search_query=desbloquear+mi+saes', 
  },
];

const SAESSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Guía para el SAES</h2>
      <p className="text-gray-600 mb-4">
        Aprende a usar el SAES con estos tutoriales realizados por compañeros. Da clic en el título para abrir el recurso.
      </p>
      <ul className="space-y-6">
        {resources.map((resource, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">{resource.title}</h3>
            {resource.type === 'video' ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Ver Video en YouTube
              </a>
            ) : resource.type === 'image' ? (
              <img
                src={resource.url}
                alt={resource.alt}
                className="rounded-lg shadow-lg max-w-full"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SAESSection;
