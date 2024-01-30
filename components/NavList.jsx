"use client";
import { useRef, useEffect, useState } from "react";
import styles from "@styles/navlist.module.scss";
import {
  useInView,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
const NavList = (props) => {
  const { appsRef, sitesRef, resumeRef, contactRef } = props;

  const ref = useRef();
  const appsInView = useInView(appsRef, { amount: 0.1 });
  const sitesInView = useInView(sitesRef, { amount: 0.1 });
  const resumeInView = useInView(resumeRef, { amount: 0.5 });
  const contactInView = useInView(contactRef, { amount: 0.1 });

  const [scrollAmt, setScrollAmt] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrollAmt(latest));

  useEffect(() => {
    const links = document.querySelectorAll("nav a");

    links[0].style.fontWeight = appsInView ? 600 : 200;
    links[1].style.fontWeight = sitesInView && !appsInView ? 600 : 200;
    links[2].style.fontWeight = resumeInView && !sitesInView ? 600 : 200;
    links[3].style.fontWeight = contactInView && !resumeInView ? 600 : 200;

    ref.current.style.transform = appsInView
      ? `translateY(0rem)`
      : sitesInView && !appsInView
      ? `translateY(3.75rem)`
      : resumeInView && !sitesInView
      ? `translateY(7.5rem)`
      : contactInView && !resumeInView
      ? `translateY(11.25rem)`
      : `translateY(0rem)`;
  }, [appsInView, sitesInView, resumeInView, contactInView]);

  return (
    <motion.nav
      className={styles.navlist}
      initial={{ left: "-6.25rem", opacity: 0 }}
      animate={{
        left:
          (appsInView || sitesInView || resumeInView || contactInView) &&
          scrollAmt - 600 >= appsRef.current.getBoundingClientRect().top
            ? "0rem"
            : "-6.25rem",
        opacity: 1,
      }}
    >
      <ul>
        <li>
          <div ref={ref} className={styles.nav_indicator} />
        </li>
        <li>
          <a href="#apps">Apps</a>
        </li>
        <li>
          <a href="#sites">Sites</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavList;
