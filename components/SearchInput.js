import { useState } from 'react';
const SearchInput = ({handleSubmit}) => {
  const [query, setQuery] = useState('');
  const submitSearch = (e) => {
    handleSubmit(e, query);
  }
  return (
    <form onSubmit={submitSearch}>
      <div className="rounded-lg p-1 bg-white flex justify-end items-center">
        <input type="text" onChange={(e) => {setQuery(e.currentTarget.value)}} className="p-1 w-48" placeholder="Search policies" />
        <button className="search-button">
          <img src="/images/search-icon.svg" alt="Search icon" />
        </button>
      </div>
    </form>

  )
}
export default SearchInput;