import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import { formatDate } from '../../utils/date-time';

export const ArticleHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <div>
      <FontAwesomeIcon icon="calendar" /> {formatDate(hit.posted)}
      &emsp;
    </div>
    <Snippet attribute="content" hit={hit} tagName="mark" />
  </div>
);
