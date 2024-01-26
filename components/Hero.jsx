"use client";
import styles from "@styles/hero.module.scss";
import { useRef } from "react";
import { motion, inView } from "framer-motion";
const Hero = (props) => {
  const ref = useRef(undefined);
  const isInView = inView(ref);

  const handleClick = () => {};

  return (
    <article onClick={handleClick}>
      <motion.div
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 219 194"
          fill="none"
          width="clamp(160px, 8cqw, 200px)"
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
        </svg>
        <div className={styles.name}>Nathan Schneider</div>
        <div className={styles.title}>Full Stack Web Developer</div>
      </motion.div>
    </article>
  );
};

export default Hero;
