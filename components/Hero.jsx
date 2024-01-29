"use client";
import styles from "@styles/hero.module.scss";
import { motion } from "framer-motion";
import { heroContainer, inLeft, inRight, inTop } from "@app/motions";
const Hero = (props) => {
  const handleClick = () => {};

  return (
    <article onClick={handleClick}>
      <motion.div
        variants={heroContainer}
        initial="initial"
        animate="animate"
        className={styles.main}
      >
        <motion.svg
        style={{marginBottom: '3.75rem'}}
          variants={inTop}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 219 194"
          fill="none"
          width="clamp(10rem, 8cqw, 12.5rem)"
          {...props}
        >
          <g fill="#E5E5E5" clipPath="url(#a)">
            <path d="M0 5.443h87.124l60.062 53.222v57.311L49.183 29.62l-.306 158.945H0V5.443Z" />
            <path d="M219 188.565h-87.105l-60.053-53.231V77.999l98.003 86.34.297-158.904H219v183.13Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h219v194H0z" />
            </clipPath>
          </defs>
        </motion.svg>
        <motion.div
          variants={inRight}
          className={styles.name}
        >
          Nathan Schneider
        </motion.div>
        <motion.div
          variants={inLeft}
          className={styles.title}
        >
          Full Stack Web Developer
        </motion.div>
      </motion.div>
    </article>
  );
};

export default Hero;
