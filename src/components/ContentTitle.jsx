function ContentTitle() {
  return (
    <div className="content__title playlist-title flex flex-row items-center justify-between mb-[24px]">
      <div className="playlist-title__col not-italic font-normal text-[14px] leading-6 tracking-[2px] text-[#696969] uppercase col01 w-[447px]">
        Трек
      </div>
      <div className="playlist-title__col not-italic font-normal text-[14px] leading-6 tracking-[2px] text-[#696969] uppercase col02 w-[321px]">
        ИСПОЛНИТЕЛЬ
      </div>
      <div className="playlist-title__col not-italic font-normal text-[14px] leading-6 tracking-[2px] text-[#696969] uppercase col03 w-[245px]">
        АЛЬБОМ
      </div>
      <div className="playlist-title__col not-italic font-normal text-[14px] leading-6 tracking-[2px] text-[#696969] uppercase col04 w-[60px] text-end">
        <svg
          className="playlist-title__svg w-3 h-3 fill-transparent stroke-[#696969]"
          alt="time"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5.5" stroke="#696969" />
          <path d="M4 6H6.5V2.5" stroke="#696969" />
        </svg>
      </div>
    </div>
  )
}

export default ContentTitle
