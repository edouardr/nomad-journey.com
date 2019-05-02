import React from "react";
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";
import PureListing from "./pureListing";

const loadCount = 3;

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
              location {
                value
              }
              posted {
                value
              }
              slug {
                value
              }
            }
          }
        }
      }
    }
  `);
  const articles = new Array(...data.allKenticoCloudItemArticle.edges).filter(edge => language === edge.node.system.language).slice(1);

  return (

    <section className="section has-background-light">
      <div className={`container`}>
        <PureListing articles={articles} loadCount={loadCount} />
      </div>
    </section>
  );
};

ArticleListing.propTypes = {
  language: PropTypes.string
};

export default ArticleListing;
