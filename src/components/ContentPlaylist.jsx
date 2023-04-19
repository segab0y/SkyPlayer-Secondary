function ContentPlaylist() {
  return (
    <div className="content__playlist playlist flex flex-col overflow-y-auto">
      <div className="playlist__item w-full block mb-[12px]">
        <div className="playlist__track track flex flex-row justify-between items-center">
          <div className="track__title flex flex-row items-center w-[447px]">
            <div className="track__title-image w-[51px] h-[51px] p-[16px] bg-[#313131] flex items-center justify-center mr-[17px]">
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
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Guilt
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Nero
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Welcome Reality
            </a>
          </div>
          <div className="track__time flex">
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
              4:44
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Elektro
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Dynoro, Outwork, Mr. Gee
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Elektro
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
              2:22
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                I`m Fire
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Ali Bakgor
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              I`m Fire
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
              2:22
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Non Stop (Remix)
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Стоункат, Psychopath
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Non Stop
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
              4:12
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Run Run (feat. AR/CO)
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Jaded, Will Clarke, AR/CO
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Run Run
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
              2:54
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Mucho Bien
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              HYBIT, Mr. Black, Offer Nissim, Hi Profile
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Mucho Bien
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
              3:41
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Knives n Cherries
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              minthaze
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Captivating
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
              1:48
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                How Deep Is Your Love
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Calvin Harris, Disciples
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              How Deep Is Your Love
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
              3:32
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Morena
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Tom Boxer
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Soundz Made in Romania
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
              3:36
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                Morena
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              Tom Boxer
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              Soundz Made in Romania
            </a>
          </div>
          <div className="track__time flex ">
            <svg
              className="track__time-svg w-[14px] h-[12px] mr-[17px] fill-transparent stroke-[#4E4E4E] hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
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
              3:36
            </span>
          </div>
        </div>
      </div>
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
                <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
                <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
              </svg>
            </div>
            <div className="track__title-text">
              <div
                className="track__title-link not-italic text-SkyBase text-white"
                href="#"
              >
                <span className="track__title-span not-italic text-SkyBase text-[#4E4E4E]" />
              </div>
            </div>
          </div>
          <div className="track__author w-[321px] flex justify-start">
            <a
              href="http://www.google.com"
              className="track__author-link not-italic text-SkyBase text-white text-left"
            >
              .
            </a>
          </div>
          <div className="track__album w-[245px]">
            <a
              href="http://www.google.com"
              className="track__album-link not-italic text-SkyBase text-[#696969]"
            >
              .
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
            <span className="track__time-text not-italic text-SkyBase text-right text-[#696969]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPlaylist
