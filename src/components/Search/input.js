import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDictionaryQuery from '../../hooks/useDictionaryQuery';
import { connectSearchBox } from 'react-instantsearch-dom';
import useLang from '../../hooks/useLang';
import { getDictionaryValue } from '../../utils/dictionary';

const DICT_SEARCH = `search`;

export default connectSearchBox(({ refine, onFocus }) => {
  const handleSearch = event => {
    if (event.target.value === '' || event.target.value === undefined) {
      return;
    }

    refine(event.target.value);
  };

  const { language } = useLang();
  const data = useDictionaryQuery();
  const dic_search = getDictionaryValue({
    key: DICT_SEARCH,
    lang: language,
    data: data,
  });

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
                {dic_search}
              </label>
              <input
                className="input is-medium is-flat"
                type="text"
                name="search"
                placeholder={dic_search}
                aria-label={dic_search}
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
