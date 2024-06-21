'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="flex items-center justify-between flex-wrap gap-3">
        <h4 className="font-reg md:text-[35px] text-[44px] text-[#F2CB05]">
          Sign up for early access
        </h4>
        
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F2CB05] rounded-[32px] gap-[12px]">
          <img
            src="/logoOne.png"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-black">
            Sign-up
          </span>
        </button>
      </div>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex flex-row justify-center items-center`}
    >

      
    </div>
    

    

    
  </motion.nav>
);

export default Navbar;
