import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaWrench, FaHardHat } from 'react-icons/fa';

const services = [
  {
    icon: <FaTools className="text-5xl text-primary mb-4" />,
    title: 'Reformas',
    description: 'Impermeabilização, laudos e garantias, serviços elétricos e hidráulicos, pressurização residencial e comercial, pintura interna e externa, vidraçaria, etc.'
  },
  {
    icon: <FaWrench className="text-5xl text-primary mb-4" />,
    title: 'Reparos',
    description: 'Impermeabilização de piscinas e ofurôs, reparos em torneiras, troca de registros, resistências, substituição de pisos e azulejos, troca de fechaduras, etc.'
  },
  {
    icon: <FaHardHat className="text-5xl text-primary mb-4" />,
    title: 'Construções',
    description: 'Oferecemos soluções em construção em: Colunas, Vigas, Sapatas, Baldrame, Alicerce, Paredes, Bloco de Tijolo de barro ou cerâmico e Telhados, etc.'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;