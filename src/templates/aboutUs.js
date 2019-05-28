import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getItemPerLanguage } from '../utils/templateHelper';
import IntroText from '../components/IntroText.js';
import Jumbotron from '../components/Jumbotron/jumbotron';
import Layout from '../components/Layout/layout';
import PersonTile from '../components/PersonTile/personTile';
import useCurrentPage from '../hooks/useCurrentPage';
import useLang from '../hooks/useLang';
import '../components/SEO/SEO';

const AboutUs = ({ data, pageContext }) => {
  const { definePage } = useCurrentPage();
  const { defineLang } = useLang();
  const item = getItemPerLanguage(pageContext.language, data.allKenticoCloudItemAboutUs.edges, data.site);
  const persons = new Array(...data.allKenticoCloudItemPerson.edges);

  React.useEffect(() => {
    defineLang(pageContext.language);
    definePage(item);
  }, []);

  return (
    <Layout>
      <Jumbotron />
      <IntroText html={item.elements.body_text.value} />
      <section className="section">
        <div className="container">
          <div className="columns">
            {
              persons.map(person => (
                <div className="column is-half" key={person.node.system.codename}>
                  <PersonTile person={person.node} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default AboutUs;

export const query = graphql`
  fragment aboutUsData on KenticoCloudItemAboutUs {
    ...aboutUsMetadata
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
  query aboutUsQuery($codename: String!, $language: String!) {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemPerson(filter: { system : { language: { eq: $language }}}) {
      edges {
        node {
          system {
            codename
          }
          elements {
            image {
              value {
                url
                description
              }
            }
            interview {
              id
              elements {
                question {
                  text
                }
                answer {
                  text
                }
              }
            }
          }
        }
      }
    }
    allKenticoCloudItemAboutUs(filter: {system: {codename: {eq: $codename}}}) {
      edges {
        node {
          ...aboutUsData
        }
      }
    }
  }
`;
