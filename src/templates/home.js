import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Header from '../components/Header/header';
import Jumbotron from '../components/Jumbotron/jumbotron';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';
import ArticleListing from '../components/Article/listing.js';
import GoogleMaps from '../components/Map/googleMaps.js';
import useLang from '../hooks/useLang';
import useCurrentPage from '../hooks/useCurrentPage';

const getItemPerLanguage = (language, data) => {
  const homePages = new Array(...data.allKenticoCloudItemLandingPage.edges).map(
    edge => {
      edge.node.elements.slug.value = '';
      return edge;
    },
  );
  const localizedHomePages = homePages.filter(
    homePage => homePage.node.system.language === language,
  )[0];

  return {
    allEdges: homePages,
    elements: localizedHomePages.node.elements,
    fields: localizedHomePages.node.fields,
    site: data.site,
    system: localizedHomePages.node.system,
  };
};

const Home = React.memo(function Home({ data, pageContext }) {
  const { definePage } = useCurrentPage();
  const { defineLang } = useLang();
  const item = getItemPerLanguage(pageContext.language, data);
  const lastArticle = new Array(
    ...data.allKenticoCloudItemArticle.edges,
  ).filter(edge => pageContext.language === edge.node.system.language)[0].node;

  React.useEffect(() => {
    defineLang(pageContext.language);
    definePage(item);
  }, []);

  return (
    <Layout
      codename={pageContext.codename}
      language={pageContext.language}
      template={pageContext.templateName}
    >
      <Header />
      <Jumbotron item={lastArticle} showLink={true} />
      <ArticleListing language={pageContext.language} />
      <GoogleMaps />
    </Layout>
  );
});

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

    allKenticoCloudItemArticle(
      limit: 2
      sort: { order: DESC, fields: [elements___posted___value] }
    ) {
      edges {
        node {
          id
          system {
            language
            codename
          }
          fields {
            jumbotronImage {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          elements {
            jumbotron__title {
              value
            }
            jumbotron__description {
              value
            }
            jumbotron__image {
              value {
                name
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

    allKenticoCloudItemLandingPage(
      filter: { system: { codename: { eq: "home" } } }
    ) {
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
