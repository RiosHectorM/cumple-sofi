import React from 'react';
import MapaHome from './MapaHome';
import Image from 'next/image';
import DataCumple from './DataCumple';

const BlockImage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between">
        <div className="w-1/4 h-1/4 relative">
          <Image
            src={'/images/telarania2.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="absolute"
          />
          <Image
            src={'/images/logoroblox.png'}
            alt="LogoRoblox"
            layout="responsive"
            width={100}
            height={100}
            className="absolute z-10"
          />
        </div>
        <div className="w-1/4 h-1/4 relative">
          <Image
            src={'/images/telarania1.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="absolute"
          />
          <Image
            src={'/images/bat.gif'}
            alt="BatRoblox"
            width={100}
            height={100}
            className="absolute z-10"
          />
        </div>
      </div>
      <DataCumple />
      <MapaHome />
      <div className="flex w-full justify-between">
        <div className="w-1/4 h-1/4 relative">
          <Image
            src={'/images/telarania1.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="rotate-180 absolute"
          />
          <Image
            src={'/images/foxy.png'}
            alt="Foxy"
            width={100}
            height={100}
            className="absolute z-10"
          />
        </div>
        <div className="w-1/4 h-1/4 relative">
          <Image
            src={'/images/telarania2.png'}
            alt="Telarania"
            layout="responsive"
            width={100}
            height={100}
            className="rotate-180 absolute"
          />
          <Image
            src={'/images/piza.gif'}
            alt="PizaCat"
            width={100}
            height={100}
            className="absolute z-10"
          />
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
