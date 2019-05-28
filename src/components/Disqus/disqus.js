import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import PropTypes from 'prop-types';
import useCurrentPage from '../../hooks/useCurrentPage';
import styles from './disqus.module.scss';

const Disqus = ({ siteUrl }) => {
  const { currentPage } = useCurrentPage();

  if (!process.env.DISQUS_SHORTNAME) {
    return null;
  }

  return (
    <div className={styles.comments}>
      <ReactDisqusComments
        shortname={process.env.DISQUS_SHORTNAME}
        identifier={currentPage.fields.codename}
        title={currentPage.elements.jumbotron__title.value}
        url={`${siteUrl}${currentPage.fields.language}/${currentPage.fields.slug}`}
      />
    </div>
  );
};

Disqus.propTypes = {
  siteUrl: PropTypes.string
};

export default Disqus;
