function CenterBlockFilterByAuthor(props) {
  return (
    <div className="filter__button window__author-wrapper absolute m-[115px]">
      <a href="http://google.com">{props.authorMichaelJackson}</a>
      <a href="http://google.com">{props.authorFrankSinatra}</a>
      <a href="http://google.com">{props.authorCalvinHarris}</a>
      <a href="http://google.com">{props.authorZhu}</a>
      <a href="http://google.com">{props.authorArcticMonkeys}</a>
    </div>
  )
}

export default CenterBlockFilterByAuthor
