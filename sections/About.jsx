'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion'; 

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gardient-02 z-0" />
    <motion.div 
    variants={staggerContainer} 
    initial="hidden" 
    whileInView="show" 
    viewport={{once: false, amount: 0.25}} 
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
    <TypingText title="| About Metaversus" textstyles="text-center" />
    <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
    className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
      <span className='font-extrabold text-white'>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Amet aut cupiditate praesentium eius doloremque explicabo ipsa dignissimos sapiente, beatae eos aliquam sequi perferendis facilis nesciunt 
     distinctio <span className='font-extrabold text-white'>asperiores </span> doloribus sed nobis. Quidem nostrum a accusantium veritatis maiores deleniti quasi quod velit mollitia alias reprehenderit <span className='font-extrabold text-white'>oooyui </span> molestias deserunt repudiandae culpa quas aperiam placeat, dolorem aliquid amet porro enim. Tenetur aliquam error non?

    </motion.p>
    <motion.img variants={fadeIn('up','tween',0.3, 1)} src="./arrow-down.svg" className='w-[18px] h-[28px] object-contain mt-[28px]'>

    </motion.img>
    </motion.div>
  </section>
);

export default About;
