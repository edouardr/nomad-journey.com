import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getItemPerLanguage } from '../utils/templateHelper';
import Header from '../components/Header/header';
import IntroText from '../components/IntroText.js';
import ItineraryMap from '../components/ItineraryMap/itineraryMap';
import KeyFactGroup from '../components/keyFacts/group';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const Itinerary = ({ data, pageContext }) => {
  const item = getItemPerLanguage(pageContext.language, data.allKenticoCloudItemItinerary.edges, data.site);

  return (
    <Layout item={item}>
      <Header lang={item.system.language} allEdges={item.allEdges} />
      <div>
        <ItineraryMap mapId={item.elements.map_id.value} />
        <IntroText html={item.elements.body_text.value} />
        <section className="section">
          <div className="container">
            <KeyFactGroup keyFacts={item.elements.key_facts} />
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
              id
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
