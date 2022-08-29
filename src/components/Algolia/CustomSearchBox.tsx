import React from 'react';
import { debounce } from 'lodash';
import { MdSearch, MdClose } from 'react-icons/md';
import { SearchBox } from 'react-instantsearch-hooks-web';
import '../../styles/algolia.css';

// TODO: Improve the debounce call

// eslint-disable-next-line import/prefer-default-export
export function CustomSearchBox() {
  return (
    <SearchBox
      classNames={{
        root: 'custom-search-box-root',
        input: 'custom-search-box-input',
        form: 'custom-search-box-form',
        submit: 'custom-search-box-submit',
        reset: 'custom-search-box-reset',
      }}
      placeholder='Search for Phones...'
      autoFocus
      // eslint-disable-next-line react/no-unstable-nested-components
      submitIconComponent={() => <MdSearch color='black' size={20} />}
      // eslint-disable-next-line react/no-unstable-nested-components
      resetIconComponent={() => <MdClose color='black' size={20} />}
      queryHook={(query, search) => {
        const pota = debounce(() => search(query), 1000);
        pota();
      }}
    />
  );
}
