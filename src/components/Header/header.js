import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import styles from './header.module.scss';

const Header = ({ allEdges, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query defaultHeader {
      file(relativePath: { eq: "logo-transp.png" }) {
        childImageSharp {
          fluid(maxWidth: 280) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      allKenticoCloudItemNavigationItem(sort: { order: ASC, fields: [elements___appearance__sort_order___value] }) {
        edges {
          node {
            id
            system {
              language
            }
            elements {
              title {
                value
              }
              redirect_to_url {
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
  `);

  const menuLinks = data.allKenticoCloudItemNavigationItem.edges
    .filter(edge => edge.node.system.language === lang)
    .map(edge => edge.node);

  return (
    <header className={`${styles.navbar} is-spaced is-mobile ${(isOpen ? styles.isActive : '')}`}>
      <div className={styles.container}>
        <div className={styles.navbarBrand}>
          <Link
            className={`${styles.navbarItem} ${styles.brand}`}
            to={`/${lang}`}
          >
            <Img fluid={data.file.childImageSharp.fluid}
              alt="Nomad Journey Logo"
              style={{ position: 'unset' }} />
          </Link>
          <span className={`${styles.navbarBurger} ${styles.burger} ${(isOpen ? styles.isActive : '')}`} data-target="navMenu" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className={`${styles.navbarMenu} ${(isOpen ? styles.isActive : '')}`}>
          <div className={styles.navbarStart}>
          </div>
          <div className={styles.navbarEnd}>
            {
              menuLinks
                .map(link => (
                  <Link key={link.id} className={styles.navbarItem}
                    to={`${lang}${link.elements.redirect_to_url.value}`}
                    partiallyActive={false}
                    activeClassName={styles.isActive}>
                    {link.elements.title.value}
                  </Link>
                )
                )
            }
            <div className={`${styles.navbarItem} ${styles.hasDropdown} ${styles.isHoverable}`}>
              {
                allEdges
                  .filter(edge => lang === edge.node.system.language)
                  .map(edge => (
                    <Link
                      key={edge.node.id}
                      className={`${styles.navbarLink} ${styles.isActive}`}
                      to={`/${edge.node.system.language}/${edge.node.elements.slug.value}`}
                    >
                      <FontAwesomeIcon icon="globe" />&nbsp;
                            {edge.node.system.language.toUpperCase()}
                    </Link>
                  ))
              }
              <div className={`${styles.navbarDropdown} ${styles.isRight}`}>
                {
                  allEdges
                    .filter(edge => lang !== edge.node.system.language)
                    .map(edge => (
                      <Link
                        key={edge.node.id}
                        className={styles.navbarItem}
                        to={`/${edge.node.system.language}/${edge.node.elements.slug.value}`}
                      >
                        {edge.node.system.language.toUpperCase()}
                      </Link>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  allEdges: PropTypes.array,
  lang: PropTypes.string
};

export default Header;
