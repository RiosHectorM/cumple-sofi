'use client';
import React from 'react';
import MapaHome from './MapaHome';
import Image from 'next/image';
import DataCumple from './DataCumple';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlockImage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between">
        <div className="w-5/12 h-5/12 relative md:w-3/12 md:h-3/12">
          <Image
            src={'/images/telarania2.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="absolute invert"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [1, 0, 1],
              scale: [1],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{ duration: 2, repeat: 20 }}
          >
            <Image
              src={'/images/logoroblox.png'}
              alt="LogoRoblox"
              layout="responsive"
              width={100}
              height={100}
              className="absolute z-30"
            />
          </motion.div>
        </div>
        <div className="w-5/12 h-5/12 relative md:w-3/12 md:h-3/12">
          <Image
            src={'/images/telarania1.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="absolute invert"
          />
          <motion.div
            initial={{ left: 0, scale: 0 }}
            animate={{
              scale: [1, 0.5, 1],
              left: [50, 0, 50],
            }}
            transition={{ duration: 2, repeat: 20 }}
          >
            <Image
              src={'/images/bat.gif'}
              alt="BatRoblox"
              width={200}
              height={200}
              className="absolute z-30 lg:w-80"
            />
          </motion.div>
        </div>
      </div>
      <DataCumple />
      {/* <MapaHome /> */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [2, 1, 2],
        }}
        transition={{ duration: 5, repeat: 20 }}
        className="flex justify-center w-full mt-4"
      >
        <h1 className="font-bold text-2xl bold italic text-white lg:text-4xl lg:mt-10">
          SOFIA
        </h1>
      </motion.div>

      <div className="flex justify-center w-full mt-4 lg:mt-16 lg:text-2xl items-center ">
        <Image
          src={'/icons/cerca.gif'}
          alt="Marcador"
          width={20}
          height={10}
          className="invert lg:w-16"
        />
        <Link
          href="https://maps.app.goo.gl/4Tpf8pEP3cG5PxsQ9"
          target="_blank"
          className="font-bold text-md text-white"
        >
          {' '}
          Como llegar
        </Link>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-5/12 h-5/12 relative md:w-3/12 md:h-3/12">
          <Image
            src={'/images/telarania1.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="rotate-180 absolute invert"
          />
          <motion.div
            initial={{ translateX: -200, scale: 0 }}
            animate={{
              translateX: [0, -200, 0],
              scale: [1, 0.5, 1],
              left: [50, 0, 50],
            }}
            transition={{ duration: 2, repeat: 20 }}
          >
            <Image
              src={'/images/foxy.png'}
              alt="Foxy"
              width={200}
              height={200}
              className="absolute z-10 lg:w-80"
            />
          </motion.div>
        </div>
        <div className="w-5/12 h-5/12 relative md:w-3/12 md:h-3/12">
          <Image
            src={'/images/telarania2.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="rotate-180 absolute invert"
          />
          <motion.div
            initial={{ translateY: 200, scale: 0 }}
            animate={{
              translateY: [0, 200, 0],
              scale: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: 20 }}
          >
            <Image
              src={'/images/piza.gif'}
              alt="PizaCat"
              width={200}
              height={200}
              className="absolute z-10 lg:w-80"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlockImage;
