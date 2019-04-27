import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';
import PersonTile from '../components/PersonTile/personTile';

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
      <>
        <div className="container is-widescreen">
          <div className="article-header">
            <div className="content">
              <h1 className="title is-spaced">{item.elements.jumbotron__title.value}</h1>
            </div>
          </div>
          <Img fluid={item.fields.jumbotronImage.childImageSharp.fluid} alt={item.elements.jumbotron__image.value[0].description} />
        </div>
        <section className="section">
          <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: item.elements.body_text.value }}></div>
          </div>
        </section>
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
      </>
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.object,
};

export default AboutUs;

export const query = graphql`
  fragment aboutUsData on KenticoCloudItemAboutUs {
    ...aboutUsMetadata
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
