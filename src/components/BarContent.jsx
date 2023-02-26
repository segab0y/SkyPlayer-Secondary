function BarContent() {
  return (
    <div className="bar__content flex flex-col">
      <div className="bar__player-progress w-full h-[5px] bg-[#2E2E2E]" />
      <div className="bar__player-block h-[73px] flex flex-row justify-between">
        <div className="bar__player player flex flex-row items-center justify-start">
          <div className="player__controls flex flex-row pt-0 pr-[27px] pb-0 pl-[31px]">
            <div className="player__btn-prev p-[5px] flex items-center mr-[23px]">
              <svg
                className="player__btn-prev-svg w-[15px] h-[14px] hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                alt="prev"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2V12.5" stroke="white" />
                <path
                  d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="player__btn-play p-[5px] flex items-center mr-[23px] _btn">
              <svg
                className="player__btn-play-svg w-[22px] h-[20px] fill-[#D9D9D9]  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                alt="play"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="player__btn-next p-[5px] flex items-center mr-[28px] fill-[#a53939]">
              <svg
                className="player__btn-next-svg w-[15px] h-[14px] fill-inherit stroke-[#D9D9D9]  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                alt="next"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 2V12.5" stroke="white" />
                <path
                  d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="player__btn-repeat p-[5px] flex items-center mr-1.5 _btn-icon hover:border-[#D9B6FF] hover:cursor-pointer hover:fill-transparent hover:stroke-[#ACACAC] active:cursor-pointer active:fill-transparent active:stroke-[#FFFFFF]">
              <svg
                className="player__btn-repeat-svg w-[18px] h-[12px] fill-transparent stroke-[#696969]  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                alt="repeat"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                  fill="#696969"
                />
              </svg>
            </div>
            <div className="player__btn-shuffle p-[5px] flex items-center _btn-icon hover:cursor-pointer hover:fill-transparent hover:stroke-[#ACACAC] active:cursor-pointer active:fill-transparent active:stroke-[#FFFFFF]">
              <svg
                className="player__btn-shuffle-svg w-[19px] h-[12px] fill-transparent stroke-[#696969]  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                alt="shuffle"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z"
                  fill="#696969"
                />
              </svg>
            </div>
          </div>
          <div className="player__track-play track-play flex flex-row">
            <div
              className="track-play__contain w-auto grid grid-flow-col items-center"
              style={{ gridTemplateAreas: `'image author' 'image album'` }}
            >
              <div
                className="track-play__image w-[51px] h-[51px] bg-[#313131] flex items-center justify-center mr-[12px]"
                style={{ gridArea: 'image' }}
              >
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
                  <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                  <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
                </svg>
              </div>
              <div
                className="track-play__author min-w-[49px]"
                style={{ gridArea: 'author' }}
              >
                <a
                  href="http://www.google.com"
                  className="track-play__author-link not-italic text-SkyBase text-[#FFFFFF] whitespace-nowrap"
                >
                  Ты та...
                </a>
              </div>
              <div
                className="track-play__album min-w-[49px]"
                style={{ gridArea: 'album' }}
              >
                <a
                  href="http://www.google.com"
                  className="track-play__album-link not-italic text-SkyBase text-[#FFFFFF]"
                >
                  Баста
                </a>
              </div>
            </div>
            <div className="track-play__like-dis flex flex-row items-center ml-[26%]">
              <div className="track-play__like p-[5px] w-[14px] h-[12px] fill-transparent stroke-[#696969] _btn-icon hover:cursor-pointer hover:fill-transparent hover:stroke-[#ACACAC] active:cursor-pointer active:fill-transparent active:stroke-[#FFFFFF]">
                <svg
                  className="track-play__like-svg  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                  alt="like"
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
              </div>
              <div className="track-play__dislike p-[5px] ml-[28.5px] w-[14.34px] h-[13px] fill-transparent stroke-[#696969] _btn-icon hover:cursor-pointer hover:fill-transparent hover:stroke-[#ACACAC] active:cursor-pointer active:fill-transparent active:stroke-[#FFFFFF]">
                <svg
                  className="track-play__dislike-svg  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                  alt="dislike"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L15 13.5" stroke="#696969" />
                  <path
                    d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
                    stroke="#696969"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bar__volume-block volume w-auto flex items-center pt-0 pr-[92px] pb-0 pl-0">
          <div className="volume__content flex flex-row items-center justify-end">
            <div className="volume__image w-[13px] h-[18px] mr-[17px]">
              <svg
                className="volume__svg w-[13px] h-[18px] fill-transparent  hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
                alt="volume"
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_2985_507" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0L3 5H0V13H3L8 18V0Z"
                  />
                </mask>
                <path
                  d="M3 5V6H3.41421L3.70711 5.70711L3 5ZM8 0H9V-2.41421L7.29289 -0.707107L8 0ZM0 5V4H-1V5H0ZM0 13H-1V14H0V13ZM3 13L3.70711 12.2929L3.41421 12H3V13ZM8 18L7.29289 18.7071L9 20.4142V18H8ZM3.70711 5.70711L8.70711 0.707107L7.29289 -0.707107L2.29289 4.29289L3.70711 5.70711ZM0 6H3V4H0V6ZM1 13V5H-1V13H1ZM3 12H0V14H3V12ZM8.70711 17.2929L3.70711 12.2929L2.29289 13.7071L7.29289 18.7071L8.70711 17.2929ZM7 0V18H9V0H7Z"
                  fill="white"
                  mask="url(#path-1-inside-1_2985_507)"
                />
                <path
                  d="M11 13C12.1046 13 13 11.2091 13 9C13 6.79086 12.1046 5 11 5"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="volume__progress _btn w-[109px]">
              <input
                className="volume__progress-line _btn w-[109px]"
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarContent
