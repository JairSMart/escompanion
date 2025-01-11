import React, { useState, useEffect } from 'react';
import { Calculator, AlertCircle, Calendar } from 'lucide-react';
import preview from "./preview.png";

const DictamenCalculator = () => {
  const [materias, setMaterias] = useState([
    { id: 1, nombre: '', semestreReprobacion: '' },
  ]);
  const [semestreActual, setSemestreActual] = useState('');
  const [programaAcademico, setProgramaAcademico] = useState('');

  const programasAcademicos = {
    "ISC 09": { minima: 19, media: 31 },
    "ISC 20": { minima: 28, media: 55.5 },
    "IIA": { minima: 28, media: 55.5 },
    "LCD": { minima: 28, media: 55.5 },
  };

  useEffect(() => {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const periodo = mes >= 2 && mes <= 7 ? 2 : 1;
    setSemestreActual(`${anio}-${periodo}`);
  }, []);

  const calcularDiferenciaSemestres = (anioActual, periodoActual, anioReprobacion, periodoReprobacion) => {
    return (anioActual - anioReprobacion) * 2 + (periodoActual - periodoReprobacion);
  };

  const generarSemestresETS = (anioInicio, periodoInicio, rondas) => {
    const resultados = [];
    let anio = anioInicio;
    let periodo = periodoInicio;

    for (let i = 0; i < rondas; i++) {
      resultados.push(`${anio}-${periodo} (Ordinarios)`);
      resultados.push(`${anio}-${periodo} (Especiales)`);

      if (periodo === 1) {
        periodo = 2;
      } else {
        periodo = 1;
        anio++;
      }
    }

    return resultados;
  };

  const calcularSituacion = (materia) => {
    if (!materia.semestreReprobacion || !semestreActual) return null;

    const [anioActual, periodoActual] = semestreActual.split('-').map(Number);
    const [anioReprobacion, periodoReprobacion] = materia.semestreReprobacion.split('-').map(Number);

    if (!anioActual || !periodoActual || !anioReprobacion || !periodoReprobacion) {
      return "Formato de semestre incorrecto.";
    }

    const diferenciaSemestres = calcularDiferenciaSemestres(
      anioActual,
      periodoActual,
      anioReprobacion,
      periodoReprobacion
    );

    if (diferenciaSemestres < 2) {
      return 'Irregular / Puede recursar';
    } else if (diferenciaSemestres === 2) {
      return 'Carta de 24 créditos';
    } else if (diferenciaSemestres === 3) {
      return 'Situación de dictamen ESCOM';
    } else {
      return 'Situación de dictamen COSIE';
    }
  };

  const explicarSituacion = (materia) => {
    if (!materia.semestreReprobacion || !semestreActual) return null;

    const [anioActual, periodoActual] = semestreActual.split('-').map(Number);
    const [anioReprobacion, periodoReprobacion] = materia.semestreReprobacion.split('-').map(Number);

    if (!anioActual || !periodoActual || !anioReprobacion || !periodoReprobacion) {
      return "Por favor, ingresa un formato de semestre válido (YYYY-1 o YYYY-2).";
    }

    const diferenciaSemestres = calcularDiferenciaSemestres(
      anioActual,
      periodoActual,
      anioReprobacion,
      periodoReprobacion
    );

    if (diferenciaSemestres < 2) {
      const etsRondas = generarSemestresETS(anioReprobacion, periodoReprobacion, 3);
      return `Reprobaste tu materia en el semestre ${materia.semestreReprobacion}. Puedes presentar las siguientes rondas de ETS: ${etsRondas.join(', ')}, antes de que tengas que trámitar carta de 24 créditos.`;
    } else if (diferenciaSemestres === 2) {
      const anioInicio = periodoActual === 1 ? anioActual : anioActual + 1;
      const periodoInicio = periodoActual === 1 ? 2 : 1;
      const siguientes = generarSemestresETS(anioInicio, periodoInicio, 2);
      return `Tu materia, reprobada en el semestre ${materia.semestreReprobacion}, ya está en primer desfase. Necesitarás tramitar la Carta de 24 créditos para presentar las siguientes rondas de ETS: ${siguientes.join(', ')}. Aunque todavía puedes presentar las dos rondas de ETS del periodo actual ${semestreActual} sin problema.`;
    } else if (diferenciaSemestres === 3) {
      const anioInicio = periodoActual === 1 ? anioActual : anioActual + 1;
      const periodoInicio = periodoActual === 1 ? 2 : 1;
      const siguientes = generarSemestresETS(anioInicio, periodoInicio, 2);
      return `Tu materia, reprobada en el semestre ${materia.semestreReprobacion}, está en segundo desfase. Es necesario tramitar un Dictamen ESCOM para presentar: ${siguientes.join(', ')}.`;
    } else {
      const descansoSemestre = periodoActual === 1 ? `${anioActual}-2` : `${anioActual + 1}-1`;
      const anioInicio = periodoActual === 1 ? anioActual : anioActual + 1;
      const periodoInicio = periodoActual === 1 ? 2 : 1;
      const siguientes = generarSemestresETS(anioInicio, periodoInicio, 2);
      return `Tu materia, reprobada en el semestre ${materia.semestreReprobacion}, está en tercer desfase o más. Deberás tramitar un Dictamen COSIE y "descansar" (no poder inscribir materias) el semestre ${descansoSemestre}. Después del descanso, podrás presentar: ${siguientes.join(', ')}.`;
    }
  };

  const determinarEstatusGeneral = () => {
    const situaciones = materias.map((materia) => calcularSituacion(materia));

    if (!programasAcademicos[programaAcademico]) {
      return 'Por favor selecciona un programa académico válido.';
    }

    const { minima, media } = programasAcademicos[programaAcademico];

    if (situaciones.includes('Situación de dictamen COSIE')) {
      return `Estatus general: Tienes materias en situación de dictamen COSIE. Deberás tramitar el dictamen y descansar un semestre antes de poder reinscribirte.`;
    }

    if (situaciones.includes('Situación de dictamen ESCOM')) {
      return `Estatus general: Tienes materias en situación de dictamen ESCOM. Tu reinscripción estará sujeta a la autorización del dictamen y probablemente se limitará a carga mínima o recurses.`;
    }

    if (situaciones.includes('Carta de 24 créditos')) {
      return `Estatus general: Tienes materias en primer desfase. Solo podrás reinscribirte con hasta 24 créditos, considerando tus materias adeudadas.`;
    }

    if (situaciones.every((situacion) => situacion === 'Irregular / Puede recursar')) {
      return `Estatus general: Puedes reinscribirte con carga mínima (${minima} créditos) o media (${media} créditos), restando los créditos de tus adeudos, y/o tus recurses si los ocupas. Si deseas inscribir o quedas con carga menor a la mínima, deberás tramitar un formato el formato de carga menor a la mínima.`;
    }

    return 'Estatus general: Información insuficiente para determinar tu situación.';
  };

  const resetearCalculadora = () => {
    setMaterias([{ id: 1, nombre: '', semestreReprobacion: '' }]);
    setProgramaAcademico('');
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const periodo = mes >= 2 && mes <= 7 ? 2 : 1;
    setSemestreActual(`${anio}-${periodo}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Calculadora de Dictamen</h2>
        <p className="text-gray-600">Determina tu situación académica con base en tus materias.</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Semestre actual (Formato: YYYY-1 o YYYY-2)</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={semestreActual}
          onChange={(e) => setSemestreActual(e.target.value)}
          placeholder="Ej: 2025-1"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Programa Académico</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={programaAcademico}
          onChange={(e) => setProgramaAcademico(e.target.value)}
        >
          <option value="">Selecciona tu programa</option>
          {Object.keys(programasAcademicos).map((programa) => (
            <option key={programa} value={programa}>
              {programa}
            </option>
          ))}
        </select>
      </div>

      {materias.map((materia, index) => (
        <div key={materia.id} className="mb-4 bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la materia</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={materia.nombre}
                onChange={(e) => {
                  const newMaterias = [...materias];
                  newMaterias[index].nombre = e.target.value;
                  setMaterias(newMaterias);
                }}
                placeholder="Ej: Cálculo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Semestre de reprobación (Formato: YYYY-1 o YYYY-2)</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={materia.semestreReprobacion}
                onChange={(e) => {
                  const newMaterias = [...materias];
                  newMaterias[index].semestreReprobacion = e.target.value;
                  setMaterias(newMaterias);
                }}
                placeholder="Ej: 2024-1"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="flex items-center text-sm text-gray-600">
              <AlertCircle className="w-5 h-5 text-blue-500 mr-2" />
              Situación actual:
              <span
                className={`ml-2 px-3 py-1 rounded-full ${
                  calcularSituacion(materia)?.includes('dictamen')
                    ? 'bg-red-100 text-red-700'
                    : calcularSituacion(materia)?.includes('créditos')
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {calcularSituacion(materia) || 'Pendiente de calcular'}
              </span>
            </p>
            <p className="mt-2 text-sm text-gray-700">
              {explicarSituacion(materia) || 'Introduce los datos para obtener más información.'}
            </p>
          </div>
        </div>
      ))}

      <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <h3 className="font-bold text-blue-700 flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Estatus General
        </h3>
        <p className="mt-2 text-sm text-blue-800">{determinarEstatusGeneral()}</p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setMaterias([...materias, { id: materias.length + 1, nombre: '', semestreReprobacion: '' }])}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Agregar Materia
        </button>
        <button
          onClick={() => setMaterias(materias.slice(0, -1))}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          disabled={materias.length === 1}
        >
          Eliminar Materia
        </button>
        <button
          onClick={resetearCalculadora}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Resetear
        </button>
      </div>
      

      <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h3 className="font-bold text-yellow-700 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Notas Importantes
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-yellow-800">
          <li>• Tienes 6 rondas de ETS antes de llegar a la carta de 24 créditos.</li>
          <li>• La carta de 24 créditos solo aplica al primer desfase.</li>  
          <li>• Tienes 8 rondas de ETS antes de llegar al dictamen COSIE-ESCOM/IPN.</li>
          <li>• En dictamen ante COSIE, te mandan a descansar un semestre.</li>
        </ul>
        <div className="mt-4">
          <img
            src={preview}
            alt="Diagrama de desfase"
            className="max-w-full h-auto rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default DictamenCalculator;
