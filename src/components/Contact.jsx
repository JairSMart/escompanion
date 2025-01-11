import React from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import jairPhoto from "./jair.png";

const Contact = () => {
    return (
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        {/* Imagen y título */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          <img
            src={jairPhoto} 
            alt="Jair García Martínez"
            className="w-32 h-32 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Jair Salvador García Martínez</h2>
            <p className="text-gray-600">
              Desarrollé este proyecto con el objetivo de ayudar a los estudiantes de ESCOM a
              resolver sus dudas sobre procesos académicos y administrativos. Si tienes una duda
              más específica, no dudes en contactarme.
            </p>
          </div>
        </div>
  
        {/* Correo de contacto */}
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Correo de contacto:</p>
          <a
            href="mailto:jairs.g.alterna@gmail.com" 
            className="text-blue-500 hover:underline"
          >
            jairs.g.alterna@gmail.com
          </a>
        </div>
  
        {/* Redes sociales */}
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Otros medios de contacto:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com/jairsalvador.garciamartinez" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/JairSMart" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/garcía-martínez-jair-salvador-b1aa122b1/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;