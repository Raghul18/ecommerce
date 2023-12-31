import React from 'react';
import bgImage from '@/assets/bg-image.png';

function ShoppingPageHero({heading}) {
  return (
    <section
      className="relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})`}}
    >
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center h-10 lg:flex lg:items-center lg:px-8"
      >
        <h2 className="text-center text-3xl font-bold text-white">{heading}</h2>
      </div>
    </section>
  )
}

export default React.memo(ShoppingPageHero);
