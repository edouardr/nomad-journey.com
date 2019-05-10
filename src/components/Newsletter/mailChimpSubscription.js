import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './formSubscription.module.scss';

const MailChimpSubscription = () => {
  const [email, setEmail] = React.useState();
  const [success, setSuccess] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [listFields, setListFields] = React.useState({
    FNAME:''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!email) {
      return;
    }
    const { result, msg } = await addToMailchimp(email, listFields);
    setSuccess(result === 'success');
  };

  return (
    <div className={`${styles.formContainer}`}>
      <section className="section">
        <div className="columns is-vcentered">
          <div className="cloumn has-text-centered">
            <p className="title has-text-white is-size-4">Get notified when we release a new article!</p>
          </div>
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input className="input is-medium is-flat" type="text" placeholder="First Name" onChange={event => setListFields({FNAME:event.target.value})}/>
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="user" />
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input className="input is-medium is-flat" type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="envelope" />
                      </span>
                    </p>
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-primary is-medium">Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
};

export default MailChimpSubscription;
