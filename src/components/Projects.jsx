import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import toDoListImage from "/images/projects/to-do-list-image.png";
import blogAppImage from "/images/projects/blog-app-image.png";
import weatherAppImage from "/images/projects/weather-app-image.png";
import triviaAppImage from "/images/projects/trivia-app-image.png";
import ecommerceImage from "/images/projects/ecommerce-image.png";
import portfolioImage from "/images/projects/portfolio-image.png";
import tetrisImage from "/images/projects/tetris-image.png";
import pongImage from "/images/projects/pong-image.png";
import battleshipImage from "/images/projects/battleship-image.png";
import bfsImage from "/images/projects/bfs-image.png";
import decibelAlertBraceletImage from "/images/projects/decibel-alert-bracelet-image.png";
import ohmmeterImage from "/images/projects/ohmmeter-image.png";
import rfidPunchClockImage from "/images/projects/rfid-punch-clock-image.png";
import chatAppImage from "/images/projects/chat-app-image.png";


const projectsList = [
  {
    imgSrc: chatAppImage,
    title: "Chat app",
    tags: ["Web-design","Development"],
    projectLink: "https://github.com/truongblake/chat-app",
    githubLink: "https://github.com/truongblake/chat-app",
  },
  {
    imgSrc: toDoListImage,
    title: "To-do app",
    tags: ["Web-design"],
    projectLink: "https://to-do-list-sigma-opal.vercel.app/",
    githubLink: "https://github.com/truongblake/to-do-list",
  },
  {
    imgSrc: blogAppImage,
    title: "Blog app",
    tags: ["API", "NextJs"],
    projectLink: "https://github.com/truongblake/blog-app",
    githubLink: "https://github.com/truongblake/blog-app",
  },
  {
    imgSrc: weatherAppImage,
    title: "Weather app",
    tags: ["Development", "API"],
    projectLink: "https://weather-app-azure-chi-33.vercel.app/",
    githubLink: "https://github.com/truongblake/weather-app",
  },
  {
    imgSrc: triviaAppImage,
    title: "Trivia app",
    tags: ["Development", "API"],
    projectLink: "https://weather-app-hfjt.vercel.app/",
    githubLink: "https://github.com/truongblake/trivia-app",
  },
  {
    imgSrc: ecommerceImage,
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/truongblake/eccomerce",
    githubLink: "https://github.com/truongblake/eccomerce",
  },
  {
    imgSrc: portfolioImage,
    title: "Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://blaketruong.com/",
    githubLink: "https://github.com/truongblake",
  },
  {
    imgSrc: tetrisImage,
    title: "Tetris Clone",
    tags: ["Java", "Development"],
    projectLink: "https://github.com/truongblake/tetris-java",
    githubLink: "https://github.com/truongblake/tetris-java",
  },
  {
    imgSrc: pongImage,
    title: "Pong Clone",
    tags: ["Python", "Development"],
    projectLink: "https://github.com/truongblake/pong-python",
    githubLink: "https://github.com/truongblake/pong-python",
  },
  {
    imgSrc: battleshipImage,
    title: "Battleship",
    tags: ["Java", "Development"],
    projectLink: "https://github.com/truongblake/Battleship-java",
    githubLink: "https://github.com/truongblake/Battleship-java",
  },
  {
    imgSrc: bfsImage,
    title: "Unix-Like File System",
    tags: ["Data Structure", "Algorithms", "Operating System", "C"],
    projectLink: "https://github.com/truongblake/bfs",
    githubLink: "https://github.com/truongblake/bfs",
  },
  {
    imgSrc: decibelAlertBraceletImage,
    title: "Decibel Alert Bracelet",
    tags: ["Embedded System","C++","Circuit Analysis"],
    projectLink: "https://github.com/truongblake",
    githubLink: "https://github.com/truongblake",
  },
  {
    imgSrc: ohmmeterImage,
    title: "Ohmmeter",
    tags: ["Embedded System","C++","Circuit Analysis"],
    projectLink: "https://github.com/truongblake",
    githubLink: "https://github.com/truongblake",
  },
  {
    imgSrc: rfidPunchClockImage,
    title: "RFID Punch Clock",
    tags: ["Embedded System","C++","Circuit Analysis"],
    projectLink: "https://github.com/truongblake",
    githubLink: "https://github.com/truongblake",
  },
];


const Projects = () => {

  const [tagFilter, setTagFilter] = useState([]);
  const [tagList, setTagList] = useState([]);

  //add tag to filter
  const handleTagClick = (label) => {
    setTagFilter(
      (prevFilter) =>
        prevFilter.includes(label)
          ? prevFilter.filter((tag) => tag !== label) // Remove tag if it’s already in the filter
          : [...prevFilter, label] // Add tag if it’s not in the filter
    );
  };
  // filter the projects based on tagFilter
  const filteredProjects = projectsList.filter(({ tags }) =>
    tagFilter.every((filterTag) => tags.includes(filterTag))
  );

  // -----------------------------------------------------------------
  // Add TagList from Tags
  // -----------------------------------------------------------------

  const acquireTaglist = () => {
    projectsList.forEach(({ tags }) => {
      setTagList((prev) => [...new Set([...prev, ...tags])]); // Combine tags and return
    });
  };

  useEffect(acquireTaglist,[]);

  return (
    <div id="projects" className="section mt-[10em] mb-[3em]">
      <div className="container">
        <h2 className="scale-1 text-5xl font-semibold mb-8">Projects</h2>
        {/* Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tagList.map((label, key) => (
            <span
              key={key}
              onClick={() => handleTagClick(label)}
              className={`scale-1 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors transition-[background] h-8 text-sm grid items-center px-3 rounded-lg cursor-pointer ${
                tagFilter.includes(label)
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredProjects.map(({ imgSrc, title, tags, projectLink, githubLink}, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              githubLink={githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
