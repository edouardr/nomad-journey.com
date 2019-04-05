import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Header = ({siteTitle}) => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "logo-transp.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `}
  render={ data => (
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Link
        className="navbar-item brand"
        to="/"
      >
        <Img fixed={data.file.childImageSharp.fluid} />
      </Link>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{margin: 0}}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  )} />
);

Header.propTypes = {
  data: PropTypes.object,
  siteTitle: PropTypes.string,
};

export default Header;
