import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';
import useGetPolicies from '../../hooks/useGetPolicies';
import useGetAllData from '../../hooks/useGetAllData';
import useGetPages from '../../hooks/useGetPages';
import Pagination from '../../components/Pagination';

const Sector = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const perPage = 20;
  const router = useRouter();
  const { sectorName } = router.query;
  const [policies, sectors, status] = useGetAllData();
  const [getBySector, filteredPolicies] = useGetPolicies(policies);
  
  const [getPages, pageCount] = useGetPages();
  

  const onChange = (page) => {
    setPageNumber(page);
    window.scrollTo(0,0);
  }
  
  useEffect(() => {
    if(sectorName && policies.length) {
      getBySector(sectorName);
    }
  }, [sectorName, policies]);

  useEffect(() => {
    if(filteredPolicies?.length) {
      getPages(perPage, filteredPolicies)
      setPageNumber(1);
    }
    
  }, [filteredPolicies])

  return (
    <section>
      <Head>
        <title>Climate Policies - {sectorName}</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main showFilter sectors={sectors}>
        <Heading size={2} extraClasses="text-darkblue">{sectorName}</Heading>
        <List 
          items={filteredPolicies}
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
export default Sector;