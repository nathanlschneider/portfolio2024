import Image from "next/image";
import styles from "@styles/card.module.scss";

const Card = (props) => {
  const { client, name, content, image, link, icon, logoAlt, scroll } = props;

  return (
    <article className={styles.card}>
      <header className={styles.card_header}>
        <h2>{name}</h2>
        <h3>{client && `Client: ${client}`}</h3>
        <p>{content}</p>
        <div className={styles.logo_group}>
          {typeof icon === "object"
            ? icon.map((item, index) => (
                <div key={index}>
                  <Image
                    className={styles.logo}
                    src={item}
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
              ))
            : null}
        </div>
      </header>
      <section className={styles.card_section}>
        <Image
          className={styles.image}
          src={image ? image : '/images/n.png'}
          alt={name}
          width={374}
          height={200}
          style={{ objectFit: scroll == false ? 'fill' : 'cover'}}
        />
        <a href={`https://${link}/`} target="_blank" className={styles.btn}>
          Open
        </a>
      </section>
    </article>
  );
};

export default Card;
