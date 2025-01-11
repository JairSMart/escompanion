import React, { useState } from 'react';
import { ChevronRight, Clock, FileText, Users, CheckCircle } from 'lucide-react';

const ProcessViewer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const process = {
    title: 'Procesos Administrativos y Académicos',
    steps: [
      {
        title: 'Inscripción/Reinscripción',
        icon: <Clock className="w-6 h-6 text-blue-500" />, 
        content: 'Proceso para inscribirte o reinscribirte en ESCOM.',
        details: [
          'Consulta el calendario académico para las fechas importantes: ' +
            '<a href="https://www.ipn.mx/assets/files/website/docs/inicio/calendarioipn-escolarizada.pdf" target="_blank" class="text-blue-500 underline">Ver calendario académico</a>.',
          'Verifica tu situación académica en SAES: ' +
            '<a href="https://www.saes.ipn.mx" target="_blank" class="text-blue-500 underline">Acceder a SAES</a>.',
          'Prepara tus documentos: boleta, comprobante de pago y credencial vigente.',
          'Accede a SAES el día de tu cita y selecciona tus materias.',
          'Confirma tu horario y descarga tu comprobante de inscripción.'
        ],
      },
      {
        title: 'Exámenes A Titulo de Suficencia (ETS)',
        icon: <FileText className="w-6 h-6 text-blue-500" />, 
        content: 'Proceso para presentar ETS en ESCOM.',
        details: [
          'Consulta las fechas de registro de ETS en el calendario académico: ' +
            '<a href="https://www.ipn.mx/assets/files/website/docs/inicio/calendarioipn-escolarizada.pdf" target="_blank" class="text-blue-500 underline">Fechas de ETS</a>.',
          'Regístrate en SAES y selecciona las materias a presentar: ' +
            '<a href="https://www.saes.ipn.mx" target="_blank" class="text-blue-500 underline">Registrar ETS</a>.',
          'Realiza el pago correspondiente y conserva tu comprobante.',
          'Preséntate al ETS con tu credencial y comprobante de inscripción.',
          'Confirma el aula asignada con antelación.'
        ],
      },
      {
        title: 'Trámite de Baja Temporal o Definitiva',
        icon: <Users className="w-6 h-6 text-blue-500" />, 
        content: 'Pasos para solicitar una baja temporal o definitiva.',
        details: [
          'Descarga el formato correspondiente desde el portal de ESCOM: ' +
            '<a href="https://www.escom.ipn.mx/htmls/escomunidad/formatosDocumentos.php#" target="_blank" class="text-blue-500 underline">Descargar formato</a>.',
          'Llena el formato y anexa los documentos justificativos.',
          'Entrega los documentos en Gestión Escolar.',
          'Espera la resolución de tu solicitud.'
        ],
      },
      {
        title: 'Trámite de Dictámenes',
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />, 
        content: 'Cómo gestionar dictámenes académicos.',
        details: [
          'Para la Carta de 24 Créditos: llena el formato y entrégalo en COSIE: ' +
          '<a href="https://www.escom.ipn.mx/htmls/escomunidad/formatosDocumentos.php#" target="_blank" class="text-blue-500 underline">Descargar formato</a>.',
          'Para Dictamen ESCOM: presenta los documentos requeridos en COSIE: ' +
          '<a href="https://www.escom.ipn.mx/htmls/escomunidad/formatosDocumentos.php#" target="_blank" class="text-blue-500 underline">Descargar formato</a>.',
          'Para Dictamen COSIE: incluye una carta justificativa y espera la resolución: ' +
          '<a href="https://www.escom.ipn.mx/htmls/escomunidad/formatosDocumentos.php#" target="_blank" class="text-blue-500 underline">Descargar formato</a>.'
        ],
      },
      {
        title: 'Gestión de Becas',
        icon: <Clock className="w-6 h-6 text-blue-500" />, 
        content: 'Proceso para gestionar becas en el IPN.',
        details: [
          'Consulta la convocatoria en SIBEC: ' +
            '<a href="https://www.sibec.ipn.mx" target="_blank" class="text-blue-500 underline">Acceder a SIBEC</a>.',
          'Llena el formulario de registro en el sistema.',
          'Sube los documentos requeridos como comprobante de ingresos y boleta.',
          'Espera la resolución y verifica tu estatus en SIBEC.'
        ],
      },
      {
        title: 'Cambio de Plantel o Carrera',
        icon: <FileText className="w-6 h-6 text-blue-500" />, 
        content: 'Pasos para cambiar de plantel o carrera dentro del IPN.',
        details: [
          'Asegúrate de cumplir con los requisitos mínimos: promedio y un semestre aprobado.',
          'Solicita el formato de cambio en Gestión Escolar.',
          'Entrega el formato con los documentos requeridos como tu boleta y carta justificativa.',
          'Espera la resolución de tu solicitud.'
        ],
      },
      {
        title: 'Justificación de Faltas',
        icon: <Users className="w-6 h-6 text-blue-500" />, 
        content: 'Proceso para justificar faltas ante los profesores.',
        details: [
          'Consigue un certificado médico de un doctor particular o del seguro.',
          'Lleva el certificado a Servicio Médico de ESCOM para que lo sellen.',
          'Entrega la justificación al profesor o solicita que Servicio Médico lo envíe.'
        ],
      },
      {
        title: 'Reinscripción por Sobrecupos',
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />, 
        content: 'Pasos para reinscribirte en materias con sobrecupo.',
        details: [
          'Identifica las materias disponibles en SAES.',
          'Llena el formulario habilitado durante la segunda semana de clases.',
          'Espera tu cita para realizar el registro en los grupos con espacios disponibles.'
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">{process.title}</h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 mb-4">
          {process.steps.map((step, index) => (
            <button
              key={index}
              className={`flex flex-col items-center w-40 p-2 border rounded-lg cursor-pointer hover:bg-blue-100 transition-all ${
                activeStep === index ? 'bg-blue-200 border-blue-500' : 'bg-white'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {step.icon}
              <span className="text-sm font-medium mt-2 text-center">{step.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center gap-4 mb-4">
          {process.steps[activeStep].icon}
          <h3 className="text-xl font-semibold text-blue-600">{process.steps[activeStep].title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{process.steps[activeStep].content}</p>
        <div
          className="p-4 bg-gray-50 border-t"
          dangerouslySetInnerHTML={{ __html: process.steps[activeStep].details.join('<br>') }}
        ></div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          className={`px-4 py-2 rounded-lg ${
            activeStep === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={activeStep === 0}
        >
          Anterior
        </button>
        <button
          onClick={() => setActiveStep(Math.min(process.steps.length - 1, activeStep + 1))}
          className={`px-4 py-2 rounded-lg ${
            activeStep === process.steps.length - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={activeStep === process.steps.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProcessViewer;
