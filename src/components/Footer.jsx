import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Figueredo</h3>
            <p className="text-gray-300">
              Construções e Reformas com qualidade e excelência.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <p className="text-gray-300 mb-2">(11) 97326-9543</p>
            <p className="text-gray-300">claudinei@duck.com</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Figueredo | Construções e Reformas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;