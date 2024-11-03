import React from "react";
import { Link } from "react-router-dom";
import about1 from "/images/about1.png"
import about2 from "/images/about2.jpg"
import about3 from "/images/about3.png"

const Aboutme = () => {
  return (
    <section className="section mb-[5em]">
      <div className="container">
        <figure className="hidden relative lg:flex justify-center mb-[5em]">
          <img src={about1} width={300} alt="" className="scale-1 z-10 rounded-[5em] border border-zinc-700 lg:scale-1" loading="lazy"/>
          <img src={about2} width={300} alt="" className="scale-1 absolute right-[12em] -top-5 rounded-[5em] border border-zinc-700 lg:scale-1" loading="lazy"/>
          <img src={about3} width={270} alt="" className="scale-1 absolute left-[12em] -top-5 rounded-[5em] border border-zinc-700 lg:scale-1" loading="lazy"/>
        </figure>
        <div>
          <h1 className="scale-1 mb-5 text-6xl">Hi! I'm Blake</h1>
          <p className="scale-1 font-light text-gray-200 text-xl lg:text-2xl">
            I’m a recent graduate from the University of Washington, where I
            studied Computer Engineering. My passion for both hardware and
            software drew me to this field, and I'm especially fascinated by the
            world of Full-Stack Development, where front-end and back-end
            technologies come together seamlessly. The pace of technological
            advancement is incredible, and there’s so much knowledge to explore
            in this field—it’s exhilarating and, honestly, a bit overwhelming!
            But I’m always eager to learn more and dive into new challenges.
          </p>
          <br />
          <p className="scale-1 font-light text-gray-200 text-xl lg:text-2xl flex items-center">
            Feel free to contact me if you're interested in collaborating—I’d love to connect!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
