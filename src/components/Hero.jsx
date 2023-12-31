import React from 'react';
import LazyLoad from 'react-lazyload';
import bgImage from '@/assets/bg-image.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <LazyLoad height={"800px"}>
        <section
          className="relative bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})`}}
        >
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl lg:text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong className="block font-extrabold text-rose-700"> Favourite Product </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap gap-4 lg:text-center">
                <Link
                  to="/shop"
                  className="block w-full lg:mx-auto rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          </section>
        </LazyLoad>
    </>
  );
}

export default Hero;
