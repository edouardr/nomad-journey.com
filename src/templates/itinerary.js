import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import ItineraryMap from '../components/ItineraryMap/itineraryMap';
import '../components/SEO/SEO';

const getItemPerLanguage = (language, data) => {
  const itineraryPages = new Array(...data.allKenticoCloudItemItinerary.edges);
  const localizedItineraries = itineraryPages.filter(edge => edge.node.system.language === language)[0];

  return {
    allEdges: itineraryPages,
    elements: localizedItineraries.node.elements,
    fields: localizedItineraries.node.fields,
    site: data.site,
    system: localizedItineraries.node.system,
  };
};

const Itinerary = ({ data, pageContext }) => {
  const itinerary = getItemPerLanguage(pageContext.language, data);
  return (
    <Layout item={itinerary}>
      <div>
        <ItineraryMap mapId={itinerary.elements.map_id.value} />
        <section className="section">
          <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: itinerary.elements.body_text.value }}></div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {/* <KeyFactGroup keyFacts={itinerary.elements.key_facts} /> */}
          </div>
        </section>
      </div>
    </Layout>
  );
};

Itinerary.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default Itinerary;

export const query = graphql`
  query itineraryQuery($codename: String!) {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemItinerary(filter: {system: {codename: {eq: $codename}}}) {
      edges {
        node {
          ...itineraryMetadata
          id
          system {
            language
          }
          elements {
            map_id {
              value
            }
            body_text {
              value
            }
            key_facts {
              elements {
                icon_group {
                  value
                }
                icon {
                  value
                }
                title {
                  value
                }
                value {
                  value
                }
                unit {
                  value
                }
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
