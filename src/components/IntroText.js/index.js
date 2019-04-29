import React from "react";
import PropTypes from 'prop-types';

const IntroText = ({ html }) => (
  <section className="section has-background-light">
    <div className="container is-light">
      <div className="content is-medium" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  </section>
);

IntroText.propTypes = {
  html: PropTypes.string
};

export default IntroText;
