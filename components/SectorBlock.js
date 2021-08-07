import { useState, useEffect } from 'react';
import Link from 'next/link';

const SectorBlock = ({title, count}) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if(number >= count) return;
    const counter = setTimeout(() => {
      setNumber(number + 1)
    }, 50)
    return () => clearTimeout(counter);
  })
  return (
    <Link href="/sector">
      <a className="bg-lightblue rounded-lg p-4 text-white block hover:bg-blue transition duration-300 cursor-pointer">
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="text-5xl font-bold">{number} </span><span>policies</span>
      </a>
    </Link>
    
  )
}
export default SectorBlock;