import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import useLang from '../../hooks/useLang';
import styles from './formSubscription.module.scss';

const MAILCHIMP_SUCCESS_RESPONSE = 'success';

const MailChimpSubscription = () => {
  const { language } = useLang();
  const data = useStaticQuery(graphql`
    query {
      allKenticoCloudItemNewsletterForm(filter: {system: {codename: {eq: "newsletter_form"}}}) {
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
  const localizedForm = new Array(...data.allKenticoCloudItemNewsletterForm.edges).filter(form => form.node.system.language === language)[0];
  const [email, setEmail] = React.useState();
  const [response, setResponse] = React.useState();
  const [submitted, setSubmitted] = React.useState(false);
  const [listFields, setListFields] = React.useState({
    FNAME: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    const { result, msg } = await addToMailchimp(email, listFields);
    debugger;
    setResponse(result === MAILCHIMP_SUCCESS_RESPONSE
      ? localizedForm.node.elements.thank_you_message.value
      : localizedForm.node.elements.error_message.value);
    setSubmitted(true);
  };

  return submitted
    ? (
      <div className={`${styles.formContainer}`}>
        <section className="section">
          <div className={`container ${styles.formContainer}`}>
            <div className="has-text-centered has-text-white" dangerouslySetInnerHTML={{ __html: response }}></div>
          </div>
        </section>
      </div>
    )
    : (
      <div className={`${styles.formContainer}`}>
        <section className="section">
          <div className={`container ${styles.formContainer}`}>
            <div className="columns is-vcentered">
              <div className="cloumn has-text-centered">
                <p className="title has-text-white is-size-4">{localizedForm.node.elements.description.value}</p>
              </div>
              <div className="column">
                <form onSubmit={handleSubmit}>
                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <input className="input is-medium is-flat" type="text" placeholder={localizedForm.node.elements.first_name_label.value} 
                            onChange={event => setListFields({ FNAME: event.target.value })} />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="user" />
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <input className="input is-medium is-flat" type="email" placeholder={localizedForm.node.elements.email_label.value} 
                            onChange={event => setEmail(event.target.value)} />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="envelope" />
                          </span>
                        </p>
                      </div>
                      <div className="control">
                        <button type="submit" className="button is-primary is-medium">{localizedForm.node.elements.button_label.value}</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default MailChimpSubscription;
