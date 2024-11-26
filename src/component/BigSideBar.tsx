import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const BigSidebar = () => {
  const { Show,Mode } = useAppContext();
  const Wrapper = styled.aside`
    display: none;
  @media (min-width: 992px) {
    display: block;
    
    .sidebar-container {
      background:${ Mode === 'dark' ? 'var(--background-color)':'var(--background-secondary-color)'};
      min-height: 100vh;
      height: 100%;
      width: 350px;
      margin-left: -350px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      border-radius : 25px;
      background-color: ${Mode === 'dark' ? 'var(--background-box-color)':'var(--background-secondary-box-color)'};
      width : 300px;
      min-height: calc(100vh - 50px);
      max-height: 100vh;
      position: sticky;
      top: 25px;
      left:25px
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: ${ Mode === 'dark' ? 'var(--text-color)':'var(--text-secondary-color)'};
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      border-left: 3px solid  var(--primary-200);
      color: var(--primary-400);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
      padding-left: 3rem;
      border-left: 3px solid  var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
  `;
  return (
    <Wrapper>
      <div
        className={
          Show ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <div className="h-[500px] mt-[30px] overflow-y-scroll" >
            <NavLinks />
          </div>

        </div>

      </div>
    </Wrapper>
  )
}

export default BigSidebar

// box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
// in  || @media (min-width: 992px) { || with display: block;
