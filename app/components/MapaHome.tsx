import React from 'react';
import { motion } from 'framer-motion';

const MapaHome = () => {
  return (
    <motion.div className="flex w-full h-1/2 ">
      <motion.iframe
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [1],
          scale: [1],
          borderRadius: ['20%', '40%', '20%'],
        }}
        transition={{ duration: 2, repeat: 20 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.946956261794!2d-64.19191522522901!3d-31.415587496211224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2818f7425f9%3A0x51c8bec7678fed01!2sTorre%20Angela!5e0!3m2!1ses!2sar!4v1698362586262!5m2!1ses!2sar"
        loading="lazy"
        className="w-full rounded-full border-4 border-violet-800 shadow-2xl mx-10"
      ></motion.iframe>
    </motion.div>
  );
};

export default MapaHome;
