import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import '../components/SEO';
import './article.css';
import Gallery from '../components/gallery';

const Article = ({ data }) => {
  const item = {
    elements: data.kenticoCloudItemArticle.elements,
    fields: data.kenticoCloudItemArticle.fields,
    site: data.site
  };

  return (
    <Layout item={item}>
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
          <Img fluid={item.fields.jumbotronImage.childImageSharp.fluid} alt={item.elements.jumbotron__image.value[0].description} />
        </div>
        <section className="section">
          <div className="container is-light">
            <div className="content is-medium" dangerouslySetInnerHTML={{ __html: item.elements.body_text.value }}></div>
          </div>
        </section>
        <Gallery images={item.elements.images.value} />
      </article>
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query articleQuery($slug: String!) {
    site {
      ...siteMetadata
    }
    kenticoCloudItemArticle(fields: { slug: { eq: $slug }}) {
      ...articleMetadata
      fields {
        language
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
            description
          }
        }
        images {
          value {
            description
            name
            url
          }
        }
      }
    }
  }
`;

Article.propTypes = {
  data: PropTypes.object,
};
