import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import usePageSEO from '../../hooks/usePageSEO';

const SEO = ({ codename, language, template }) => {
  const { site, pageSEO } = usePageSEO({
    codename,
    template,
    language,
  });

  if (!pageSEO) {
    return false;
  }

  const url = `${site.siteUrl}/${pageSEO.elements.slug.value}`;

  return (
    <React.Fragment>
      <Helmet
        defer={false}
        title={pageSEO.elements.page_metadata__og_title.value}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        htmlAttributes={{ lang: language }}
      >
        <link rel="canonical" href={url} />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={pageSEO.elements.page_metadata__meta_description.value}
        />
        <meta
          name="keywords"
          content={pageSEO.elements.page_metadata__meta_keywords.value}
        />
        <meta
          name="image"
          content={pageSEO.elements.page_metadata__og_image.value[0].url}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={pageSEO.elements.page_metadata__og_title.value}
        />
        <meta
          property="og:description"
          content={pageSEO.elements.page_metadata__og_description.value}
        />
        <meta
          property="og:image"
          content={pageSEO.elements.page_metadata__og_image.value[0].url}
        />
        <meta
          property="og:image:alt"
          content={
            pageSEO.elements.page_metadata__og_image.value[0].description
          }
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
    </React.Fragment>
  );
};

export const query = graphql`
  fragment itineraryMetadata on KenticoCloudItemItinerary {
    elements {
      page_metadata__meta_description {
        value
      }
      page_metadata__meta_keywords {
        value
      }
      page_metadata__og_description {
        value
      }
      page_metadata__og_image {
        value {
          url
          description
        }
      }
      page_metadata__og_title {
        value
      }
      page_metadata__meta_title {
        value
      }
      slug {
        value
      }
    }
  }
  fragment aboutUsMetadata on KenticoCloudItemAboutUs {
    elements {
      page_metadata__meta_description {
        value
      }
      page_metadata__meta_keywords {
        value
      }
      page_metadata__og_description {
        value
      }
      page_metadata__og_image {
        value {
          url
          description
        }
      }
      page_metadata__og_title {
        value
      }
      page_metadata__meta_title {
        value
      }
      slug {
        value
      }
    }
  }
  fragment articleMetadata on KenticoCloudItemArticle {
    elements {
      page_metadata__meta_description {
        value
      }
      page_metadata__meta_keywords {
        value
      }
      page_metadata__og_description {
        value
      }
      page_metadata__og_image {
        value {
          url
          description
        }
      }
      page_metadata__og_title {
        value
      }
      page_metadata__meta_title {
        value
      }
      slug {
        value
      }
    }
  }
  fragment landingPageMetadata on KenticoCloudItemLandingPage {
    elements {
      page_metadata__meta_description {
        value
      }
      page_metadata__meta_keywords {
        value
      }
      page_metadata__og_description {
        value
      }
      page_metadata__og_image {
        value {
          url
          description
        }
      }
      page_metadata__og_title {
        value
      }
      page_metadata__meta_title {
        value
      }
      slug {
        value
      }
    }
  }
  fragment siteMetadata on Site {
    siteMetadata {
      siteUrl
      title
    }
  }
`;

export default SEO;
