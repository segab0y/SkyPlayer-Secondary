import { useState } from 'react'

function CenterBlockFilter() {
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <div className="centerblock__filter filter flex flex-row items-center mb-[51px]">
      <div className="filter__title not-italic text-SkyBase mr-[15px] ">
        Искать по:
      </div>

      <div
        onClick={() => toggleVisibleFilter('author')}
        className="filter__button button-author _btn-text not-italic text-SkyBase border border-solid border-[#FFFFFF] rounded-[60px] px-[20px] py-[6px] mr-[10px] hover:border-[#D9B6FF] hover:text-[#D9B6FF] hover:cursor-pointer active:border-[#AD61FF] active:text-[#AD61FF] active:cursor-pointer"
      >
        исполнителю
      </div>
      {visibleFilter === 'author' && (
        <div className="filter__button absolute m-[115px]">исп</div>
      )}

      <div
        onClick={() => toggleVisibleFilter('year')}
        className="filter__button button-year _btn-text not-italic text-SkyBase border border-solid border-[#FFFFFF] rounded-[60px] px-[20px] py-[6px] mr-[10px] hover:border-[#D9B6FF] hover:text-[#D9B6FF] hover:cursor-pointer active:border-[#AD61FF] active:text-[#AD61FF] active:cursor-pointer"
      >
        году выпуска
      </div>
      {visibleFilter === 'year' && (
        <div className="filter__button fixed m-[237px]">г в</div>
      )}
      <div
        onClick={() => toggleVisibleFilter('genre')}
        className="filter__button button-genre _btn-text not-italic text-SkyBase border border-solid border-[#FFFFFF] rounded-[60px] px-[20px] py-[6px] hover:border-[#D9B6FF] hover:text-[#D9B6FF] hover:cursor-pointer active:border-[#AD61FF] active:text-[#AD61FF] active:cursor-pointer"
      >
        жанру
      </div>
      {visibleFilter === 'genre' && (
        <div className="filter__button absolute m-[333px]">жнр</div>
      )}
    </div>
  )
}

export default CenterBlockFilter
