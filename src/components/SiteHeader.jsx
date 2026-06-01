import { Link } from 'react-router-dom'

function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header-link">
        <div className="ua-block-a">A</div>
        <div className="ua-brand">
          <div className="ua-name">UNIVERSITY OF ARIZONA</div>
          <div className="ua-tagline">Class of 2021 · Memory Lane</div>
        </div>
      </Link>
    </header>
  )
}

export default SiteHeader
