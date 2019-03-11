import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './article.css';

const ProjectReference = ({data}) => {
  const item = data.kenticoCloudItemArticle;

  return (
    <Layout>
      <article>
        <div className="container is-widescreen">
          <div className="article-header">
            <div className="content">
              <p className="subtitle location">{item.elements.location.value}</p>
              <h1 className="title is-spaced">{item.elements.jumbotron__title.value}</h1>
            </div>
            <div className="article-details">
              <p>
                <span>{item.elements.posted.value}</span>
                <span className="divider"></span>
              </p>
            </div>
          </div>
          <figure className="image is-5by3">
            <img src={item.elements.jumbotron__image.value[0].url} />
          </figure>
        </div>
        <section className="section">
          <div className="container is-light">
            <div className="content is-medium" dangerouslySetInnerHTML={{__html: item.elements.body_text.value}}></div>
          </div>
        </section>
        <section className="section">
          <div className="container">
          </div>
        </section>
        <section className="section">
          <div className="container">
          </div>
        </section>
      </article>
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
        body_text {
          value
        }
        location {
          value
        }
        posted {
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
