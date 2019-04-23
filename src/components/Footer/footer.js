import React from "react";
import { FaFacebook, FaInstagram, FaRss, FaVimeo } from 'react-icons/fa';
import styles from './footer.module.scss';

const Footer = () => {
  const fbUsername = process.env.FB_USERNAME;
  const instaUsername = process.env.INSTA_USERNAME;
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerSocial} has-text-centered`}>
        <a className="is-size-1" href={`https://facebook.com/${fbUsername}`} title="Facebook A Nomad Journey" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            <FaFacebook />
          </span>
        </a>

        <a className="is-size-1" href={`https://instagram.com/${instaUsername}`} title="Instagram A Nomad Journey" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            <FaInstagram />
          </span>
        </a>

        <a className="is-size-1" href="sitemap.xml" title="Instagram A Nomad Journey" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            <FaVimeo />
          </span>
        </a>

        <a className="is-size-1" href="sitemap.xml" title="Instagram A Nomad Journey" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            <FaRss />
          </span>
        </a>
      </div>
      <div className={styles.footerLegal}>
        <div className="has-text-centered">
          <p className="has-text-white">
            <small>© 2019 A Nomad Journey</small>
          </p>
          <div className="container content">
            {/* <link to={`/${language}/legals`} title={`${legals.page.jumbotronTitle.value}`}>
                {legals.page.jumbotron__yitle.value}
            </link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
