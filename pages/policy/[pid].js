import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import SectorTag from '../../components/SectorTag';
import Button from '../../components/Button';
import AddMetadata from '../../components/AddMetadata';
import useGetPolicy from '../../hooks/useGetPolicy';
import useGetAllData from '../../hooks/useGetAllData';

const Policy = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [showForm, setShowForm] = useState(false);
  const [sectorNames, setSectorNames] = useState([]);
  const [policies, sectors, status] = useGetAllData();
  const [findPolicy, policy] = useGetPolicy(policies);

  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  }
  useEffect(() => {
    if(policy?.sectors) {
      setSectorNames(policy.sectors.split(';'))
    }
  }, [policy])
  useEffect(() => {
    if(pid && policies.length) {
      findPolicy(pid);
    }
  }, [pid, policies]);

  return (
    <section>
      <Head>
        <title>Climate Policy - {policy?.policy_title}</title>
        <meta name="description" content="Climate Policy - Policy Title" />
      </Head>
      <Main showFilter sectors={sectors}>
        <div data-cy="metadataToggle" className="flex justify-end">
          <Button onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'View/Update Metadata'}
          </Button>
        </div>
        <Heading size={2} extraClasses="text-darkblue">{policy?.policy_title}</Heading>
        
        {showForm &&
          <div>
            <AddMetadata status={status} policy={policy} />
          </div>
        }
        
        <p>{policy?.description_text}</p>
        <div className="border-lightgrey mt-8 border-t p-4">
          <span className="font-bold mr-2">Sectors: </span> 
          {sectorNames.map((sector, index) => (
            <SectorTag key={index} title={sector} />
          ))}
        </div>
      </Main>

      
    </section>
  )
}
export default Policy;