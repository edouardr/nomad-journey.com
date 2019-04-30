import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";
import styles from './listing.module.scss';
import ImageLoader from "../ImageLoader/imageLoader";

const startPosition = 0;
const articleLoadNumber = 5;

const ArticleListing = ({ language }) => {
  const data = useStaticQuery(graphql`
    query {
      allKenticoCloudItemArticle (sort: { order: DESC, fields: [elements___posted___value] }){
        edges {
          node {
            id
            system {
              language
            }
            elements {
              list_item__description {
                value
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
            }
          }
        }
      }
    }
  `);
  const articles = new Array(...data.allKenticoCloudItemArticle.edges).filter(edge => language === edge.node.system.language).slice(1);

  const initialState = {
    list: [],
    position: 0
  };

  const [state, setState] = useState(initialState);

  const loadMore = () => {
    const end = state.position + articleLoadNumber > articles.length ? articles.length : state.position + articleLoadNumber;
    const fullArray = state.list.concat(articles.slice(state.position, end));
    setState({ list: fullArray, position: end });
  };

  const handleClick = () => {
    loadMore();
  };

  useEffect(() => {
    setState({ list: articles.slice(startPosition, articleLoadNumber), position: articleLoadNumber });
  }, []);

  return (
    <section className="section">
      <div className="container">
        {
          state.list && state.list.map(article => (
            <div key={article.node.id}>
              <ImageLoader src={article.node.elements.list_item__thumbnail.value[0].url} />
              <div>{article.node.elements.list_item__title.value}</div>
              <div>{article.node.elements.list_item__description.value}</div>
            </div>
          ))
        }
        {
          state.position < articles.length && <button onClick={() => handleClick()}> Load more</button>
        }
      </div>
    </section>
  );
};

ArticleListing.propTypes = {
  language: PropTypes.string
};

export default ArticleListing;
