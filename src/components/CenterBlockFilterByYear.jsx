function CenterBlockFilterByYear() {
  return (
    <div className="filter__button window__year-wrapper">
      <input type="radio" name="firstNewRadio" value="firstNew"></input>
      <div>Более новые</div>
      <input type="radio" name="firstOldRadio" value="firstOld"></input>
      <div>Более старые</div>
    </div>
  )
}

export default CenterBlockFilterByYear
