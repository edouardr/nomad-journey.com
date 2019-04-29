import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import IntroText from '../components/IntroText.js';
import Jumbotron from '../components/Jumbotron/jumbotron';
import Layout from '../components/Layout/layout';
import PersonTile from '../components/PersonTile/personTile';
import '../components/SEO/SEO';

const getItemPerLanguage = (language, data) => {
  const aboutUsEdges = new Array(...data.allKenticoCloudItemAboutUs.edges);
  const localizedAboutUs = aboutUsEdges.filter(page => page.node.system.language === language)[0];

  return {
    allEdges: aboutUsEdges,
    elements: localizedAboutUs.node.elements,
    fields: localizedAboutUs.node.fields,
    site: data.site,
    system: localizedAboutUs.node.system,
  };
};

const AboutUs = ({ data, pageContext }) => {
  const item = getItemPerLanguage(pageContext.language, data);
  const persons = new Array(...data.allKenticoCloudItemPerson.edges);

  return (
    <Layout item={item}>
      <Jumbotron item={item} />
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
          fluid(maxWidth: 1440, quality: 100) {
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
