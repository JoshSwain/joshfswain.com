import { Link } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'

function Videos() {
  return (
    <main className="container">
      <div className="videos-header">
        <Link to="/" className="back-link">&larr; Back</Link>
        <h1>The Videos</h1>
      </div>

      <div className="video-grid">
        <VideoPlayer title="Dirtbags — Part 1" id360="SVcjU-vQ3pQ" idFlat="JwS2sISKDS4" />
        <VideoPlayer title="Dirtbags — Part 2" id360="Y6ip-FmJE3I" idFlat="CbNiQrmuahw" />
        <VideoPlayer title="At the Bourtyard" id360="qMz3fdNnAGw" idFlat="ans_bvO3XWY" />
        <VideoPlayer title="Testing out the camera at the Swamp" id360="9yfbJI1ym4M" />
      </div>
    </main>
  )
}

export default Videos
