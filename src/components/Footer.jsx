import React from "react";
import githubicon from "/src/assets/icons8-github-24.png";
import linkedinicon from "/src/assets/icons8-linkedin-24.png";

const Footer = () => {
  return (
    <footer className="mt-3 py-4 relative lg:sticky bottom-0">
      <p className="absolute bottom-5 left-[50%] -translate-x-[50%] text-sm">
        2024 Blake Truong. All rights reserved
      </p>
      <a href="https://github.com/truongblake" target="_blank" rel="noopener noreferrer">
        <img
          className="absolute bottom-5 right-5 scale-1 ring-1 ring-inset ring-zinc-50/10 rounded-3xl hover:bg-zinc-800 transition-colors bg-zinc-700"
          width={40}
          src={githubicon}
          alt=""
        />
      </a>
      <a href="https://linkedin.com/in/bltruong" target="_blank" rel="noopener noreferrer">
        <img
          className="absolute bottom-5 right-20 scale-2 ring-1 ring-inset ring-zinc-50/10 rounded-xl hover:bg-zinc-800 transition-colors bg-zinc-700"
          width={40}
          src={linkedinicon}
          alt=""
        />
      </a>
    </footer>
  );
};

export default Footer;
