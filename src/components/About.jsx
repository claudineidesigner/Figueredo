import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Equipe Figueredo"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem somos nós</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 text-lg mb-6">
              A Figueredo Construções e Reformas é uma empresa voltada para a realização de obras no ramo da construção civil, com foco em manutenção e reforma residencial e comercial.
            </p>
            <p className="text-gray-600 text-lg">
              Um dos nossos principais objetivos é entregar um serviço de excelência a todos os nossos clientes, garantindo uma resolução rápida e eficiente de suas principais necessidades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;