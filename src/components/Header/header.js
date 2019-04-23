import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './header.module.scss';

const Header = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "logo-transp.png" }) {
            childImageSharp {
              fixed(width: 112) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          allKenticoCloudItemNavigationItem(sort: { order: ASC, fields: [elements___appearance__sort_order___value] }) {
            edges {
              node {
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
          <header className="navbar is-spaced">
            <div className="container">
              <div className="navbar-brand">
                <Link
                  className="navbar-item"
                  to={`/${lang}`}
                >
                  <Img fixed={data.file.childImageSharp.fixed} />
                </Link>
                <span className={`navbar-burger burger ${(isOpen ? 'is-active' : '')}`} data-target="navMenu" onClick={() => setIsOpen(!isOpen)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navMenu" className={`navbar-menu ${(isOpen ? 'is-active' : '')}`}>
                <div className="navbar-start">
                  {
                    menuLinks.map(link => <Link key={link.elements.slug.value} className="navbar-item" to={`${lang}${link.elements.redirect_to_url.value}`}>{link.elements.title.value}</Link>)
                  }
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <Link
                        className="navbar-item button is-primary"
                        to={`/en`}
                      >
                        EN
                        </Link>
                      <Link
                        className="navbar-item button is-light"
                        to={`/fr`}
                      >
                        FR
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
      }} />
  );
};

Header.propTypes = {
  lang: PropTypes.string
};

export default Header;
