import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, revupImage, carePortalImage, ecmsProject } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="RevUP Revenue Collection System"
          des="A revenue collection platform with payment management, reports, and receipts with public and admin portals."
          src={revupImage}
          githubLink="https://github.com/idreesbalaumar/revup-frontend"
          demoLink="https://revup-system.onrender.com/"
        />
        <ProjectsCard
          title="Care Portal"
          des="A user-centric platform for managing healthcare services, appointments, and medical records seamlessly."
          src={carePortalImage}
          githubLink="https://github.com/idreesbalaumar/care-portal/"
        />
        <ProjectsCard
          title="Electronic Court Management System"
          des="A platform to digitize case management, automate workflows, and provide real-time access to court records, ensuring efficient and accurate judicial processes."
          src={ecmsProject}
          demoLink="https://portal.centurycodes.ng/"
        />
        <ProjectsCard
          title="Automatic Passport Reminder System (APRS)"
          des="An innovative system for the Nigerian Immigration Service that notifies citizens of passport expirations and renewal requirements via SMS and email, streamlining the renewal process."
          src={projectThree}
          demoLink="https://aprs.com.ng"
        />
        <ProjectsCard
          title="Grabb247: Simplifying Shipping and Delivery Solutions"
          des="A user-friendly platform for instant or scheduled pickups, ensuring safe, efficient goods transportation with real-time updates and transparency."
          src={projectTwo}
          demoLink="https://grabb247.com"
        />
        <ProjectsCard
          title="Al-Ummah Development Foundation (ADF)"
          des="A platform dedicated to socio-economic reform in Northern Nigeria through education, vocational training, and community empowerment, fostering a peaceful and productive society."
          src={projectOne}
          demoLink="https://alummahdevelopmentfoundation.com/"
        />
      </div>
    </section>
  );
}

export default Projects