import { useState } from 'react';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Main from '../../components/Main';
import List from '../../components/List';
import Button from '../../components/Button';
import AddMetadata from '../../components/AddMetadata';

const Policy = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  }
  return (
    <section>
      <Head>
        <title>Climate Policy - Policy Title</title>
        <meta name="description" content="Climate Policy - Policy Title" />
      </Head>
      <Main showFilter>
        <Heading size={2} extraClasses="text-darkblue">Policy Title</Heading>
        <div className="absolute top-0 right-0 mr-4">
          <Button onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'Add Metadata'}
          </Button>
        </div>
        {showForm &&
          <div>
            <AddMetadata />
          </div>
        }
        
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non malesuada nunc. Maecenas et purus a lorem mollis pharetra eu porttitor dolor. Etiam erat sapien, pharetra vel consequat nec, elementum sit amet magna. Aliquam ullamcorper cursus malesuada. Integer massa tellus, pulvinar eu urna ac, consequat dictum ex. Donec tempus eros et scelerisque fermentum. Fusce a fermentum lacus. Etiam non sagittis neque. Curabitur nisl lacus, placerat tristique vulputate ac, ultricies sit amet orci. Nunc auctor urna non nunc mattis egestas. Vivamus est dolor, convallis vel tristique sit amet, porta non metus. Fusce at enim id mi laoreet semper vel at lectus.</p>

        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vitae ipsum vestibulum, vehicula mi id, vestibulum sem. Cras eu mauris non risus sagittis dictum et eu elit. Vestibulum fringilla tortor ac augue eleifend accumsan. Nunc magna nisi, iaculis eget hendrerit ut, convallis nec diam. Nunc finibus elit dictum nisi congue condimentum. In ut ornare risus. Donec eu ex eget nulla vestibulum interdum. Integer sem ante, gravida vitae lacus vitae, egestas faucibus erat. Nulla odio nunc, condimentum et eros vitae, ullamcorper congue neque. Vestibulum pharetra risus at quam suscipit rhoncus. Phasellus quam risus, euismod imperdiet commodo a, ultrices quis risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dictum vehicula lectus et eleifend. Nulla fringilla est magna, lacinia laoreet turpis consequat id. Donec laoreet urna vitae purus mollis scelerisque.</p>
      </Main>

      
    </section>
  )
}
export default Policy;