import React from "react";

const Footer = () => {
  const fbUsername = process.env.FB_USERNAME;
  const instaUsername = process.env.INSTA_USERNAME;
  return (
    <footer className="footer">
      <div className="footer-social has-text-centered">
        <a className="is-size-1" href={`https://facebook.com/${fbUsername}`} title="Facebook A Nomad Journey" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            {/* <font-awesome-icon :icon="['fab', 'facebook-f']" /> */}
          </span>
        </a>

        <a className="is-size-1" href={`https://instagram.com/${instaUsername}`} title="Instagram A Nomad Journey" target="_blank" rel="noopener noreferrer">
          <span className="icon is-medium">
            {/* <font-awesome-icon :icon="['fab', 'instagram']" /> */}
          </span>
        </a>
      </div>
      <div className="footer-legal">
        <div className="has-text-centered">
          <p className="has-text-white">
            <small>© 2019 A Nomad Journey</small>
          </p>
          <div className="container content">
            {/* <link to={`/${language}/legals`} title={`${legals.page.jumbotronTitle.value}`}>
                {legals.page.jumbotron__yitle.value}
            </link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
