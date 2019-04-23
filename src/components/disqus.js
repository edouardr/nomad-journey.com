import React, { useState } from "react";
import ReactDisqusComments from "react-disqus-comments";
import PropTypes from 'prop-types';

const Disqus = ({ article, siteUrl }) => {
  const [toasts, setToasts] = useState([]);

  const notifyAboutComment = () => {
    toasts.slice();
    toasts.push({ text: 'New comment available!' });
    setToasts(toasts);
  };

  if (!process.env.DISQUS_SHORTNAME) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={process.env.DISQUS_SHORTNAME}
      identifier={article.fields.codename}
      title={article.elements.jumbotron__title.value}
      url={`${siteUrl}${article.fields.language}/${article.fields.slug}`}
      onNewComment={notifyAboutComment}
    />
  );
};

Disqus.propTypes = {
  article: PropTypes.object,
  siteUrl: PropTypes.string
};

export default Disqus;
