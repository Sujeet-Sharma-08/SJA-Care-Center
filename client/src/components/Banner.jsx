import React from 'react';

import BannerImage from '../assets/bannerImage.jpg'

const Banner = () => {
  return (
    <div className='mt-[6.4rem] md:mt-[10rem] w-full h-64'>
      <img src={BannerImage} alt="Banner" className="w-full object-cover"/>
    </div>
  );
}

export default Banner;

