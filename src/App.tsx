import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// basename is needed for github pages, dont remove it
function App() {
  return (
    <BrowserRouter basename='/SwarnaSaiSankar'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
