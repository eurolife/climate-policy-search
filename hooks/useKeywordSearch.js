import { useState } from 'react';

const useKeywordSearch = () => {
  const [searchResults, setSearchResults] = useState(null);
  const getByKeywords = (policies, keywords) => {
    setSearchResults(policies.filter((policy) => policy.description_text.toLowerCase().indexOf(keywords.toLowerCase()) > -1));
  }
  return [getByKeywords, searchResults];
}
export default useKeywordSearch;