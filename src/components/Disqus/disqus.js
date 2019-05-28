import React from 'react';
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types';
import useCurrentPage from '../../hooks/useCurrentPage';
import styles from './disqus.module.scss';

const Disqus = ({ siteUrl }) => {
  const { currentPage } = useCurrentPage();

  if (!process.env.DISQUS_SHORTNAME) {
    return null;
  }

  const disqusConfig = {
    identifier: currentPage.fields.codename,
    title: currentPage.elements.jumbotron__title.value,
    url: `${siteUrl}${currentPage.fields.language}/${currentPage.fields.slug}`,
  };

  return (
    <div className={styles.comments}>
      <DiscussionEmbed
        shortname={process.env.DISQUS_SHORTNAME}
        config={disqusConfig}
      />
    </div>
  );
};

Disqus.propTypes = {
  siteUrl: PropTypes.string
};

export default Disqus;
