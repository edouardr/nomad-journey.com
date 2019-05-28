import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { getItemPerLanguage } from '../utils/templateHelper';
import Disqus from '../components/Disqus/disqus';
import Gallery from '../components/Gallery/gallery';
import Header from '../components/Header/header';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';
import { formatDate } from '../utils/date-time';
import useCurrentPage from '../hooks/useCurrentPage';
import useLang from '../hooks/useLang';
import styles from './article.module.scss';
import ArticleNavigation from '../components/Article/navigation';

const Article = ({ data, pageContext }) => {
  const { definePage } = useCurrentPage();
  const { defineLang } = useLang();
  const currentArticle = data.allKenticoCloudItemArticle.edges.filter(edge => edge.node.fields.codename === pageContext.codename);
  const articlesByLanguage = data.allKenticoCloudItemArticle.edges.filter(edge => edge.node.fields.language === pageContext.language);
  const currentIndex = articlesByLanguage.map(edge => edge.node.fields.codename).indexOf(pageContext.codename);
  const next = articlesByLanguage[currentIndex + 1];
  const previous = articlesByLanguage[currentIndex - 1];
  const item = getItemPerLanguage(pageContext.language, currentArticle, data.site);

  React.useEffect(() => {
    defineLang(pageContext.language);
    definePage(item);
  }, []);

  return (
    <Layout>
      <Header />
      <article>
        <div className="columns">
          <div className="column is-offset-2 is-8">
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
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-2 is-8">
            <Img fluid={item.fields.jumbotronImage.childImageSharp.fluid} alt={item.elements.jumbotron__image.value[0].description} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-2 is-8">
            <section className="section ">
              <div className="content is-large" dangerouslySetInnerHTML={{ __html: item.elements.body_text.value }}></div>
            </section>
          </div>
        </div>
        <div className="container">
          <Gallery images={item.elements.images.value} />
          <ArticleNavigation previous={next} next={previous} />
          <Disqus siteUrl={item.site.siteMetadata.siteUrl} />
        </div>
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
      codename
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
      list_item__title {
        value
      }
      list_item__thumbnail {
        value {
          description
          url
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
  query articleQuery {
    site {
      ...siteMetadata
    }
    allKenticoCloudItemArticle(sort: { order: DESC, fields: [elements___posted___value] }) {
      edges {
        node {
          ...articleData
        }
      }
    }
  }
`;
