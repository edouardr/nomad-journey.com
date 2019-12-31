import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Bounce, Spinner, BounceDelayed } from '../UI';
import useLang from '../../hooks/useLang';

const MAILCHIMP_SUCCESS_RESPONSE = 'success';

const SubLayout = ({ children }) => (
  <section className="section is-medium">
    <div className="container">{children}</div>
  </section>
);

const MailChimpSubscription = () => {
  const { language } = useLang();
  const data = useStaticQuery(graphql`
    query {
      allKenticoCloudItemNewsletterForm(
        filter: { system: { codename: { eq: "newsletter_form" } } }
      ) {
        edges {
          node {
            system {
              language
            }
            elements {
              button_label {
                value
              }
              description {
                value
              }
              email_label {
                value
              }
              error_message {
                value
              }
              first_name_label {
                value
              }
              thank_you_message {
                value
              }
            }
          }
        }
      }
    }
  `);
  const localizedForm = new Array(
    ...data.allKenticoCloudItemNewsletterForm.edges,
  ).filter(form => form.node.system.language === language)[0];
  const [email, setEmail] = React.useState();
  const [response, setResponse] = React.useState();
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [listFields, setListFields] = React.useState({
    LANG: language,
  });

  if (!submitted && submitting) {
    return (
      <SubLayout>
        <Spinner>
          <Bounce />
          <BounceDelayed />
        </Spinner>
      </SubLayout>
    );
  }

  const handleSubmit = async event => {
    setSubmitting(true);
    event.preventDefault();
    if (!email) {
      return;
    }
    const { result } = await addToMailchimp(email, listFields);
    setResponse(
      result === MAILCHIMP_SUCCESS_RESPONSE
        ? localizedForm.node.elements.thank_you_message.value
        : localizedForm.node.elements.error_message.value,
    );
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleFirstNameChange = event => {
    setListFields({ FNAME: event.target.value, LANG: language });
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const html = { __html: response };

  return submitted ? (
    <SubLayout>
      <div
        className="is-size-3 has-text-centered"
        dangerouslySetInnerHTML={html}
      ></div>
    </SubLayout>
  ) : (
    <SubLayout>
      <div className="columns is-vcentered">
        <div className="cloumn">
          <p className="title is-size-4">Newsletter</p>
          <p className="subtitle">
            {localizedForm.node.elements.description.value}
          </p>
        </div>
        <div className="column">
          <form onSubmit={handleSubmit}>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <label htmlFor="firstname">
                      <input
                        className="input is-medium is-flat"
                        type="text"
                        name="firstname"
                        placeholder={
                          localizedForm.node.elements.first_name_label.value
                        }
                        onChange={handleFirstNameChange}
                        aria-label="firstname"
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="user" />
                      </span>
                      <span className="is-hidden-touch is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">
                        Firstname
                      </span>
                    </label>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <label htmlFor="email">
                      <input
                        className="input is-medium is-flat"
                        type="email"
                        name="email"
                        placeholder={
                          localizedForm.node.elements.email_label.value
                        }
                        onChange={handleEmailChange}
                        aria-label="email"
                      />
                      <span className="is-hidden-touch is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">
                        Email
                      </span>
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="envelope" />
                      </span>
                    </label>
                  </p>
                </div>
                <div className="control">
                  <button
                    type="submit"
                    className="button is-light is-medium has-text-white"
                  >
                    {localizedForm.node.elements.button_label.value}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SubLayout>
  );
};

SubLayout.propTypes = {
  children: PropTypes.node,
};

export default React.memo(MailChimpSubscription);
