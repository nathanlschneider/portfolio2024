"use client";
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
      <NavList
        appsRef={appsRef}
        sitesRef={sitesRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <header className={styles.title}></header>
      <section id="apps" ref={appsRef} className={styles.section}>
        <header className={styles.title}>
          <h1 style={{ marginBottom: "6rem" }}>My Works</h1>
          <h2>Apps</h2>
        </header>
        <Card
          name="Find My Cones"
          client="Hyser Asphalt"
          image="/images/phones.png"
          scroll={false}
          icon={[
            "/images/react.png",
            "/images/node.png",
            "/images/sass.png",
            "/images/mysql.png",
            "/images/play.png",
          ]}
          link="app.findmycones.com"
          content="This app was designed for construction companies to keep track of where they've left their orange traffic cones. It's available on both Google Play and Apple's App Store"
        />
        <Card
          name="Donation Form"
          client="Native News Online"
          image="/images/donation_phones.png"
          scroll={false}
          icon={[
            "/images/javascript.png",
            "/images/sass.png",
            "/images/node.png",
            "/images/php.png",
            "/images/stripe.png",
            "/images/paypal.png",
            "/images/mailchimp.png",
          ]}
          link="nativenewsonline.net/donate"
          content="This donation app was built for NNO and it integrates with both Stripe and PayPal as well as Mailchimp."
        />
        <Card
          name="Ivanti Ticket Viewer"
          client=""
          image=""
          scroll={false}
          icon={["/images/javascript.png", "/images/sass.png"]}
          link="github.com/nathanlschneider/ticket_viewer"
          content="This is a companion progressive web app for IvantiSM to view Help Desk incident tickets on
          mobile devices. It s being used by operations and
          IT employees at a Wendy's Franchisee"
        />
        <Card
          name="Cradlepoint Watcher"
          client=""
          image="/images/cradle.png"
          scroll={false}
          icon={[
            "/images/react.png",
            "/images/sass.png",
            "/images/node.png",
            "/images/mongodb.svg",
            "/images/websoket.webp",
          ]}
          link="github.com/nathanlschneider/react-cradlepoint_watcher"
          content="This app monitors the WAN/LTE status of several hundred Cradlepoint WiFi routers deployed at various Wendy's locations across the country. It has allowed the company to track LTE usage and save money on unnecessary LTE costs."
        />
        <Card
          name="Multi-Ping"
          client=""
          image=""
          scroll={false}
          icon={["/images/vb.png"]}
          link="github.com/nathanlschneider/PingProject"
          content="This is a multi-threaded network diagnostic tool used to monitor dropouts and latency on the Aloha POS kitchen stations from the server, utilized by Wendy's IT technicians."
        />
        <Card
          name="Quick Ticket"
          client=""
          image=""
          scroll={false}
          icon={["/images/vb.png"]}
          link="github.com/nathanlschneider/QuickTicket"
          content="This is a simple application designed to help helpdesk technicians submit incident tickets into their Spiceworks ticketing software more quickly, replacing the extremely laggy web GUI."
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
            "/images/sass.png",
            "/images/php.png",
            "/images/mysql.png",
          ]}
          link="proos.com"
          content="This project was built on Joomla, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Resthaven"
          client="Wit & Craft"
          image="/images/resthaven.png"
          icon={[
            "/images/wordpress.png",
            "/images/javascript.png",
            "/images/sass.png",
            "/images/php.png",
            "/images/mysql.png",
          ]}
          link="resthaven.org"
          content="This project was built on Wordpress, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Ajacs"
          client="Mark Wierenga"
          image="/images/ajacs.png"
          icon={[
            "/images/joomla.png",
            "/images/php.png",
            "/images/mysql.png",
            "/images/sass.png",
          ]}
          link="ajacs.com"
          content="This project was built on Joomla, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Native News Online"
          client="Indian Country Media"
          image="/images/nativenewsonline.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/sass.png",
            "/images/php.png",
            "/images/mysql.png",
          ]}
          link="nativenewsonline.net"
          content="This project was built on Joomla, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Holland Charter Township"
          client="City of Holland, MI"
          image="/images/hct.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/sass.png",
            "/images/php.png",
            "/images/mysql.png",
          ]}
          link="hct.holland.mi.us"
          content="This project was built on Joomla, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Hughes / Centerline"
          client="Hughes Group"
          image="/images/hughes.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/sass.png",
            "/images/php.png",
            "/images/mysql.png",
          ]}
          link="usehugheshg.com"
          content="This project was built on Joomla, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Whirlwind Engineering"
          client="Steve Cencich"
          image="/images/whirlwind.png"
          icon={[
            "/images/joomla.png",
            "/images/javascript.png",
            "/images/sass.png",
            "/images/php.png",
            "/images/mysql.png",
          ]}
          link="whirlwindeng.com"
          content="This project was built on Joomla, using HTML/SCSS/JS to style the theme for the front-end, PHP and MySQL on the back-end."
        />
        <Card
          name="Quirkable.io"
          client="Quirkable"
          image="/images/quirkable.png"
          icon={[
            "/images/react.png",
            "/images/next.png",
            "/images/sass.png",
            "/images/node.png",
          ]}
          link="https://quirkable-io.vercel.app/"
          content="This project was build using Next, Node and React."
        />
      </section>
      <section id="resume" ref={resumeRef} className={styles.section}>
        <header className={styles.title}>
          <h2>Resume</h2>
        </header>
        <div>
          {" "}
          <a href="/Resume.docx" target="_blank" style={{fontSize: "3rem"}}>
            Click to download.
          </a>
        </div>
      </section>
      <section id="contact" ref={contactRef} className={styles.section}>
        <header className={styles.title}>
          <h2>Contact</h2>
        </header>
        <section className={styles.contact_items}>
          <div>
            <a href="mailto:nlschneider@gmail.com">nlschneider@gmail.com</a>
          </div>
          <div>
            <a href="tel:+1(616)803-9803">+1(616)803-9803</a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nathanlschneider"
              target="_blank"
            >
              linkedin.com/in/nathanlschneider
            </a>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Portfolio;
