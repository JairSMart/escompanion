import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, GraduationCap, FileText, Calendar, Hospital } from 'lucide-react';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const faqData = {
    academic: [
      {
        id: 'irregular',
        question: '¿Qué es ser irregular?',
        answer: 'Es tener una o más materias reprobadas, hasta después de los periodos de extraordinarios, así que todavía las puedes salvar en esa instancia antes de convertirte en irregular e irte a ETS.',
        tags: ['académico', 'estatus'],
      },
      {
        id: 'ets',
        question: '¿Qué es un ETS?',
        answer: 'Dentro del IPN no es una Enfermedad de Transmisión Sexual xD Es el Examen A Titulo de Suficiencia, que se realiza como examen único cuando repruebas una materia para demostrar que tienes los conocimientos suficientes. Siempre hay dos rondas aunque en calendario solo se marca la ronda ordinaria, pero también existen los especiales, que se realizan el primer viernes de cada semestre.',
        tags: ['exámenes', 'académico'],
      },
      {
        id: 'desfase',
        question: '¿Qué es un desfase?',
        answer: 'Es cuando adeudas una materia por más de un año desde que la reprobaste. Es decir, tienen que pasar 2 semestres después de que la reprobaste por primera vez para que se te desfase. En ese inter de 2 semestres puedes ocupar o no tu recurse, pero el tiempo sigue contando.',
        tags: ['académico', 'estatus'],
      },
      {
        id: 'recurse',
        question: '¿Cuándo ocupar mi recurse?',
        answer: 'Puedes ocuparlo al siguiente semestre inmediato de que repruebas una materia o dejar pasar hasta un semestre para meterlo, pero no más o se te desfasa y tendrás que meter carta de 24 créditos o dictamen para que te dejen utilizar ese recurse que no usaste todavía.',
        tags: ['académico', 'recurse'],
      },
      {
        id: 'baja-recurse',
        question: '¿Puedo dar de baja mi recurse?',
        answer: 'No, el recurse no se puede dar de baja a menos claro que sea por baja temporal o definitiva.',
        tags: ['académico', 'recurse'],
      },
    ],
    administrative: [
      {
        id: 'dictamen',
        question: '¿Qué es un dictamen?',
        answer: 'El dictamen es aquel que tienes que tramitar una vez que se haya cumplido el plazo de más de un año que cursaste y reprobaste una materia por primera vez. Porque se te desfasa ya no por primera vez sino por segunda o tercera, etc. Por eso es que los que llenan el formulario de la carta de 24 créditos sí les generan cita de reinscripción porque es desfase por primera vez. Pero a los que es por segunda, les llega un correo diciendo que tienen que esperar una resolución para su inscripción, o sea que básicamente ya tienen que tramitar dictamen y es un semestre de descansito por lo menos en lo que les dan respuesta.',
        tags: ['trámites', 'administrativo'],
      },
      {
        id: 'carta-24',
        question: '¿Qué es la carta de 24 créditos?',
        answer: '24 créditos es un dictamen con ESCOM para cuando tienes desfase por primera vez. Si el total de créditos de tus adeudos es menor a 24 créditos, puedes meter la carta y te dejarán inscribir recurses si aún tienes disponibles o alguna materia extra siempre y cuando no rebasen los 24 créditos en total.',
        tags: ['trámites', 'administrativo'],
      },
      {
        id: 'sobrecupos',
        question: '¿Qué son los sobrecupos?',
        answer: 'Para empezar, no son sobrecupos. Sobrecupo sería que sobre los grupos llenos que ya hay dieran lugares extra, pero eso involucraría bancas extra también, y no. Así que son lugares que se habilitan porque alguien pasa su materia en ETS especial, la da de baja, se dictamina, yo qué sé.',
        tags: ['administrativo', 'inscripciones'],
      },
      {
        id: 'baja-materia',
        question: '¿Cómo doy de baja una materia?',
        answer: 'Durante las primeras 3 semanas de iniciado el semestre se publica en gestión el formulario para hacer tu registro con la respectiva justificación de la baja. En caso de que se trate de un profe "sin asignar" o "en contratación" puede haber prórroga de tiempo.',
        tags: ['trámites', 'bajas'],
      },
      {
        id: 'beca-institucional',
        question: '¿Qué es la beca institucional?',
        answer: 'Es aquella que puedes solicitar si y solo si eres alumno regular (sin adeudos) y dependiendo de tu promedio te entregan más o menos dinero. Siempre sale publicada la convocatoria y haces tu registro en el SIBEC.',
        tags: ['becas', 'administrativo'],
      },
    ],
    medical: [
      {
        id: 'justificacion',
        question: '¿Cómo justificar una falta?',
        answer: 'Con tu receta de algún doctor particular o del seguro pasas a servicio médico a que te la sellen y luego ya sea que se la muestres directo a tu profe o también servicio médico está encargado de hacerles llegar la justificación por correo a los profes.',
        tags: ['médico', 'faltas'],
      },
      {
        id: 'imss',
        question: '¿Dónde obtener mi cédula PrevenIMSS y pólizas del seguro?',
        answer: 'En el SISMI (Sistema Institucional de Servicio Médico Integral) del IPN, sin iniciar sesión, sino clic en el recuadro amarillo.',
        tags: ['médico', 'IMSS'],
      },
      {
        id: 'correo-bloqueado',
        question: '¿Qué hago si se me bloqueó mi correo institucional?',
        answer: 'Tienes que ya sea acudir a la UDI (Unidad de Informática) en la escuela o enviar un correo a udi_escom@ipn.mx donde te pedirán los siguientes: capturas de tu problema, prueba de antivirus rápida, identificación, NOMBRE COMPLETO, ROL, CORREO INSTITUCIONAL, CONTRASEÑA, BOLETA, CURP, CORREO ALTERNATIVO, TELÉFONO. Con eso te responderán en días hábiles con una nueva contraseña y ya desbloqueada.',
        tags: ['correo', 'administrativo'],
      },
    ],
  };

  const categories = [
    { id: 'all', name: 'Todas', icon: GraduationCap },
    { id: 'academic', name: 'Académicas', icon: FileText },
    { id: 'administrative', name: 'Administrativas', icon: Calendar },
    { id: 'medical', name: 'Médicas', icon: Hospital },
  ];

  const filteredQuestions = useMemo(() => {
    let questions = [];
    Object.entries(faqData).forEach(([category, items]) => {
      if (activeCategory === 'all' || activeCategory === category) {
        questions.push(...items);
      }
    });

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      questions = questions.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return questions;
  }, [searchQuery, activeCategory]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Barra de búsqueda */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Busca tu pregunta aquí..."
          className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-4 text-gray-400" size={24} />
      </div>

      {/* Categorías */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              activeCategory === id ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Icon size={20} />
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* Lista de preguntas */}
      <div className="space-y-4">
        {filteredQuestions.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  expandedId === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedId === item.id && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-700">{item.answer}</p>
                <div className="mt-2 flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
