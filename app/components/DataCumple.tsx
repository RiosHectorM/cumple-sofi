import React from 'react';
import { Lobster } from 'next/font/google';
import { motion } from 'framer-motion';

const font = Lobster({
  subsets: ['latin'],
  weight: '400',
});

const DataCumple = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [1],
        scale: [1],
        borderRadius: ['10%', '30%', '10%'],
      }}
      transition={{ duration: 2, repeat: 999 }}
      className={`flex justify-center text-center flex-col mt-24 ${font.className} z-20 mx-4 my-2 bg-gradient-to-r from-violet-400 to-violet-800 rounded-2xl opacity-75 text-white`}
    >
      <p className="text-fluorescent-purple text-4xl">
        Te invito a mi Cumpleaños
      </p>
      <div className="flex text-center justify-center">
        <h1 className="text-fluorescent-purple text-2xl">
          27 de Abril 370, Piso 10, Dpto D
        </h1>
      </div>
      <div className="flex text-center justify-center">
        <h1 className="text-fluorescent-purple text-2xl">4 de Noviembre</h1>
      </div>
      <div className="flex text-center justify-center">
        <h1 className="text-fluorescent-purple text-2xl">16:00 Hs</h1>
      </div>
    </motion.div>
  );
};

export default DataCumple;
