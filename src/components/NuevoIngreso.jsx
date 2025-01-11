import React, { useState } from 'react';
import { Map, Calendar, BookOpen, Users, Compass, Wrench, DollarSign, FileText } from 'lucide-react';

const NuevoIngreso = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'plataformas',
      title: 'Guías y tutoriales para plataformas esenciales',
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      content: (
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/saes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Uso del SAES: Inscripción y consulta de boletas
            </a>
          </li>
          <li>
            <a
              href="https://www.ipn.mx/daes/servicios/becas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Uso del SIBEC: Solicitud de becas
            </a>
          </li>
          <li>
            <a
              href="https://www.ipn.mx/correo-electronico.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Activación del correo institucional
            </a>
          </li>
        </ul>
      ),
    },
    {
      id: 'mapas',
      title: 'Mapas de ESCOM',
      icon: <Map className="w-6 h-6 text-blue-500" />,
      content: (
        <p>
          Encuentra aquí el mapa de las instalaciones de ESCOM con laboratorios, aulas y servicios destacados:
          <a
            href="https://www.facebook.com/reel/1778006329294456"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ver mapa de ESCOM
          </a>
        </p>
      ),
    },
    {
      id: 'calendario',
      title: 'Calendario académico',
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      content: (
        <p>
          Consulta el calendario académico del IPN para conocer las fechas importantes:
          <a
            href="https://www.ipn.mx/assets/files/website/docs/inicio/calendarioipn-escolarizada.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ver calendario académico
          </a>
        </p>
      ),
    },
    {
      id: 'recomendaciones',
      title: 'Recomendaciones académicas',
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      content: (
        <ul className="list-disc pl-6">
          <li>Prioriza materias fundamentales como Matemáticas Discretas y Programación.</li>
          <li>Consulta horarios eficientes y organiza tus tiempos.</li>
          <li>Revisa las calificaciones de profesores en plataformas como Koala o Polivalente.</li>
        </ul>
      ),
    },
    {
      id: 'clubes',
      title: 'Clubes y actividades extracurriculares',
      icon: <Users className="w-6 h-6 text-blue-500" />,
      content: (
        <ul className="list-disc pl-6">
          <li>Club de programación y algoritmia.</li>
          <li>Grupos de robótica y ajedrez.</li>
          <li>Eventos como hackatones o Expo ESCOM.</li>
        </ul>
      ),
    },
    {
      id: 'transporte',
      title: 'Guía de transporte y llegada',
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      content: (
        <p>
          Aprende cómo llegar a ESCOM utilizando transporte público o privado:
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ver en Google Maps
          </a>
        </p>
      ),
    },
    {
      id: 'becas',
      title: 'Información sobre becas y apoyos',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      content: (
        <p>
          Infórmate sobre las becas disponibles y los requisitos:
          <a
            href="https://www.ipn.mx/daes/servicios/becas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ver becas IPN
          </a>
        </p>
      ),
    },
    {
      id: 'normas',
      title: 'Normatividad y reglamentos',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      content: (
        <p>
          Descarga el reglamento escolar del IPN aquí:
          <a
            href="https://www.ipn.mx/assets/files/esca-sto/img/docs/estudiantes/Gestión/normatividad_aplicable.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ver reglamento
          </a>
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Información para Nuevo Ingreso</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-50"
            onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
          >
            <div className="flex items-center gap-4">
              {section.icon}
              <h2 className="text-lg font-semibold text-blue-600">{section.title}</h2>
            </div>
            {activeSection === section.id && (
              <div className="mt-4 text-gray-600">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuevoIngreso;
