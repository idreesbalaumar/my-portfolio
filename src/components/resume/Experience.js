import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer, UI/UX Designer"
            subTitle="Century Information Systems Limited (2020 - 2024)"
            result="Nigeria"
            des="Designed and developed software solutions using Angular, Laravel, Vue, Node.js, and MySQL. Implemented security measures, optimized performance, and utilized tools like Git, Jira, and Trello to ensure reliable, scalable applications."
          />
          <ResumeCard
            title="Head of IT"
            subTitle="Al-Ummah Development Foundation (2015 - Present)"
            result="Nigeria"
            des="Provided technical support, managed websites and social media accounts, and utilized Agile methodologies for timely software delivery. Facilitated IT-driven initiatives to empower the organization."
          />
          <ResumeCard
            title="Head of Training"
            subTitle="Sadja Technology Limited (2014 - 2016)"
            result="Nigeria"
            des="Conducted software development training sessions, coordinated student activities, and facilitated knowledge sharing to build technical expertise."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Redemption Officer"
            subTitle="Fertilizer Distribution Program (2015 - 2020)"
            result="Nigeria"
            des="Facilitated the distribution of fertilizers to farmers, ensuring accurate processing and documentation. Played a key role in streamlining operations to improve efficiency and transparency in the supply chain."
          />
          <ResumeCard
            title="IT Officer"
            subTitle="Al-Ummah Development Foundation (2015 - Present)"
            result="Nigeria"
            des="Oversaw all IT operations, including managing the organization's website, social media accounts, and technical support. Implemented innovative solutions to enhance the foundation's digital presence and facilitated IT-driven community empowerment projects."
          />
          <ResumeCard
            title="Teacher"
            subTitle="Sadja Technology Limited (2014 - 2016)"
            result="Nigeria"
            des="Taught basic computer operations, introducing students to essential IT skills. Coordinated training sessions and provided mentorship to help students develop foundational knowledge in software applications and hardware functionality."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
