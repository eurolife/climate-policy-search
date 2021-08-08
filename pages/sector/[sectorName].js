import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';
import useGetPolicies from '../../hooks/useGetPolicies';
import useGetAllData from '../../hooks/useGetAllData';

const Sector = () => {
  const router = useRouter();
  const { sectorName } = router.query;
  const [policies, sectors, status] = useGetAllData();
  const [getBySector, filteredPolicies] = useGetPolicies(policies);
  
  useEffect(() => {
    if(sectorName && policies.length) {
      getBySector(sectorName);
    }
  }, [sectorName, policies]);

  return (
    <section>
      <Head>
        <title>Climate Policies - {sectorName}</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main showFilter sectors={sectors}>
        <Heading size={2} extraClasses="text-darkblue">{sectorName}</Heading>
        <List items={filteredPolicies} />
      </Main>

      
    </section>
  )
}
export default Sector;