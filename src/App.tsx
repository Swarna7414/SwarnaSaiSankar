import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

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
