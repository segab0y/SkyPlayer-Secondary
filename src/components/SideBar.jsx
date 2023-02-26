function SideBar() {
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
          <div className="sidebar__item w-[250px] h-[150px] mb-[30px]">
            <a
              href="http://www.google.com"
              className="sidebar__link w-full h-full"
            >
              <img
                className="sidebar__img w-full h-auto"
                src="./assets/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item w-[250px] h-[150px] mb-[30px]">
            <a
              href="http://www.google.com"
              className="sidebar__link w-full h-full"
            >
              <img
                className="sidebar__img w-full h-auto"
                src="./assets/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item w-[250px] h-[150px]">
            <a
              href="http://www.google.com"
              className="sidebar__link w-full h-full"
            >
              <img
                className="sidebar__img w-full h-auto"
                src="./assets/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
