import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const LandingPage = ({ data }) => {
  const item = {
    elements: data.kenticoCloudItemLandingPage.elements,
    fields: data.kenticoCloudItemLandingPage.fields,
    otherLanguages: data.kenticoCloudItemLandingPage.otherLanguages,
    site: data.site
  };

  return (
    <Layout item={item}>
      <div className="container is-widescreen">
        <div className="article-header">
          <div className="content">
            <h1 className="title is-spaced">{item.elements.jumbotron__title.value}</h1>
          </div>
        </div>
        <Img fluid={item.fields.jumbotronImage.childImageSharp.fluid} alt={item.elements.jumbotron__image.value[0].description} />
      </div>
      <section className="section">
        <div className="container is-light">
          <div className="content is-medium" dangerouslySetInnerHTML={{ __html: item.elements.body_text.value }}></div>
        </div>
      </section>
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object,
};

export default LandingPage;

export const query = graphql`
  query landingPageQuery($slug: String!) {
    site {
      ...siteMetadata
    }
    kenticoCloudItemLandingPage(fields: { slug : { eq: $slug }}) {
      ...landingPageMetadata
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
      otherLanguages {
        system {
          language
        }
        elements {
          slug {
            value
          }
        }
      }
    }
  }
`;
