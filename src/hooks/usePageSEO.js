import { useStaticQuery, graphql } from 'gatsby';

const getEdges = (template, data) => {
  switch (template) {
    case 'aboutUs':
      return data.allKenticoCloudItemAboutUs.edges;
    case 'article':
      return data.allKenticoCloudItemArticle.edges;
    case 'home':
    case 'landingPage':
      return data.allKenticoCloudItemLandingPage.edges;
    case 'itinerary':
      return data.allKenticoCloudItemItinerary.edges;
  }
};

const usePageSEO = ({ codename, language, template }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        ...siteMetadata
      }
      allKenticoCloudItemArticle {
        edges {
          node {
            system {
              codename
              language
            }
            ...articleMetadata
          }
        }
      }
      allKenticoCloudItemItinerary {
        edges {
          node {
            system {
              codename
              language
            }
            ...itineraryMetadata
          }
        }
      }
      allKenticoCloudItemAboutUs {
        edges {
          node {
            system {
              codename
              language
            }
            ...aboutUsMetadata
          }
        }
      }
      allKenticoCloudItemLandingPage {
        edges {
          node {
            system {
              codename
              language
            }
            ...landingPageMetadata
          }
        }
      }
    }
  `);
  const edges = getEdges(template, data);
  if (!edges) {
    return {
      pageSEO: null,
    };
  }
  const pageSEO = edges
    .filter(
      edge =>
        edge.node.system.codename === codename &&
        edge.node.system.language === language
    )
    .map(edge => edge.node)[0];

  return { site: data.site, pageSEO };
};

export default usePageSEO;
