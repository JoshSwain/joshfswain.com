function VideoPlayer({ title, duration, id360, idFlat }) {
  const thumbnailId = id360 || idFlat

  return (
    <div className="video-item">
      <div className="video-meta">
        {title && <h2>{title}</h2>}
        {duration && <span className="video-duration">{duration}</span>}
      </div>
      <img
        className="video-thumbnail"
        src={`https://img.youtube.com/vi/${thumbnailId}/hqdefault.jpg`}
        alt={title || 'Video thumbnail'}
      />
      <div className="video-buttons">
        {id360 && (
          <a
            className="video-btn"
            href={`https://www.youtube.com/watch?v=${id360}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            360 Video
          </a>
        )}
        {idFlat && (
          <a
            className="video-btn"
            href={`https://www.youtube.com/watch?v=${idFlat}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Flat Video
          </a>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer
