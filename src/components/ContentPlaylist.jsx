// import { useState } from 'react'

import PlaylistItem01 from './PlaylistItems/PlaylistItem01'
import PlaylistItem02 from './PlaylistItems/PlaylistItem02'
import PlaylistItem03 from './PlaylistItems/PlaylistItem03'
import PlaylistItem04 from './PlaylistItems/PlaylistItem04'
import PlaylistItem05 from './PlaylistItems/PlaylistItem05'
import PlaylistItem06 from './PlaylistItems/PlaylistItem06'
import PlaylistItem07 from './PlaylistItems/PlaylistItem07'
import PlaylistItem08 from './PlaylistItems/PlaylistItem08'
import PlaylistItem09 from './PlaylistItems/PlaylistItem09'
import PlaylistItem10 from './PlaylistItems/PlaylistItem10'
import PlaylistItem11 from './PlaylistItems/PlaylistItem11'

function ContentPlaylist() {
  // const [loading, setLoading] = useState(false)
  setTimeout(() => {
    // setLoading (false)
  }, 1000)

  return (
    <>
      {/* {visibleLoading()} */}
      {console.log('start loading')}
      <div className="content__playlist playlist flex flex-col overflow-y-auto">
        <PlaylistItem01 />
        <PlaylistItem02 />
        <PlaylistItem03 />
        <PlaylistItem04 />
        <PlaylistItem05 />
        <PlaylistItem06 />
        <PlaylistItem07 />
        <PlaylistItem08 />
        <PlaylistItem09 />
        <PlaylistItem10 />
        <PlaylistItem11 />
      </div>
      {console.log('finish loading')}
    </>
  )

  // const visibleLoading = () => {
  //   setLoading(true)
  //   setTimeout(() => console.log('hello'), 3000)
  //   setLoading(false)
  // }
}

export default ContentPlaylist
