import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Disqus from '../components/Disqus/disqus';
import Gallery from '../components/Gallery/gallery';
import Header from '../components/Header/header';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';
import { formatDate } from '../helpers/date-time';
import styles from './article.module.scss';

const getItemPerLanguage = (language, data) => {
  const articles = new Array(...data.allKenticoCloudItemArticle.edges);
  const localizedArticles = articles.filter(article => article.node.system.language === language)[0];

  return {
    allEdges: articles,
    elements: localizedArticles.node.elements,
    fields: localizedArticles.node.fields,
    site: data.site,
    system: localizedArticles.node.system,
  };
};

const Article = ({ data, pageContext }) => {
  const item = getItemPerLanguage(pageContext.language, data);

  return (
    <Layout item={item}>
      <Header lang={item.system.language} allEdges={item.allEdges} />
      <article>
        <div className="container is-widescreen">
          <div className={styles.articleHeader}>
            <div className="content">
              <p className="subtitle location">{item.elements.location.value}</p>
              <h1 className="title is-spaced">{item.elements.jumbotron__title.value}</h1>
            </div>
            <div className={styles.articleDetails}>
              <p>
                <span>{formatDate(item.elements.posted.value, item.system.language)}</span>
                <span className={styles.divider}></span>
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
        <section className="section">
          <div className="container">
            <Disqus article={item} siteUrl={item.site.siteMetadata.siteUrl} />
          </div>
        </section>
      </article>
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default Article;

export const query = graphql`
  fragment articleData on KenticoCloudItemArticle {
    ...articleMetadata
    fields {
      language
      slug
      jumbotronImage {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    id
    system {
      language
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
          width
          height
        }
      }
      slug {
        value
      }
    }
  }
  query articleQuery($codename: String!) {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemArticle(filter: {system: {codename: {eq: $codename}}}) {
      edges {
        node {
          ...articleData
        }
      }
    }
  }
`;
