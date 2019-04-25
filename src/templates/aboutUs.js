import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const AboutUs = ({ data }) => {
  const item = {
    elements: data.kenticoCloudItemAboutUs.elements,
    fields: data.kenticoCloudItemAboutUs.fields,
    site: data.site
  };

  return (
    <Layout item={item}>

    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.object,
};

export default AboutUs;

export const query = graphql`
  query aboutUsQuery($slug: String!) {
    site {
      ...siteMetadata
    }
    kenticoCloudItemAboutUs(fields: { slug : { eq: $slug }}) {
      ...aboutUsMetadata
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
      }
    }
  }
`;
