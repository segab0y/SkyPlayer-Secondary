function LoadingBarContentSquare() {
  return (
    <div
      className="loading-sidebar__square w-auto grid grid-flow-col items-center"
      style={{ gridTemplateAreas: `'image author' 'image album'` }}
    >
      <div className="loading__square w-[51px] h-[51px] bg-[#313131] flex items-center justify-center mr-[12px]"></div>
      <div className="loading-upper__line"></div>
      <div className="loading-lower__line"></div>
    </div>
  )
}

export default LoadingBarContentSquare
