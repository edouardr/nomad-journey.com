import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ codename, language }) => {
  const { site, allKenticoCloudItemArticle } = useStaticQuery(graphql`
    query {
      site {
        ...siteMetadata
      }
      allKenticoCloudItemArticle {
        edges {
          node {
            system {
              codename
            }
            ...articleMetadata
          }
        }
      }
    }
  `);

  const currentPage = allKenticoCloudItemArticle.edges
    .filter(edge => edge.node.system.codename === codename)
    .map(edge => edge.node)[0];

  if (!currentPage) {
    return false;
  }

  return (
    <React.Fragment>
      <Helmet
        defer={false}
        title={currentPage.elements.page_metadata__og_title.value}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        <html lang={language} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta
          name="description"
          content={currentPage.elements.page_metadata__meta_description.value}
        />
        <meta
          name="keywords"
          content={currentPage.elements.page_metadata__meta_keywords.value}
        />
        <meta
          name="image"
          content={currentPage.elements.page_metadata__og_image.value[0].url}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={currentPage.elements.page_metadata__og_title.value}
        />
        <meta
          property="og:description"
          content={currentPage.elements.page_metadata__og_description.value}
        />
        <meta
          property="og:image"
          content={currentPage.elements.page_metadata__og_image.value[0].url}
        />
        <meta
          property="og:image:alt"
          content={
            currentPage.elements.page_metadata__og_image.value[0].description
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
