import { useState } from 'react'
import SideBarItem02 from './SideBarItems/SideBarItem02'
import SideBarItem01 from './SideBarItems/SideBarItems01'
import SideBarLoadingSquare from './SideBarItems/LoadingBarContentSquare'
import SideBarItem03 from './SideBarItems/SideBaritem03'

function SideBar() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  return (
    <div className="main__sidebar sidebar max-w-[418px] pt-[20px] pr-[90px] pb-[20px] pl-[78px]">
      <div className="sidebar__personal flex flex-row items-center justify-end pt-[12px] pr-0 pb-[15px] pl-0">
        <p className="sidebar__personal-name not-italic text-SkyBase text-white mr-4">
          Sergey.Ivanov
        </p>
        <div className="sidebar__avatar w-[43px] h-[43px] bg-[#313131] rounded-[50%]" />
      </div>
      <div className="sidebar__block h-full pt-[240px] pr-0 pb-0 pl-0 flex flex-col justify-start">
        <div className="sidebar__list flex flex-col items-center">
          {loading && <SideBarLoadingSquare />}
          {loading && <SideBarLoadingSquare />}
          {loading && <SideBarLoadingSquare />}
          <SideBarItem01 />
          <SideBarItem02 />
          <SideBarItem03 />
        </div>
      </div>
    </div>
  )
}

export default SideBar
