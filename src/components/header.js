import React, { useState } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StaticQuery
      query={graphql`
    query {
      file(relativePath: { eq: "logo-transp.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allKenticoCloudItemNavigationItem {
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
              appearance__sort_order {
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
          .filter(edge => edge.node.system.language === 'en')
          .map(edge => edge.node)
          .sort((src, cmp) => parseInt(src.elements.appearance__sort_order.value) - parseInt(cmp.elements.appearance__sort_order.value));

        return (
          <header className="navbar is-transparent">
            <div className="container">
              <div className="navbar-brand">
                <Link
                  className="navbar-item brand"
                  to="/"
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
                <div className="navbar-end">
                  {
                    menuLinks.map(link => <Link key={link.elements.slug.value} className="navbar-item" to={link.elements.redirect_to_url.value}>{link.elements.title.value}</Link>)
                  }
                </div>
              </div>
            </div>
          </header>
        );
      }} />
  );
};

export default Header;
