"use client";
import { useRef } from "react";
import styles from "@styles/navlist.module.scss";
const NavList = () => {
  const ref = useRef();

  const handleClick = (e, top) => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => (link.style.fontWeight = 200));
    e.target.style.fontWeight = 600;
    ref.current.style.opacity = 1;
    ref.current.style.transform = `translateY(${top})`;
  };

  return (
    <nav className={styles.navlist}>
      <ul>
        <div ref={ref} className={styles.nav_indicator} />
        <li>
          <a href="#apps" onClick={(e) => handleClick(e, "0px")}>
            Apps
          </a>
        </li>
        <li>
          <a href="#sites" onClick={(e) => handleClick(e, "60px")}>
            Sites
          </a>
        </li>
        <li>
          <a href="#resume" onClick={(e) => handleClick(e, "120px")}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleClick(e, "180px")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
