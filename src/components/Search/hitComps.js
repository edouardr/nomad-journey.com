import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import { formatDate } from '../../utils/date-time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ArticleHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <p className="is-size-4 has-text-weight-bold">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </p>
    </Link>
    <div>
      <FontAwesomeIcon icon="calendar" /> {formatDate(hit.posted)}
      &emsp;
      <FontAwesomeIcon icon="map-marker-alt" />
      &emsp;
      <Highlight attribute="location" hit={hit} tagName="mark" />
      &emsp;
    </div>
    <Snippet attribute="content" hit={hit} tagName="mark" />
  </div>
);
