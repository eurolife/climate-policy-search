import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPolicies } from '../actions';
import Head from 'next/head';
import Main from '../components/Main';
import Sectors from '../components/Sectors';
import Heading from '../components/Heading';


export default function Home() {
  const policies = useSelector((state) => state.policies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPolicies());
  }, [])
  return (
    <section>
      <Head>
        <title>Climate Policy Search</title>
        <meta name="description" content="Search climate policies" />
      </Head>
      <Main>
        <Heading size={2} extraClasses="text-darkblue">Choose from these sectors</Heading>
        <Sectors policies={policies} />
      </Main>
    </section>
  )
}
