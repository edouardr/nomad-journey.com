import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import useCurrentPage from '../../hooks/useCurrentPage';

const SEO = React.memo(function SEO() {
  const { currentPage } = useCurrentPage();
  if (!currentPage) {
    return false;
  }

  return (
    <Helmet
      title={`${currentPage.elements.page_metadata__og_title.value}${currentPage.site.siteMetadata.title}`}
      meta={[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: currentPage.elements.page_metadata__meta_description.value,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: currentPage.elements.page_metadata__meta_keywords.value,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: currentPage.elements.page_metadata__og_title.value,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: currentPage.elements.page_metadata__og_image.value[0].url,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content:
            currentPage.elements.page_metadata__og_image.value[0].description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: currentPage.elements.page_metadata__og_description.value,
        },
      ]}
      link={[{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]}
    />
  );
});

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
