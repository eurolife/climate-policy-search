import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';

const Sector = () => {
  return (
    <section>
      <Head>
        <title>Climate Policies - Sector</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main showFilter>
        <Heading size={2} extraClasses="text-darkblue">Sector Name</Heading>
        <List />
      </Main>

      
    </section>
  )
}
export default Sector;