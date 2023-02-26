function CenterBlockSearch() {
  return (
    <div className="centerblock__search search w-full border-b border-solid border-[#4E4E4E] mb-[51px] flex flex-row items-center">
      <svg
        className="search__svg w-[17px] h-[17px] mr-[5px] stroke-white fill-transparent hover:fill-transparent hover:stroke-[#ACACAC] hover:cursor-pointer active:fill-transparent active:stroke-[#ACACAC] active:cursor-pointer"
        alt="search"
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9276 12.7748L15.37 17.0644"
          stroke="white"
          strokeLinecap="round"
        />
        <circle
          cx="8.48533"
          cy="8.48526"
          r="5.5"
          transform="rotate(-38.7469 8.48533 8.48526)"
          stroke="white"
        />
      </svg>
      <input
        className="search__text bg-transparent pt-[13px] pl-2.5 pb-3.5 font-normal not-italic text-base text-white grow-[100]"
        style={{ border: 'none' }}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}

export default CenterBlockSearch
