import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getItemPerLanguage } from '../utils/templateHelper';
import Header from '../components/Header/header';
import IntroText from '../components/IntroText.js';
import Jumbotron from '../components/Jumbotron/jumbotron.js';
import Layout from '../components/Layout/layout';
import useCurrentPage from '../hooks/useCurrentPage';
import useLang from '../hooks/useLang';
import '../components/SEO/SEO';

const LandingPage = React.memo(function LandingPage({ data, pageContext }) {
  const { definePage } = useCurrentPage();
  const { defineLang } = useLang();
  const item = getItemPerLanguage(
    pageContext.language,
    data.allKenticoCloudItemLandingPage.edges,
    data.site
  );

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
      <Jumbotron />
      <IntroText html={item.elements.body_text.value} />
    </Layout>
  );
});

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
    allKenticoCloudItemLandingPage(
      filter: { system: { codename: { eq: $codename } } }
    ) {
      edges {
        node {
          ...landingPageMetadata
          id
          system {
            language
            codename
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
  }
`;
