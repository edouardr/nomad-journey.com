import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const LandingPage = ({ data }) => {
  const item = {
    elements: data.kenticoCloudItemArticle.elements,
    fields: data.kenticoCloudItemArticle.fields,
    site: data.site
  };

  return (
    <Layout item={item}>

    </Layout>
  );
};

export default LandingPage;

export const query = graphql`
  query landingPageQuery($slug: String!) {
    site {
      ...siteMetadata
    }
    kenticoCloudItemArticle(fields: { slug: { eq: $slug }}) {
      ...articleMetadata
      fields {
        language
        slug
        jumbotronImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      elements {
        body_text {
          value
        }
        location {
          value
        }
        posted {
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
        images {
          value {
            description
            name
            url
            width
            height
          }
        }
      }
    }
  }
`;

LandingPage.propTypes = {
  data: PropTypes.object,
};
