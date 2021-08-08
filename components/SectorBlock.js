import { useState, useEffect } from 'react';
import Link from 'next/link';

const SectorBlock = ({sector}) => {
  const [number, setNumber] = useState(0);
  const count = sector.policy_ids.length;
  const { name, id } = sector;
  useEffect(() => {
    if(number >= count) return;
    const counter = setTimeout(() => {
      setNumber(number + 1)
    })
    return () => clearTimeout(counter);
  })
  return (
    <Link href={`sector/${name}`}>
      <a className="bg-lightblue rounded-lg p-4 text-white block hover:bg-blue transition duration-300 cursor-pointer flex flex-col justify-between">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div>
          <span className="text-5xl font-bold text-xlightblue">{number}</span><span> policies</span>
        </div>
        
      </a>
    </Link>
    
  )
}
export default SectorBlock;