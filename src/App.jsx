import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Anthony from './pages/Anthony'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/anthony" element={<Anthony />} />
    </Routes>
  )
}

export default App
