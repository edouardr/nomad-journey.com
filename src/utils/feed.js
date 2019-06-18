module.exports = {
  query: `
    {
      site {
        siteMetadata {
          title
          siteUrl
          site_url: siteUrl
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allKenticoCloudItemArticle } }) => {
        return allKenticoCloudItemArticle.edges.map(edge => {
          const slug = `${site.siteMetadata.siteUrl}${edge.node.system.language}/${edge.node.elements.slug.value}`;
          return Object.assign({}, edge.node, {
            title: edge.node.elements.jumbotron__title.value,
            description: edge.node.elements.jumbotron__description.value,
            date: edge.node.elements.posted.value,
            url: slug,
            guid: edge.node.id,
            custom_elements: [
              {
                'content:encoded': edge.node.elements.body_text.value,
              },
              {
                location: edge.node.elements.location.value,
              },
              {
                image_url: edge.node.elements.jumbotron__image.value[0].url,
              },
            ],
          });
        });
      },
      query: `{
        allKenticoCloudItemArticle (
          sort: { order: DESC, fields: [elements___posted___value] }
        ) {
          edges {
            node {
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
                    url
                    description
                    name
                  }
                }
                slug {
                  value
                }
              }
            }
          }
        }
      }`,
      output: '/rss.xml',
      title: "Nomad Journey's RSS Feed",
    },
  ],
};
