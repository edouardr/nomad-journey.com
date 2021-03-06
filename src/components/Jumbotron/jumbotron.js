import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import useLang from '../../hooks/useLang';
import useCurrentPage from '../../hooks/useCurrentPage';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import { getDictionaryValue } from '../../utils/dictionary';
import styles from './jumbotron.module.scss';

const DICT_READ_MORE = 'read-more';

const Jumbotron = ({ item, showLink = false }) => {
  const { currentPage } = useCurrentPage();
  const { language } = useLang();
  const data = useDictionaryQuery();
  const dict_read_more = getDictionaryValue({
    key: DICT_READ_MORE,
    lang: language,
    data: data,
  });
  item = item || currentPage;

  const imgStyle = { position: 'unset' };

  return (
    <section className={`${styles.hero} is-medium`}>
      <div className={styles.heroBody}>
        <div className={styles.image}>
          <div className={styles.mediaObj}>
            <Img
              fluid={item.fields.jumbotronImage.childImageSharp.fluid}
              alt={
                item.elements.jumbotron__image.value[0].description ||
                item.elements.jumbotron__image.value[0].name
              }
              style={imgStyle}
            />
          </div>
          <div className={`content ${styles.contentWrap}`}>
            <h1 className="title has-text-white is-2 is-spaced is-large">
              {item.elements.jumbotron__title.value}
            </h1>
            <div
              className="subtitle has-text-white is-4"
              dangerouslySetInnerHTML={{
                __html: item.elements.jumbotron__description.value,
              }}
            />
            {showLink && (
              <Link
                to={`/${language}/${item.elements.slug.value}`}
                className="button is-light has-text-white"
              >
                {dict_read_more}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Jumbotron.propTypes = {
  item: PropTypes.object,
  showLink: PropTypes.bool,
};

export default Jumbotron;
