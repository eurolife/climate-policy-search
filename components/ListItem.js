import SectorTag from "./SectorTag";
import Link from 'next/link';

const ListItem = ({title, url, sectors}) => {
  const displayUrl = `https://${window.location.host}/${url}`
  return (
    <>
      <Link href={url}>
        <a>
          <h3 className="text-blue font-bold text-lg hover:text-darkblue transition duration-300">{title}</h3>
          <span className="text-sm text-grey">{displayUrl}</span>
        </a>
      </Link>
      <div className="mt-2">
        {sectors.map((sector) => (
          <SectorTag title={sector} />
        ))}

      </div>
    </>
  )
}
export default ListItem;