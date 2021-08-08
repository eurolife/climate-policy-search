import { useEffect } from 'react';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';
import useGetAllData from '../../hooks/useGetAllData';
import useKeywordSearch from '../../hooks/useKeywordSearch';
import { useRouter } from 'next/router'

const Search = () => {
  const [policies, sectors, status] = useGetAllData();
  const router = useRouter()
  const query = router.query.q;
  const [getByKeywords, searchResults] = useKeywordSearch();

  useEffect(() => {
    if(policies?.length) {
      getByKeywords(policies, query);
    }
  }, [policies, query])

  return (
    <section>
      <Head>
        <title>Climate Policies - Search</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main showFilter sectors={sectors}>
        <Heading size={2} extraClasses="text-darkblue">Results for "{query}"</Heading>
        {policies?.length && searchResults?.length === 0 &&
          <p className="font-bold text-lg text-center py-6">No policies match your search.</p>
        }
        <List items={searchResults} />
      </Main>
      </section>
  )
}
export default Search;