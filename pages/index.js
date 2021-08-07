import Head from 'next/head';
import Main from '../components/Main';
import Sectors from '../components/Sectors';
import Heading from '../components/Heading';

export default function Home() {
  
  return (
    <section>
      <Head>
        <title>Climate Policy Search</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main>
        <Heading size={2} extraClasses="text-darkblue">Choose from these sectors</Heading>
        <Sectors />
      </Main>
    </section>
  )
}
