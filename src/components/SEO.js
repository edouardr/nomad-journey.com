import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  graphql
} from 'gatsby';

const SEO = ({
  item
}) => {
  return (
    <Helmet title = { `${item.elements.page_metadata__og_title.value} ${item.site.siteMetadata.title}` }
    meta = {
      [{
          hid: 'description',
          name: 'description',
          content: item.elements.page_metadata__meta_description.value
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: item.elements.page_metadata__meta_keywords.value
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: item.elements.page_metadata__og_title.value
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: item.elements.page_metadata__og_image.value[0].url
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: item.elements.page_metadata__og_image.value[0].description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: item.elements.page_metadata__og_description.value
        }
      ]
    }
    />
  );
};

export const query = graphql `
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
      title
    }
  }
`;

SEO.propTypes = {
  item: PropTypes.object
};

export default SEO;
