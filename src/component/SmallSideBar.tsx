import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
    const { Show, ToggleShow } = useAppContext();
    return (
      <Wrapper>
        <div className={
          Show ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }>
          <div className='content'>
            <button className='close-btn' onClick={ToggleShow}>
            <i className='bx bx-x'></i>
            </button>
            <header>
            <h1 className='text-[60px]' >HELLO</h1>
            </header>
            <div className='nav-links'>
              <NavLinks ToggleShow={ToggleShow}>
              </NavLinks>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }

export default SmallSidebar


const Wrapper = styled.aside`
    @media (min-width: 992px) {
      display: none;
    }
    .sidebar-container {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -1;
      opacity: 0;
      transition: var(--transition);
      visibility: hidden;
    }
    .show-sidebar {
      z-index: 99;
      opacity: 1;
      visibility: visible;
    }
    .content {
      background: var(--background-secondary-color);
      width: var(--fluid-width);
      height: 95vh;
      border-radius: var(--border-radius);
      padding: 4rem 2rem;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      left: 10px;
      background: transparent;
      border-color: transparent;
      font-size: 2rem;
      color: var(--red-dark);
      cursor: pointer;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
  `;