import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import '../../utils/fontawesome';
import styles from './footer.module.scss';

const Footer = ({ lang }) => {
  const fbUsername = process.env.FB_USERNAME;
  const instaUsername = process.env.INSTA_USERNAME;
  const vimeoUsername = process.env.VIMEO_USERNAME;
  return (
    <StaticQuery
      query={graphql`
      query {
        allKenticoCloudItemLandingPage(filter: {system: {codename: {eq: "legals"}}}) {
          edges {
            node {
              system {
                language
              }
              elements {
                jumbotron__title {
                  value
                }
                slug {
                  value
                }
              }
            }
          }
        }
      }
    `}
      render={data => {
        const legalLink = data.allKenticoCloudItemLandingPage.edges
          .filter(edge => edge.node.system.language === lang)
          .map(edge => edge.node);

        return (
        <footer className={styles.footer}>
          <div className={`${styles.footerSocial} has-text-centered`}>
            <a className="is-size-1" href={`https://facebook.com/${fbUsername}`} title="Facebook A Nomad Journey" target="_blank" rel="noopener noreferrer">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </span>
            </a>

            <a className="is-size-1" href={`https://instagram.com/${instaUsername}`} title="Instagram A Nomad Journey" target="_blank" rel="noopener noreferrer">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </span>
            </a>

            <a className="is-size-1" href={`https://vimeo.com/${vimeoUsername}`} title="Vimeo A Nomad Journey" target="_blank" rel="noopener noreferrer">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={['fab', 'vimeo']} />
              </span>
            </a>

            <a className="is-size-1" href="sitemap.xml" title="RSS A Nomad Journey" target="_blank" rel="noopener noreferrer">
              <span className="icon is-medium">
                <FontAwesomeIcon icon="rss" />
              </span>
            </a>
          </div>
          <div className={styles.footerLegal}>
            <div className="has-text-centered">
              <p className="has-text-white">
                <small>© 2019 A Nomad Journey</small>
              </p>
              <div className="container content">
                <Link to={`/${lang}/${legalLink[0].elements.slug.value}`} title={`${legalLink[0].elements.jumbotron__title.value}`}>
                  {legalLink[0].elements.jumbotron__title.value}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      );
    }} />
  );
};

Footer.propTypes = {
  lang: PropTypes.string
};


export default Footer;
