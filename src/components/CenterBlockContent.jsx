import ContentPlaylist from './ContentPlaylist'
import ContentTitle from './ContentTitle'

function CenterBlockContent() {
  return (
    <div className="centerblock__content flex flex-col">
      <ContentTitle />
      <ContentPlaylist />
    </div>
  )
}

export default CenterBlockContent
