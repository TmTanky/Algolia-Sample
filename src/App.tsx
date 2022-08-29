import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Pagination,
  Configure,
} from 'react-instantsearch-hooks-web';
import { CustomHits, CustomSearchBox } from './components/Algolia/index';

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_ID
);

function Search() {
  return (
    <>
      <Configure hitsPerPage={5} />
      <CustomSearchBox />
      <CustomHits />
      <Pagination />
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <InstantSearch searchClient={searchClient} indexName='search-sample'>
        <Search />
      </InstantSearch>
    </div>
  );
}

export default App;
