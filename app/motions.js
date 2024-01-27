import { easeIn } from "framer-motion";

export const heroContainer = {
  initial: {
    opacity: 1,
  },

  animate: {
    transition: {
     
      staggerChildren: .5,
       ease: easeIn,
    },
  },
};

export const inLeft = {
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const inRight = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const inTop = {
    initial: { y: -300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
