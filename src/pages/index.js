import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';

const Index = ({data}) => {
  const home = { elements: data.allKenticoCloudItemLandingPage.edges[0].node.elements, site: data.site };
  const union = new Array(...data.allKenticoCloudItemArticle.edges);
  const items = union.map(({node}) => {
    if (node.fields !== undefined && node.fields !== null && node.fields.templateName !== undefined && node.fields.templateName !== null) {
      return (
        <li key={node.id}>
          <Link to={`../${node.fields.language}/${node.fields.slug}`}>
            {node.elements.list_item__title.value}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={node.id}>
        </li>
      );
    }
  });

  return (
    <Layout item={home}>
      <section className="section">
        <div className="container">
          <div className="content">
            {home.elements.body_text.value}
            {items}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemArticle(filter: { fields: { language: { eq: "en" }}}) {
      edges {
        node {
          fields {
            templateName
            slug
            language
          }
          id
          elements {
            list_item__title {
              value
            }
            list_item__description {
              value
            }
          }
        }
      }
    }
  }
`;

Index.propTypes = {
  data: PropTypes.object,
};
