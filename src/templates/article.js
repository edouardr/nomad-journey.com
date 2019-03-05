import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ProjectReference = ({data}) => {
  const item = data.kenticoCloudItemArticle;

  return (
    <Layout>
      <div>
        <img src={item.elements.jumbotron__image.value[0].url} />
          <table>
            <tbody>
            <tr>
              <th>Name:</th>
              <td>{item.elements.jumbotron__title.value}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{item.elements.jumbotron__description.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ProjectReference;

export const query = graphql`
  query articleQuery($slug: String!) {
    kenticoCloudItemArticle(fields: { slug: { eq: $slug }}) {
      system {
        name
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
            url
          }
        }
      }
    }
  }
`;

ProjectReference.propTypes = {
  data: PropTypes.object,
};
