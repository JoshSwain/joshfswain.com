import VideoPlayer from '../components/VideoPlayer'

function Videos() {
  return (
    <main className="container">
      <div className="videos-header">
        <h1>The Videos</h1>
      </div>

      <div className="video-grid">
        <VideoPlayer title="Dirtbags — Part 1" duration="2 min" id360="SVcjU-vQ3pQ" idFlat="JwS2sISKDS4" />
        <VideoPlayer title="Dirtbags — Part 2" duration="9 min" id360="Y6ip-FmJE3I" idFlat="CbNiQrmuahw" />
        <VideoPlayer title="At the Bourtyard" duration="1 min" id360="qMz3fdNnAGw" idFlat="ans_bvO3XWY" />
        <VideoPlayer title="Testing out the camera at the Swamp" duration="1 min" id360="HOWuCb61m5Y" />
      </div>
    </main>
  )
}

export default Videos
