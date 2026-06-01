import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Anthony from './pages/Anthony'
import Nikita from './pages/Nikita'
import Lydia from './pages/Lydia'
import Aaron from './pages/Aaron'
import JorieTessKiana from './pages/JorieTessKiana'
import Michael from './pages/Michael'
import AaronMichael from './pages/AaronMichael'
import Josh from './pages/Josh'

function WithBackButton() {
  return (
    <>
      <div className="back-home-wrap">
        <Link to="/" className="back-home-btn">&larr; Back to Home</Link>
      </div>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<WithBackButton />}>
        <Route path="/videos" element={<Videos />} />
        <Route path="/anthony" element={<Anthony />} />
        <Route path="/nikita" element={<Nikita />} />
        <Route path="/lydia" element={<Lydia />} />
        <Route path="/aaron" element={<Aaron />} />
        <Route path="/jorie-tess-kiana" element={<JorieTessKiana />} />
        <Route path="/michael" element={<Michael />} />
        <Route path="/aaron-michael" element={<AaronMichael />} />
        <Route path="/josh" element={<Josh />} />
      </Route>
    </Routes>
  )
}

export default App
