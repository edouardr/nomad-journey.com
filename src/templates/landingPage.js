import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const getItemPerLanguage = (language, data) => {
  const landingPages = new Array(...data.allKenticoCloudItemLandingPage.edges);
  const localizedLandingPage = landingPages.filter(landingPage => landingPage.node.system.language === language)[0];

  return {
    allEdges: landingPages,
    elements: localizedLandingPage.node.elements,
    fields: localizedLandingPage.node.fields,
    site: data.site,
    system: localizedLandingPage.node.system,
  };
};

const LandingPage = ({ data, pageContext }) => {
  const item = getItemPerLanguage(pageContext.language, data);

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
          system {
            language
          }
          fields {
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
            slug {
              value
            }
          }
        }
      }
    }
  }
`;
