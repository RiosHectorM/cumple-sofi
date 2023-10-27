import Image from 'next/image';
import React from 'react';

const CardSofi = () => {
  return (
    <div>
      <Image
        src={'/cardData.png'}
        alt="DataCumple"
        width={500}
        height={800}
      />
    </div>
  );
};

export default CardSofi;
