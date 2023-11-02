'use client';
import React from 'react';
import MapaHome from './MapaHome';
import Image from 'next/image';
import DataCumple from './DataCumple';
import { motion } from 'framer-motion';

const BlockImage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between">
        <div className="w-5/12 h-5/12 relative">
          <Image
            src={'/images/telarania2.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="absolute"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [1, 0, 1],
              scale: [1],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{ duration: 2, repeat: 999 }}
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
        <div className="w-5/12 h-5/12 relative">
          <Image
            src={'/images/telarania1.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="absolute"
          />
          <motion.div
            initial={{ left: 0, scale: 0 }}
            animate={{
              scale: [1, 0.5, 1],
              left: [50, 0, 50],
            }}
            transition={{ duration: 2, repeat: 999 }}
          >
            <Image
              src={'/images/bat.gif'}
              alt="BatRoblox"
              width={200}
              height={200}
              className="absolute z-30"
            />
          </motion.div>
        </div>
      </div>
      <DataCumple />
      <MapaHome />
      <div className="flex justify-center w-full">
        <h1 className="font-bold text-2xl italic">SOFIA</h1>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-5/12 h-5/12 relative">
          <Image
            src={'/images/telarania1.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="rotate-180 absolute"
          />
          <motion.div
            initial={{ translateX: -200, scale: 0 }}
            animate={{
              translateX: [0, -200, 0],
              scale: [1, 0.5, 1],
              left: [50, 0, 50],
            }}
            transition={{ duration: 2, repeat: 999 }}
          >
            <Image
              src={'/images/foxy.png'}
              alt="Foxy"
              width={200}
              height={200}
              className="absolute z-10 "
            />
          </motion.div>
        </div>
        <div className="w-5/12 h-5/12 relative">
          <Image
            src={'/images/telarania2.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="rotate-180 absolute"
          />
          <motion.div
            initial={{ translateY: 200, scale: 0 }}
            animate={{
              translateY: [0, 200, 0],
              scale: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: 999 }}
          >
            <Image
              src={'/images/piza.gif'}
              alt="PizaCat"
              width={200}
              height={200}
              className="absolute z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>

    // <div className="flex w-full flex-col">
    //   <div className="flex w-full justify-between">
    //     <div className="flex w-1/4 h-1/4 relative">
    //       <div >
    //         <Image
    //           src={'/images/telarania2.png'}
    //           alt="Telarania"
    //           layout="fill"
    //         />
    //         <Image
    //           src={'/images/logoroblox.png'}
    //           alt="LogoRoblox"
    //           layout="fill"
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <Image
    //         src={'/images/bat.gif'}
    //         alt="BatRoblox"
    //         width={100}
    //         height={100}
    //       />
    //     </div>
    //   </div>
    //   <MapaHome />
    //   <div className="flex w-full justify-between">
    //     <div>
    //       <Image src={'/images/foxy.png'} alt="Foxy" width={100} height={100} />
    //     </div>
    //     <div>
    //       <Image
    //         src={'/images/piza.gif'}
    //         alt="PizaCat"
    //         width={100}
    //         height={100}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default BlockImage;
