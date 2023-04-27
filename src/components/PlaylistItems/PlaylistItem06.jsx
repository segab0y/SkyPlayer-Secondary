function PlaylistItem06() {
    return (
      <div className="playlist__item w-full block mb-[12px]">
      <div className="playlist__track track flex flex-row justify-between items-center">
        <div className="track__title flex flex-row items-center w-[447px]">
          <div className="track__title-image w-[51px] h-[51px] p-1 bg-[#313131] flex items-center justify-center mr-[17px]">
            <svg
              className="track-play__svg w-[18px] h-[17px] fill-transparent stroke-[#4E4E4E]  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
              alt="music"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
              <ellipse
                cx="4.5"
                cy="16"
                rx="3.5"
                ry="2"
                stroke="#4E4E4E"
              />
              <ellipse
                cx="15.5"
                cy="13"
                rx="3.5"
                ry="2"
                stroke="#4E4E4E"
              />
            </svg>
          </div>
          <div className="track__title-text">
            <div
              className="track__title-link not-italic text-SkyBase text-white"
              href="#"
            >
              Eyes on Fire (Zeds Dead Remix)
              <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
            </div>
          </div>
        </div>
        <div className="track__author w-[321px] flex justify-start">
          <a
            href="http://www.google.com"
            className="track__author-link not-italic text-SkyBase text-white text-left"
          >
            Blue Foundation, Zeds Dead
          </a>
        </div>
        <div className="track__album w-[245px]">
          <a
            href="http://www.google.com"
            className="track__album-link not-italic text-SkyBase text-[#696969]"
          >
            Eyes on Fire
          </a>
        </div>
        <div className="track__time flex ">
          <svg
            className="track__time-svg w-[14px] h-[12px] mr-[17px] fill-transparent stroke-[#4E4E4E]  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
            alt="time"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
              stroke="#696969"
            />
          </svg>
          <span className="track__time-text not-italic text-SkyBase text-right text-[#696969]">
            5:20
          </span>
        </div>
      </div>
    </div>
    )
  }
  
  export default PlaylistItem06

  