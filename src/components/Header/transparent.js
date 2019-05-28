import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import useLang from '../../hooks/useLang';
import useCurrentPage from '../../hooks/useCurrentPage';
import styles from './transparent.module.scss';

const TransparentHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage } = useCurrentPage();
  const { language } = useLang();
  const data = useStaticQuery(graphql`
    query transparentHeader {
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
    .filter(edge => edge.node.system.language === language)
    .map(edge => edge.node);

  return (
    <nav className={`${styles.navbar} is-mobile ${(isOpen ? styles.isActive : '')}`}>
      <div className={styles.container}>
        <div className={styles.navbarBrand}>
          <Link
            className={`${styles.navbarItem} ${styles.brand}`}
            to={`/${language}`}
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
              menuLinks.map(link => <Link key={link.id} className={styles.navbarItem} to={`/${language}${link.elements.redirect_to_url.value}`}>{link.elements.title.value}</Link>)
            }

            <div className={`${styles.navbarItem} ${styles.hasDropdown} ${styles.isHoverable}`}>
              {
                currentPage.allEdges
                  .filter(edge => language === edge.node.system.language)
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
              <div className={styles.navbarDropdown}>
                {
                  currentPage.allEdges
                    .filter(edge => language !== edge.node.system.language)
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
    </nav>
  );
};

export default TransparentHeader;
