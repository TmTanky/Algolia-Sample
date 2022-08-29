import React from 'react';
import { debounce } from 'lodash';
import { MdSearch, MdClose } from 'react-icons/md';
import { SearchBox } from 'react-instantsearch-hooks-web';
import '../../styles/algolia.css';

// TODO: Improve the debounce call

export default function CustomSearchBox() {
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
      submitIconComponent={() => <MdSearch color='black' size={20} />}
      resetIconComponent={() => <MdClose color='black' size={20} />}
      queryHook={(query, search) => {
        const pota = debounce(() => search(query), 1000);
        pota();
      }}
    />
  );
}
