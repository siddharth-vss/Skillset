
import Sidebar from './component/Sidebar'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home,LiveClass,Attendence,Cources,Payments,Students,Teachers,Books,Profile, } from './pages'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} >

          <Route index element={<Home />} />
          <Route path='live' element={<LiveClass />} />
          <Route path="stdents" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="cources" element={<Cources />} />
          <Route path="attendence" element={<Attendence />} />
          <Route path="payments" element={<Payments />} />
          <Route path="books" element={<Books />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
        <Route path='*' element={<Navigate to="/" replace />}  />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
