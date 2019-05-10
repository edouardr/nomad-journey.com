import React, { useState } from "react";
import ReactDisqusComments from "react-disqus-comments";
import PropTypes from 'prop-types';
import useCurrentPage from "../../hooks/useCurrentPage";

const Disqus = ({ siteUrl }) => {
  const [toasts, setToasts] = useState([]);
  const { currentPage } = useCurrentPage();

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
      identifier={currentPage.fields.codename}
      title={currentPage.elements.jumbotron__title.value}
      url={`${siteUrl}${currentPage.fields.language}/${currentPage.fields.slug}`}
      onNewComment={notifyAboutComment}
    />
  );
};

Disqus.propTypes = {
  siteUrl: PropTypes.string
};

export default Disqus;
