import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {profile} from "../assets";

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
        I'm a B.Tech graduate in Computer Science and Engineering from the prestigious Indian Institute of Technology, Dharwad. I am a skilled software developer with strong foundation in the MERN stack, C++, Python, Java, and Solidity. I have work experience in building user friendly web applications and I stay updated with the latest technological advancements.
<br/> Beyond software development, I have a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, and Blockchain. I also bring problem-solving skills in management, contributing to organizational growth. As a quick learner, I readily adapt to emerging technologies and thrive on collaborating with clients to deliver effective solutions.      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
