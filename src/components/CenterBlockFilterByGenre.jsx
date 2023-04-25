function CenterBlockFilterByGenre(props) {
  return (
    <div className="filter__button window__genre-wrapper absolute m-[333px]">
      <a href="http://google.com">{props.genreRock}</a>
      <a href="http://google.com">{props.genreHipHop}</a>
      <a href="http://google.com">{props.genrePopMusic}</a>
      <a href="http://google.com">{props.genreTechno}</a>
      <a href="http://google.com">{props.genreIndie}</a>
    </div>
  )
}

export default CenterBlockFilterByGenre
