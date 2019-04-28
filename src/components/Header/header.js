import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './header.scss';

const Header = ({ allEdges, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query {
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
          <header className="navbar is-spaced is-mobile">
            <div className="container">
              <div className="navbar-brand">
                <Link
                  className="navbar-item brand"
                  to={`/${lang}`}
                >
                  <Img fluid={data.file.childImageSharp.fluid} />
                </Link>
                <span className={`navbar-burger burger ${(isOpen ? 'is-active' : '')}`} data-target="navMenu" onClick={() => setIsOpen(!isOpen)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navMenu" className={`navbar-menu ${(isOpen ? 'is-active' : '')}`}>
                <div className="navbar-start">
                </div>
                <div className="navbar-end">
                  {
                    menuLinks.map(link => <Link key={link.id} className="navbar-item" to={`${lang}${link.elements.redirect_to_url.value}`}>{link.elements.title.value}</Link>)
                  }
                  <div className="navbar-item">
                    <div className="buttons">
                      {
                        allEdges.map(edge => (
                          <Link
                            key={edge.node.id}
                            className={`navbar-item button ${lang === edge.node.system.language ? 'is-primary' : 'is-light'}`}
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
      }} />
  );
};

Header.propTypes = {
  allEdges: PropTypes.array,
  lang: PropTypes.string
};

export default Header;
