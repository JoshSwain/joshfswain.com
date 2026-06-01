import { useState } from 'react'

function VideoPlayer({ title, id360, idFlat }) {
  const [showFlat, setShowFlat] = useState(false)
  const hasToggle = id360 && idFlat
  const activeId = hasToggle && showFlat ? idFlat : (id360 || idFlat)

  return (
    <div className="video-item">
      {title && <h2>{title}</h2>}
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${activeId}`}
          title={title || activeId}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {hasToggle && (
        <button className="toggle-btn" onClick={() => setShowFlat(v => !v)}>
          {showFlat ? 'Show 360 version' : 'Show this video flattened'}
        </button>
      )}
    </div>
  )
}

export default VideoPlayer
