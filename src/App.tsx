import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Highlight,
  Pagination,
  Configure,
} from 'react-instantsearch-hooks-web';
import type { Hit, BaseHit } from 'instantsearch.js';
import CustomSearchBox from './components/Algolia/CustomSearchBox';

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_ID
);

interface Product {
  objectID: string;
  name: string;
  description: string;
  brand: string;
  categories: string[];
  price: number;
  image: string;
  popularity: number;
}

function CustomHit({ hit }: { hit: Hit<BaseHit> }) {
  const item = hit as unknown as Product;

  return (
    <article>
      <img src={item.image} alt={item.name} />
      <p>{item.categories[0]}</p>
      <h2>
        <Highlight attribute='name' hit={hit} />
      </h2>
      <p>${item.price}</p>
    </article>
  );
}

function Search() {
  return (
    <>
      <h1> Algolia Practice </h1>
      <Configure hitsPerPage={5} />
      <CustomSearchBox />
      <Hits hitComponent={CustomHit} />
      <Pagination />
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <InstantSearch
        searchClient={searchClient}
        indexName='search-sample'
      >
        <Search />
      </InstantSearch>
    </div>
  );
}

export default App;
