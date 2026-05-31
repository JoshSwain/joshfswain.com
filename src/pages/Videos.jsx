import { Link } from 'react-router-dom'

const videos = [
  // { id: 'YOUTUBE_VIDEO_ID', title: 'Video title' },
]

function Videos() {
  return (
    <main className="container">
      <div className="videos-header">
        <Link to="/" className="back-link">&larr; Back</Link>
        <h1>The Videos</h1>
      </div>

      {videos.length === 0 ? (
        <p className="coming-soon">Videos coming soon.</p>
      ) : (
        <div className="video-grid">
          {videos.map(({ id, title }) => (
            <div key={id} className="video-item">
              {title && <h2>{title}</h2>}
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title || id}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Videos
