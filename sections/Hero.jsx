'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-4`}>
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <img
            src="/nameLogo.svg"
            alt="hero_cover"
            className="w-full sm:h-[100px] h-[100px] object-fit z-10 relative pb-3"
          />
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
         <iframe src="https://www.youtube.com/embed/Wq4qWC_YfSg?si=_xsNjBAi8cGm_BWE"
        className="w-full sm:h-[500px] h-[200px] object-cover rounded-tl-[50px] z-10 relative pt-4" 
       title="YouTube video player" 
       frameBorder="1"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       
       allowfullscreen>
       </iframe>
       

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[10px] sm:pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
        <div className="flex justify-center ">
  <img
    src="/trace.svg"
    alt="menu"
    className="w-[100px] h-[100px] object-contain"
  />
</div>
      </motion.div>
    </motion.div>
  </section>
);


export default Hero;
