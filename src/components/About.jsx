import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='flex justify-between items-center'>
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </div>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className='w-48 h-64 md:w-56 md:h-72 rounded-lg overflow-hidden border-4 border-gray-300 shadow-lg'
        >
          <img
            src={profile}
            alt='Profile'
            className='w-full h-full object-cover'
          />
        </motion.div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I build production-grade GenAI agents for enterprise SAP automation, real systems that replace manual
        workflows, not demos.
        <br /><br />
        At Accenture, I've developed two agentic AI systems on GenWizard, Accenture's internal AI Agent Manager:
        <br /><br />
        <b>1. Pre-Conversion Check Agent</b>: RAG pipeline + Anthropic Claude for autonomous SAP S/4HANA migrationreadiness analysis and error fix generation.
        <br /><br />
        <b>2. Asset Accounting Agent</b>: multi-scenario LLM reasoning over GL inputs, live SAP data via ABAP OData APIs on AWS API Gateway, to-be design recommendations and automated PowerPoint reports.
        <br /><br />
        Open to global opportunities in AI Engineering and Software Development. </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
