import { Outlet } from 'react-router-dom'
import BigSidebar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import Navbar from './Navbar'
import './css/sidebar.css'
const Sidebar = () => {
  return (
    <section>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  )
}
export default Sidebar;