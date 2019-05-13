import { useStaticQuery, graphql } from 'gatsby';

const useDictionaryQuery = () => {
  const { allKenticoCloudItemDictionaryEntry } = useStaticQuery(graphql`
    query {
      allKenticoCloudItemDictionaryEntry {
        edges {
          node {
            system {
              language
            }
            elements {
              key {
                value
              }
              value {
                value
              }
            }
          }
        }
      }
    }
  `);
  return allKenticoCloudItemDictionaryEntry;
};

export default useDictionaryQuery;
