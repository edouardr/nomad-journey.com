import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const Home = ({ data }) => {
  const home = { elements: data.kenticoCloudItemLandingPage.elements, site: data.site };

  return (
    <Layout item={home}>
      <section className="section">
        <div className="container">
          <div className="content">
            {home.elements.body_text.value}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;

export const query = graphql`
  query homeQuery {
    site {
      ...siteMetadata
    }
    kenticoCloudItemLandingPage(fields: { codename: { eq: "home" }}) {
      fields {
        slug
        language
      }
      elements {
        body_text {
          value
        }
      }
    }
  }
`;
