import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(({ refine, onFocus }) => {
  const handleSearch = event => {
    if (event.target.value === '' || event.target.value === undefined) {
      return;
    }

    refine(event.target.value);
  };

  return (
    <form>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <label
                className="is-hidden-touch is-hidden-desktop is-hidden-widescreen is-hidden-fullhd"
                htmlFor="email"
              >
                Search
              </label>
              <input
                className="input is-medium is-flat"
                type="text"
                name="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}
                onFocus={onFocus}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="search" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
});
