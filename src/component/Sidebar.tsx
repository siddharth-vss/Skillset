import { Outlet } from 'react-router-dom'
import BigSidebar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import Navbar from './Navbar'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
export default Sidebar;
const Wrapper = styled.section`
background: var(--background-secondary-color);
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`