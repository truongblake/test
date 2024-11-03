import React from 'react'
import SkillCard from './SkillCard';
import figmaImg from "/images/figma.svg";
import css3Img from "/images/css3.svg";
import javascriptImg from "/images/javascript.svg";
import nodejsImg from "/images/nodejs.svg";
import expressjsImg from "/images/expressjs.svg";
import mongodbImg from "/images/mongodb.svg";
import reactImg from "/images/react.svg";
import tailwindcssImg from "/images/tailwindcss.svg";
import cPlusPlusImg from "/images/c.svg";
import htmlImg from "/images/html-1.svg";
import vscodeImg from "/images/visual-studio-code-1.svg";
import nextJsImg from "/images/next-js.svg";

const skillItem = [
  {
    imgSrc: figmaImg,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: css3Img,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascriptImg,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: nodejsImg,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: expressjsImg,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongodbImg,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: reactImg,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: tailwindcssImg,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: cPlusPlusImg,
    label: "C++",
    desc: "Language",
  },
  {
    imgSrc: htmlImg,
    label: "Html",
    desc: "Markup Language",
  },
  {
    imgSrc: vscodeImg,
    label: "Visual Studio Code",
    desc: "IDE",
  },
  {
    imgSrc: nextJsImg,
    label: "NextJs",
    desc: "React Framework",
  },
];

const Skill = () => {
  return (
    <section className='section mb-6'>
      <div className='container'>

        <h2 className='scale-1 headline-2'>
          Essential Tools I use
        </h2>

        <p className='scale-1 text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Explore the essential tools and technologies I use to build reliable, user-friendly websites and applications
        </p>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
        {skillItem.map(({imgSrc, label, desc},key)=>(
          <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
