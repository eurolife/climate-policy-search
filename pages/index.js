import Head from 'next/head';
import Main from '../components/Main';
import Sectors from '../components/Sectors';
import Heading from '../components/Heading';
import Spinner from '../components/Spinner';
import useGetAllData from '../hooks/useGetAllData';


export default function Home() {

  const [policies, sectors, status] = useGetAllData();

  return (
    <section>
      <Head>
        <title>Climate Policy Search</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main sectors={sectors}>
        {status.loading ?
          <div className="flex justify-center items-center h-80">
            <Spinner />
          </div>
          
        :
          <>
            <Heading size={2} extraClasses="text-darkblue">Choose from these sectors</Heading>
            <Sectors sectors={sectors} />
          </>
        }
        
      </Main>
    </section>
  )
}
