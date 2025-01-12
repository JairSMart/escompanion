import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Calculator, HelpCircle, Mail } from 'lucide-react'; 
const Layout = ({ children }) => {
  const menuItems = [
    { icon: Home, label: 'Inicio', path: '/' },
    { icon: BookOpen, label: 'Procesos', path: '/processviewer' },
    { icon: Calculator, label: 'Calculadora', path: '/dictamencalculator' },
    { icon: HelpCircle, label: 'Preguntas Frecuentes', path: '/faqsection' },
    { icon: BookOpen, label: 'SAES', path: '/saes' },
    { icon: Mail, label: 'Nuevo Ingreso', path: '/nuevoingreso' },
    { icon: Mail, label: 'Contacto', path: '/contact' }, 
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 border-gray-200 px-4 py-2.5 rounded">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
      <img src="/logo.ico" alt="EscomPanion Logo" className="w-8 h-8 mr-2" />
      <span className="self-center text-white text-xl font-semibold whitespace-nowrap">
        EscomPanion
      </span>
    </a>
    <div className="hidden w-full md:block md:w-auto">
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className="flex items-center gap-2 py-2 px-4 text-white hover:bg-blue-700 rounded"
            >
              <Icon size={20} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Desarrollado por Jair Salvador García Martínez</p>
          <p>Escuela Superior de Cómputo - IPN</p>
          <p>Copyright © 2025. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
