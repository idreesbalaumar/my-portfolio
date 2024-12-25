import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Honours Diploma in Information Technology (Software Engineering)"
            subTitle="National Institute for Information Technology (NIIT) (2014 - 2017)"
            result="Distinction"
            des="Specialized training in software engineering, covering programming, systems analysis, and application development to prepare for real-world IT challenges."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Gray's Internal College, Kaduna (2000 - 2006)"
            result="Excellent"
            des="Comprehensive secondary education focusing on foundational subjects and personal development."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Uncle Bado Memorial School, Kaduna (1994 - 2000)"
            result="Outstanding"
            des="Primary education focused on building essential skills and fostering early learning development."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
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
    </motion.div>
  );
}

export default Education