import Heading from './Heading';
import SearchInput from './SearchInput';
import Link from 'next/link';
import Select from './Select';

const Header = ({showFilter}) => {
  return (
    <header className="h-64 lg:h-80 px-4">
      <div className="container relative h-full flex flex-col justify-end items-center md:flex-row md:justify-start">
        <Link href="/">
          <a className="block absolute top-0">
            <img className="rounded-b-xl" src="/images/logo.png" alt="Climate Policy Radar logo" />
          </a>
        </Link>
        
        <Heading size={1} extraClasses="w-full text-center text-white drop-shadow-dark mb-6">Climate Policy Search</Heading>
        <div className="mb-4 md:absolute top-0 right-0 md:mt-4 md:mr-4">
          <SearchInput />
        </div>
        {showFilter && 
          <div className="mb-4 md:absolute right-0 bottom-0 md:mb-4 md:mr-4">
            <Select extraClasses="w-60" label="Choose a Sector" />
          </div>
        }
        
      </div>
    </header>
  )
}
export default Header;