import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/anthony" element={<Anthony />} />
      <Route path="/nikita" element={<Nikita />} />
      <Route path="/lydia" element={<Lydia />} />
      <Route path="/aaron" element={<Aaron />} />
      <Route path="/jorie-tess-kiana" element={<JorieTessKiana />} />
      <Route path="/michael" element={<Michael />} />
      <Route path="/aaron-michael" element={<AaronMichael />} />
      <Route path="/josh" element={<Josh />} />
    </Routes>
  )
}

export default App
