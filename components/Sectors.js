import SectorBlock from "./SectorBlock"

const Sectors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4">
      <SectorBlock title="Economy-wide" count={12} />
      <SectorBlock title="Agriculture" count={32} />
      <SectorBlock title="Health" count={8} />
      <SectorBlock title="Energy" count={14} />
      <SectorBlock title="Industry" count={23} />
      <SectorBlock title="Social Development" count={4} />
      <SectorBlock title="Adaptation" count={6} />
      <SectorBlock title="Tourism" count={34} />
      <SectorBlock title="LULUCF" count={21} />
      <SectorBlock title="Buildings" count={18} />
    </div>
    
  )
}
export default Sectors;