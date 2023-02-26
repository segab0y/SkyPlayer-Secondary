import CenterBlockSearch from './CenterBlockSearch'
import CenterBlockFilter from './CenterBlockFilter'
import CenterBlockContent from './CenterBlockContent'

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock w-[1205px] h-[1050px] grow-[3] pt-[20px] pr-[40px] pb-[20px] pl-[111px]">
      <CenterBlockSearch />
      <h2 className="centerblock__h2 not-italic text-Skyxl -tracking-[0.8px] mb-[45px]">
        Треки
      </h2>
      <CenterBlockFilter />
      <CenterBlockContent />
    </div>
  )
}

export default CenterBlock
