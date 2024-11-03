import React from "react";

const ProjectCard = ({ imgSrc, title, tags, projectLink, githubLink}) => {
  return (
    <div
      className={
        "scale-1 relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5"
      }
    >
      {/* This is the Image */}
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt="" loading="lazy" className="img-cover" />
      </figure>
      {/* This is the Title and Tags */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-normal mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-100 transition-colors">
          <a href={githubLink} className="flex place-items-center z-20" target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>
      </div>

      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};

export default ProjectCard;
