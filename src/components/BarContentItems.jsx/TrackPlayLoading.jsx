function TrackPlayLoading() {
  return (
    <div
      className="loading-barcontent__square w-auto grid grid-flow-col items-center"
      style={{ gridTemplateAreas: `'image author' 'image album'` }}
    >
      <div
        className="loading__square w-[51px] h-[51px] bg-[#313131] flex items-center justify-center mr-[12px]"
        style={{ gridArea: 'image' }}
      ></div>
      <div
        className="loading-upper__line min-w-[49px]"
        style={{ gridArea: 'author' }}
      ></div>
      <div
        className="loading-lower__line min-w-[49px]"
        style={{ gridArea: 'album' }}
      ></div>
    </div>
  )
}

export default TrackPlayLoading
