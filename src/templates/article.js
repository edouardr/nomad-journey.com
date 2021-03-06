import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getItemPerLanguage } from '../utils/templateHelper';
import ArticleNavigation from '../components/Article/navigation';
import ArticleHeader from '../components/Article/header';
import Disqus from '../components/Disqus/disqus';
import Gallery from '../components/Gallery/gallery';
import Header from '../components/Header/header';
import Layout from '../components/Layout/layout';
import '../components/SEO/SEO';
import useCurrentPage from '../hooks/useCurrentPage';
import useLang from '../hooks/useLang';
import BackToTop from '../components/Article/backToTop';

const Article = React.memo(function Article({ data, pageContext }) {
  const { definePage } = useCurrentPage();
  const { defineLang } = useLang();
  const currentArticle = data.allKenticoCloudItemArticle.edges.filter(
    edge => edge.node.fields.codename === pageContext.codename,
  );
  const articlesByLanguage = data.allKenticoCloudItemArticle.edges.filter(
    edge => edge.node.fields.language === pageContext.language,
  );
  const currentIndex = articlesByLanguage
    .map(edge => edge.node.fields.codename)
    .indexOf(pageContext.codename);
  const next = articlesByLanguage[currentIndex + 1];
  const previous = articlesByLanguage[currentIndex - 1];
  const item = getItemPerLanguage(
    pageContext.language,
    currentArticle,
    data.site,
  );

  React.useEffect(() => {
    defineLang(pageContext.language);
    definePage(item);
  }, []);

  return (
    <Layout
      codename={pageContext.codename}
      language={pageContext.language}
      template={pageContext.templateName}
    >
      <Header />
      <article>
        <ArticleHeader article={item} />
        <div className="columns">
          <div className="column is-offset-2 is-8">
            <section className="section ">
              <div
                className="content is-large"
                dangerouslySetInnerHTML={{
                  __html: item.elements.body_text.value,
                }}
              />
            </section>
          </div>
        </div>
        <div className="container">
          <Gallery images={item.elements.images.value} />
          <ArticleNavigation previous={next} next={previous} />
          <Disqus siteUrl={item.site.siteMetadata.siteUrl} />
        </div>
        <BackToTop />
      </article>
    </Layout>
  );
});

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
      codename
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
          name
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
    allKenticoCloudItemArticle(
      sort: { order: DESC, fields: [elements___posted___value] }
    ) {
      edges {
        node {
          ...articleData
        }
      }
    }
  }
`;
