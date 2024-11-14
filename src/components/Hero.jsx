import React from "react";
import blob from '/images/blob.svg';
import iconme from '/images/icon-me.png';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="h-[94svh] flex items-center">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 pl-[50px]">
        <div className="pl-[25px]">
          <div className="text-2xl font-medium ">Blake Truong</div>
          <h2 className="text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]">
            Computer Engineer
          </h2>
          <h2 className="text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]">
            & Developer
          </h2>
          <hr className="mt-4 w-[10em]" />
          <div>
            <Link to ='/resume'className="btn mt-4 h-11 bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400">
              Download CV
              <span className="material-symbols-rounded">download</span>
            </Link>
          </div>
        </div>
        <div>
          <figure className="relative">
          <img src={blob} width={400} alt="profile" className="-left-12 -top-5 -z-10 absolute hidden lg:block aspect-auto"/>
            <img src={iconme} width={300} alt="profile" className="scale-1 hidden lg:block aspect-auto"/>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
