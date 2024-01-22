import Image from "next/image";
import styles from "@styles/portfolio.module.scss";
import Card from "./Card";
import NavList from "./NavList";

const Portfolio = () => {
  return (
    <article id="works" className={styles.main}>
      <NavList />
      <header>
        <h1 style={{ width: "1440px", margin: "0 auto" }}>Works</h1>
      </header>
      <section id="apps" className={styles.section}>
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
      <section id="sites" className={styles.section}>
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
      <section id="resume" className={styles.section}>
        <header>
          <h2 style={{ width: "1440px", margin: "0 auto" }}>Resume</h2>
        </header>
        <Image
          src="/images/resume.png"
          alt="Resume"
          width={900}
          height={1200}
        />
        {/* <Image
          src="/images/resume2.png"
          alt="Resume"
          width={900}
          height={1200}
        /> */}
      </section>
      <section id="contact" className={styles.section}>
        <header>
          <h2 style={{ width: "1440px", margin: "0 auto" }}>Contact</h2>
        </header>
      </section>
    </article>
  );
};

export default Portfolio;