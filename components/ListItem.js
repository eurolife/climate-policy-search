import SectorTag from "./SectorTag";
import Link from 'next/link';
import truncateString from "../helpers/truncateString";

const ListItem = ({id, title, text, sectors}) => {
  const teaser = truncateString(text, 200);
  return (
    <>
      <Link href={`/policy/${id}`}>
        <a>
          <h3 className="text-blue font-bold text-lg hover:text-darkblue transition duration-300">{title}</h3>
          <span className="text-sm text-grey">{teaser}</span>
        </a>
      </Link>
      <div className="mt-2">
        {sectors.map((sector, index) => (
          <SectorTag key={index} title={sector} />
        ))}

      </div>
    </>
  )
}
export default ListItem;