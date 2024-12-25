import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Certified Software Engineer.",
      "Full-Stack Developer.",
      "UI/UX Problem Solver."
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal text-gray-400 uppercase">Welcome to My World</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Idris Bala Umar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#39ff14"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-300">
          I am a Certified Software Engineer specializing in full-stack development.
          With expertise in Angular, Vue, Node.js, React.js, JavaScript, and TypeScript,
          I deliver robust, high-quality solutions. Proficient in Agile methodologies like Scrum,
          I thrive in collaborative workflows, solving complex problems, and creating seamless user experiences.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner