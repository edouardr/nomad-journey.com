import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './header.module.scss';
import useCurrentPage from '../../hooks/useCurrentPage';
import useLang from '../../hooks/useLang';
import Search from '../Search';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage } = useCurrentPage();
  const { language } = useLang();
  const searchIndices = [
    { name: `articles_${language}`, title: `Article`, hitComp: `ArticleHit` },
  ];
  const data = useStaticQuery(graphql`
    query defaultHeader {
      file(relativePath: { eq: "logo-transp.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      allKenticoCloudItemNavigationItem(
        sort: {
          order: ASC
          fields: [elements___appearance__sort_order___value]
        }
      ) {
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${styles.navbar} is-spaced is-mobile ${
        isOpen ? styles.isActive : ''
      }`}
    >
      <div className={styles.container}>
        <div className={styles.navbarBrand}>
          <Link className={`${styles.navbarItem}`} to={`/${language}`}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="Nomad Journey Logo"
            />
          </Link>
          <span
            className={`${styles.navbarBurger} ${styles.burger} ${
              isOpen ? styles.isActive : ''
            }`}
            data-target="navMenu"
            onClick={handleClick}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div
          id="navMenu"
          className={`${styles.navbarMenu} ${isOpen ? styles.isActive : ''}`}
        >
          <div className={styles.navbarStart}></div>
          <div className={styles.navbarEnd}>
            {menuLinks.map(link => (
              <Link
                key={link.id}
                className={styles.navbarItem}
                to={`/${language}${link.elements.redirect_to_url.value}`}
                partiallyActive={false}
                activeClassName={styles.isActive}
              >
                {link.elements.title.value}
              </Link>
            ))}
            <div className={`${styles.navbarItem}`}>
              <Search collapse={true} indices={searchIndices} />
            </div>
            <div
              className={`${styles.navbarItem} ${styles.hasDropdown} ${styles.isHoverable}`}
            >
              {currentPage.allEdges
                .filter(edge => language === edge.node.system.language)
                .map(edge => (
                  <Link
                    key={edge.node.id}
                    className={`${styles.navbarLink}`}
                    to={`/${edge.node.system.language}/${edge.node.elements.slug.value}`}
                  >
                    <FontAwesomeIcon icon="globe" />
                    &nbsp;{edge.node.system.language.toUpperCase()}
                  </Link>
                ))}
              <div className={`${styles.navbarDropdown} ${styles.isRight}`}>
                {currentPage.allEdges
                  .filter(edge => language !== edge.node.system.language)
                  .map(edge => (
                    <Link
                      key={edge.node.id}
                      className={styles.navbarItem}
                      to={`/${edge.node.system.language}/${edge.node.elements.slug.value}`}
                    >
                      {edge.node.system.language.toUpperCase()}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
