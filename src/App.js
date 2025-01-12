import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProcessViewer from './components/ProcessViewer';
import FAQSection from './components/FAQSection';
import DictamenCalculator from './components/DictamenCalculator';
import SAESSection from './components/SAESSection';
import NuevoIngreso from './components/NuevoIngreso';
import Contact from './components/Contact';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, HelpCircle, Mail, User } from 'lucide-react';
import logo from './components/logo.png';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/processviewer" component={ProcessViewer} />
          <Route path="/faqsection" component={FAQSection} />
          <Route path="/dictamencalculator" component={DictamenCalculator} />
          <Route path="/saes" component={SAESSection} />
          <Route path="/nuevoingreso" component={NuevoIngreso} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </Router>
  );
};

const FeaturedProjectsCarousel = () => {
  const projects = [
    { title: 'Escom Groups', url: 'https://escom-phone-groups.web.app/?fbclid=IwY2xjawHj7NtleHRuA2FlbQIxMAABHXGgIgksNSa1z7BFLGD-1tB4kT0zrtRf7J82Z8OywvNtU2vuZLmL14nJ0A_aem_nvSDXLVw4q3NXm3SD-Q4tA#rulesList' },
    { title: 'Biblioteca Digital para la ESCOM', url: 'https://correoipn-my.sharepoint.com/personal/lespinosas1800_alumno_ipn_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flespinosas1800_alumno_ipn_mx%2FDocuments%2FIngeniería%20en%20Sistemas%20Computacionales%20Plan%202020%20-%20Bibliografía&ga=1' },
    { title: 'MODS SAES', url: 'https://chromewebstore.google.com/detail/mods-saes/okaihfccgfhcjfineancjmhbooocebhn'},
    { title: 'WIMP (Where Is My Professor)', url: 'https://wimp-b88e49d42f9b.herokuapp.com'},
    { title: 'YeahNotes', url: 'https://yeahnotes.com/login'},
    { title: 'ReferenciasProfes', url: 'https://www.misprofesores.com/escuelas/IPN-ESCOM_1694'}
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h3 className="text-xl font-semibold text-center mb-6">Proyectos Destacados</h3>
      <div className="flex overflow-x-auto gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-blue-100 text-blue-600 p-4 rounded-lg shadow-md hover:bg-blue-200 transition-all"
          >
            {project.title}
          </a>
        ))}
      </div>
    </div>
  );
};

// Agregarlo al Home
const Home = () => (
  <div className="text-center py-12">
    <div className="flex justify-center mb-8">
      <img src={logo} alt="EscomPanion Logo" className="w-24 h-24" />
    </div>
    <h1 className="text-4xl font-bold text-primary mb-6">Bienvenido a EscomPanion</h1>
    <p className="text-lg text-gray-600 mb-12">Tu plataforma para trámites y asistencia académica.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Link to="/processviewer" className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <BookOpen className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Procesos</h2>
          <p className="text-gray-600">Explora los procesos académicos paso a paso.</p>
        </div>
      </Link>
      <Link to="/dictamencalculator" className="block">
        <div className="bg-cyan-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Calculator className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Calculadora</h2>
          <p className="text-gray-600">Verifica tu situación académica y estado de dictamen.</p>
        </div>
      </Link>
      <Link to="/faqsection" className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <HelpCircle className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Encuentra respuestas a las dudas más comunes.</p>
        </div>
      </Link>
      <Link to="/saes" className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <BookOpen className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">SAES</h2>
          <p className="text-gray-600">Accede a recursos útiles para usar el SAES.</p>
        </div>
      </Link>
      <Link to="/nuevoingreso" className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <User className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Nuevo Ingreso</h2>
          <p className="text-gray-600">Encuentra recursos y guías útiles para nuevos alumnos.</p>
        </div>
      </Link>
      <Link to="/contact" className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Mail className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Contacto</h2>
          <p className="text-gray-600">Comunícate conmigo para cualquier consulta.</p>
        </div>
      </Link>
    </div>
    <FeaturedProjectsCarousel />
  </div>
);

export default App;
