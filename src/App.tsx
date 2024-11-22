
import Sidebar from './component/Sidebar'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home,LiveClass, } from './pages'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} >

          <Route index element={<Home />} />
          <Route path='live' element={<LiveClass />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
        <Route path='*' element={<Navigate to="/" replace />}  />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
