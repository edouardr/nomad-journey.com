import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './transparent.module.scss';

const TransparentHeader = ({ allEdges, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        const menuLinks = data.allKenticoCloudItemNavigationItem.edges
          .filter(edge => edge.node.system.language === lang)
          .map(edge => edge.node);

        return (
          <nav className={`${styles.navbar} is-mobile ${(isOpen ? styles.isActive : '')}`}>
            <div className={styles.container}>
              <div className={styles.navbarBrand}>
                <Link
                  className={`${styles.navbarItem} ${styles.brand}`}
                  to={`/${lang}`}
                >
                  <Img fluid={data.file.childImageSharp.fluid}
                    alt="Nomad Journey Logo"
                    style={{position: 'unset'}} />
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
                    menuLinks.map(link => <Link key={link.id} className={styles.navbarItem} to={`${lang}${link.elements.redirect_to_url.value}`}>{link.elements.title.value}</Link>)
                  }
                  <div className={styles.navbarItem}>
                    <div className="buttons">
                      {
                        allEdges.map(edge => (
                          <Link
                            key={edge.node.id}
                            className={`${styles.navbarItem} button ${lang === edge.node.system.language ? 'is-primary' : 'is-light'}`}
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
      }} />
  );
};

TransparentHeader.propTypes = {
  allEdges: PropTypes.array,
  lang: PropTypes.string
};

export default TransparentHeader;
