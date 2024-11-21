
import Sidebar from './component/Sidebar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} >

          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

const Home = ()=>{
  return(
    <div  >
      <h1>Home</h1>
    </div>
  )
}
export default App
