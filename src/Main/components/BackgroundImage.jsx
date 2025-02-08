// components/BackgroundImage.jsx
import React from 'react';

const BackgroundImage = ({ src }) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full -z-10'>
      <img
        src={src}
        alt='배경'
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default BackgroundImage;
