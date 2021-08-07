import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';

const Search = () => {
  return (
    <section>
      <Head>
        <title>Climate Policies - Search</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main showFilter>
        <Heading size={2} extraClasses="text-darkblue">Results for "Search term"</Heading>
        <List />
      </Main>
      </section>
  )
}
export default Search;