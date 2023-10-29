import React from 'react';
import { Lobster } from 'next/font/google';

const font = Lobster({
  subsets: ['latin'],
  weight: '400',
});

const DataCumple = () => {
  return (
    <div className={`flex justify-center text-center flex-col mt-24 ${font.className}`}>
      <h1>Te invito a mi Cumpleaños</h1>
      <div className="flex text-center justify-center">
        <h2>Lugar: </h2> <h1>27 de Abril 370, Piso 10, Dpto D</h1>
      </div>
      <div className="flex text-center justify-center">
        <h2>Fecha: </h2> <h1>4 de Noviembre</h1>
      </div>
      <div className="flex text-center justify-center">
        <h2>Hora: </h2> <h1>16:00 Hs</h1>
      </div>
    </div>
  );
};

export default DataCumple;
