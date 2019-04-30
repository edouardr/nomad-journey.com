import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getItemPerLanguage } from '../utils/templateHelper';
import IntroText from '../components/IntroText.js';
import Jumbotron from '../components/Jumbotron/jumbotron.js';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const LandingPage = ({ data, pageContext }) => {
  const item = getItemPerLanguage(pageContext.language, data.allKenticoCloudItemLandingPage.edges, data.site);

  return (
    <Layout item={item}>
      <Jumbotron item={item} />
      <IntroText html={item.elements.body_text.value} />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default LandingPage;

export const query = graphql`
  query landingPageQuery($codename: String!) {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemLandingPage(filter: {system: {codename: {eq: $codename}}}) {
      edges {
        node {
          ...landingPageMetadata
          id
          system {
            language
          }
          fields {
            jumbotronImage {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          elements {
            body_text {
              value
            }
            jumbotron__title {
              value
            }
            jumbotron__description {
              value
            }
            jumbotron__image {
              value {
                description
              }
            }
            slug {
              value
            }
          }
        }
      }
    }
  }
`;
