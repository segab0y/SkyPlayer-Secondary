function TrackPlayItem() {
    return (
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
    )
  }
  
  export default TrackPlayItem
  