import React, { Fragment } from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import { Calendar } from 'styled-icons/octicons/Calendar';
import { Tags } from 'styled-icons/fa-solid/Tags';
import { formatDate } from '../../utils/date-time';

export const ArticleHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <div>
      <Calendar size="1em" /> {formatDate(hit.posted)}
      &emsp;
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);
