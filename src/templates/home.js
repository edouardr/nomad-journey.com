import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import IntroText from '../components/IntroText.js';
import Jumbotron from '../components/Jumbotron/jumbotron';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const getItemPerLanguage = (language, data) => {
  const homePages = new Array(...data.allKenticoCloudItemLandingPage.edges).map(edge => {
    edge.node.elements.slug.value = '';
    return edge;
  });
  const localizedHomePages = homePages.filter(homePage => homePage.node.system.language === language)[0];

  return {
    allEdges: homePages,
    elements: localizedHomePages.node.elements,
    fields: localizedHomePages.node.fields,
    site: data.site,
    system: localizedHomePages.node.system,
  };
};

const Home = ({ data, pageContext }) => {
  const item = getItemPerLanguage(pageContext.language, data);

  return (
    <Layout item={item}>
      <Jumbotron item={item} />
      <IntroText html={item.elements.body_text.value} />
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default Home;

export const query = graphql`
  query homeQuery {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemLandingPage(filter: {system: {codename: {eq: "home"}}}) {
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
