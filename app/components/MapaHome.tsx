import React from 'react';

const MapaHome = () => {
  return (
    <div className="flex w-full h-1/2 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.946956261794!2d-64.19191522522901!3d-31.415587496211224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2818f7425f9%3A0x51c8bec7678fed01!2sTorre%20Angela!5e0!3m2!1ses!2sar!4v1698362586262!5m2!1ses!2sar"
        loading="lazy"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default MapaHome;
