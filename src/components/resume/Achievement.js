import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Present</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Head of IT"
            subTitle="Al-Ummah Development Foundation (2015 - Present)"
            result="Nigeria"
            des="Oversaw IT operations, managed the organization's digital presence, and implemented innovative solutions to support socio-economic reform efforts."
          />
          <ResumeCard
            title="Head of Training"
            subTitle="Sadja Technology Limited (2014 - 2016)"
            result="Nigeria"
            des="Facilitated training sessions on software development, mentored students, and coordinated academic activities to enhance IT proficiency."
          />
          <ResumeCard
            title="Software Developer, UI/UX Designer"
            subTitle="Century Information Systems Limited (2020 - 2024)"
            result="Nigeria"
            des="Developed high-quality software solutions and implemented data protection measures while optimizing performance and scalability."
          />
        </div>
      </div>

      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Redemption Officer"
            subTitle="Fertilizer Distribution Program (2015 - 2020)"
            result="Nigeria"
            des="Managed fertilizer distribution processes, ensuring accurate processing and documentation to streamline supply chain operations."
          />
          <ResumeCard
            title="IT Officer"
            subTitle="Al-Ummah Development Foundation (2015 - Present)"
            result="Nigeria"
            des="Provided technical support, managed websites and social media, and leveraged Agile methodologies for IT-driven projects."
          />
          <ResumeCard
            title="Teacher"
            subTitle="Sadja Technology Limited (2014 - 2016)"
            result="Nigeria"
            des="Taught basic computer operations, coordinated student activities, and introduced foundational IT skills to learners."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
