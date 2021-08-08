import { useEffect, useState } from 'react';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';
import useGetAllData from '../../hooks/useGetAllData';
import useKeywordSearch from '../../hooks/useKeywordSearch';
import useGetPages from '../../hooks/useGetPages';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';

const Search = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const perPage = 20;
  const [policies, sectors, status] = useGetAllData();
  const router = useRouter()
  const query = router.query.q;
  const [getByKeywords, searchResults] = useKeywordSearch();
  const [getPages, pageCount] = useGetPages();

  const onChange = (page) => {
    setPageNumber(page);
    window.scrollTo(0,0);
  }

  useEffect(() => {
    if(policies?.length) {
      getByKeywords(policies, query);
    }
  }, [policies, query])

  useEffect(() => {
    if(searchResults?.length > 0) {
      getPages(perPage, searchResults)
      setPageNumber(1);
    }
  }, [searchResults])

  return (
    <section>
      <Head>
        <title>Climate Policies - Search</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main showFilter sectors={sectors}>
        <Heading size={2} extraClasses="text-darkblue">{searchResults?.length} results for "{query}"</Heading>
        {policies?.length && searchResults?.length === 0 &&
          <p className="font-bold text-lg text-center py-6">No policies match your search.</p>
        }
        <List
          items={searchResults}
          pageNumber={pageNumber}
          pageCount={pageCount}
          perPage={perPage}
        />

        {pageCount > 1 &&
          <Pagination
            pageNumber={pageNumber}
            pageCount={pageCount}
            onChange={onChange}
          />
        }
      </Main>
    </section>
  )
}
export default Search;