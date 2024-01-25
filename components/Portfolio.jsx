'use client';
import { useRef } from "react";
import Image from "next/image";
import styles from "@styles/portfolio.module.scss";
import Card from "./Card";
import NavList from "./NavList";


const Portfolio = () => {

  const appsRef = useRef();
  const sitesRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  return (
    <article className={styles.main}>
      <NavList appsRef={appsRef} sitesRef={sitesRef} resumeRef={resumeRef} contactRef={contactRef}/>
      <section id="apps" ref={appsRef} className={styles.section}>
        <header className={styles.title}>
          <h2>Apps</h2>
        </header>
        <Card
          name="Find My Cones"
          client="Hyser Asphalt"
          image="/images/phones.png"
          icon={["/images/react.png", "/images/node.png", "/images/play.png"]}
          link="app.findmycones.com"
          content=""
        />
        <Card
          name="Donation Form"
          client="Native News Online"
          image="/images/donation_phones.png"
          icon={[
            "/images/javascript.png",
            "/images/node.png",
            "/images/php.png",
            "/images/stripe.png",
            "/images/paypal.png",
          ]}
          link="nativenewsonline.net/donate"
          content="This donation app was built for NNO and it integrates with both Stripe and PayPal using JavaScript/html/scss on the front and Node and PHP on the backend"
        />
      </section>
      <section id="sites" ref={sitesRef} className={styles.section}>
        <header className={styles.title}>
          <h2>Sites</h2>
        </header>
        <Card
          name="Proos"
          client="Wit & Craft"
          image="/images/proos.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/php.png",
          ]}
          link="proos.com"
          content="This project was built on Joomla, using basic HTML/SCSS/JS to style the theme for the front-end."
        />
        <Card
          name="Resthaven"
          client="Wit & Craft"
          image="/images/resthaven.png"
          icon={[
            "/images/wordpress.png",
            "/images/javascript.png",
            "/images/php.png",
          ]}
          link="resthaven.org"
          content="This project was built on WordPress, using basic HTML/SCSS/JS to style the theme for the front-end."
        />
        <Card
          name="Ajacs"
          client="Mark Wierenga"
          image="/images/ajacs.png"
          icon={["/images/joomla.png", "/images/php.png"]}
          link="ajacs.com"
          content="This project was built on Joomla, using basic HTML/SCSS/JS to style the theme for the front-end."
        />
        <Card
          name="Native News Online"
          client="Indian Country Media"
          image="/images/nativenewsonline.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/php.png",
          ]}
          link="nativenewsonlune.net"
          content="This project was built on Joomla, using basic HTML/SCSS/JS to style the theme for the front-end."
        />
        <Card
          name="Holland Charter Township"
          client="City of Holland, MI"
          image="/images/hct.png"
          icon={["/images/joomla.png", "/images/php.png"]}
          link="hct.holland.mi.us"
          content=""
        />
        <Card
          name="Hughes / Centerline"
          client="Hughes Group"
          image="/images/hughes.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/php.png",
          ]}
          link="usehughes.com"
          content=""
        />
        <Card
          name="Whirlwind Engineering"
          client="Steve Cencich"
          image="/images/whirlwind.png"
          icon={["/images/joomla.png", "/images/php.png"]}
          link="whirlwindeng.com"
          content=""
        />
        <Card
          name="Quirkable.io"
          client="Quirkable"
          image="/images/quirkable.png"
          icon={["/images/react.png", "/images/node.png", "/images/next.png"]}
          link=""
          content=""
        />
      </section>
      <section id="resume" ref={resumeRef} className={styles.section} style={{width: "100%", maxWidth: '1320px', display: 'block', minHeight: '100dvh'}}>
        <header style={{margin: "0 auto 40px" }}>
          <h2>Resume</h2>
        </header>
        <a href="/Resume.pdf" target="_blank">
      <Image src="/images/resume.png" width={200} height={300} alt="" />
      <Image src="/images/resume2.png" width={200} height={300} alt="" />

        </a>
      </section>
      <section id="contact" ref={contactRef} className={styles.section} style={{width: "100%", maxWidth: '1320px', display: 'block', paddingBottom: '100px', minHeight: '100dvh'}}>
        <header style={{ margin: "0 auto 40px" }}>
          <h2 >Contact</h2>
        </header>
        <section className={styles.contact_items} >
          <div>Email<br/><a href="mailto:nlschneider@gmail.com">nlschneider@gmail.com</a></div>
          <div>Phone<br/> <a href="tel:+1(616)803-9803">+1(616)803-9803</a></div>
          <div>LinkedIn<br/><a href="https://www.linkedin.com/in/nathanlschneider" target="_blank" >linkedin.com/in/nathanlschneider</a></div>
        </section>
      </section>
    </article>
  );
};

export default Portfolio;
