import React from 'react'
import { FaGithub, FaLinkedinIn, FaReact, FaVuejs, FaWhatsapp } from "react-icons/fa";
import { SiAngular, SiTailwindcss } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/idreesbalaumar"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/idreesbalaumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/+2348066679100"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiAngular />
          </span>
          <span className="bannerIcon">
            <FaVuejs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media