"use client";
import { useRef, useEffect } from "react";
import styles from "@styles/navlist.module.scss";
import { useInView, motion } from "framer-motion";
const NavList = (props) => {
  const { appsRef, sitesRef, resumeRef, contactRef } = props;

  const ref = useRef();
  const appsInView = useInView(appsRef, { amount: 0.1 });
  const sitesInView = useInView(sitesRef, { amount: 0.1 });
  const resumeInView = useInView(resumeRef, { amount: 0.1 });
  const contactInView = useInView(contactRef, { amount: 0.1 });

  useEffect(() => {
    const links = document.querySelectorAll("nav a");

    links[0].style.fontWeight = appsInView ? 600 : 200;
    links[1].style.fontWeight = sitesInView && !appsInView ? 600 : 200;
    links[2].style.fontWeight = resumeInView && !sitesInView ? 600 : 200;
    links[3].style.fontWeight = contactInView && !resumeInView ? 600 : 200;

    ref.current.style.transform = appsInView
      ? `translateY(0px)`
      : sitesInView && !appsInView
      ? `translateY(60px)`
      : resumeInView && !sitesInView
      ? `translateY(120px)`
      : contactInView && !resumeInView
      ? `translateY(180px)`
      : `translateY(0px)`;
  }, [appsInView, sitesInView, resumeInView, contactInView]);

  const handleClick = (e, top) => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => (link.style.fontWeight = 200));
    e.target.style.fontWeight = 600;
    ref.current.style.opacity = 1;
    ref.current.style.transform = `translateY(${top})`;
  };

  return (
    <motion.nav
      className={styles.navlist}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <ul>
        <div ref={ref} className={styles.nav_indicator} />
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
