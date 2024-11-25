import { Outlet } from 'react-router-dom'
import BigSidebar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import Navbar from './Navbar'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const Sidebar = () => {
  const { Mode } = useAppContext();
  const Wrapper = styled.section`
  
color:${ Mode === 'dark' ? 'var(--text-color)':'var(--text-secondary-color)'};
background:${ Mode === 'dark' ? 'var(--background-color)':'var(--background-secondary-color)'};
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
    max-height: 100vh;
    height: calc(100vh - 100px);
    overflow-y: scroll;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page overflow-y-scroll'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
export default Sidebar;