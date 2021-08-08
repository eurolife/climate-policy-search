import SectorBlock from "./SectorBlock"

const Sectors = ({sectors}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4">
      {sectors.map((sector, index) => (
        <SectorBlock key={index} sector={sector} />
      ))}
    </div>
    
  )
}
export default Sectors;