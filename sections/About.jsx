'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      
      
      <TypingText title="About H & H" textStyles="text-center"  />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hackers & Hooligans</span> is a technology company aimed at disrupting marketing and customer engagement through 
        {' '}
        <span className="font-extrabold text-white">
          tech-enabled wearables
        </span>{' '}
        & mobile first technology. {' '}
        <br />
        We believe through content,{' '} <span className="font-extrabold text-white">community</span>, and experiences, we can collect 
        meaningful zero & first party data to change the way brands create retenton and {' '} <span className="font-extrabold text-white">loyalty.</span>{' '}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
