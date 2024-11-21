import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
    const { ToggleShow } = useAppContext();
    return (
      <Wrapper>
        <button className='toggle-btn' onClick={ToggleShow}>
        <div>Navbar</div>
          </button>
      </Wrapper>
    )
  }
export default Navbar


const Wrapper = styled.nav`
height: var(--nav-height);
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
background: var(--background-secondary-color);
.nav-center {
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
}
.toggle-btn {
  background: transparent;
  border-color: transparent;
  font-size: 1.75rem;
  color: var(--primary-500);
  cursor: pointer;
  display: flex;
  align-items: center;
}
.logo-text {
  display: none;
}
.logo {
  display: flex;
  align-items: center;
  width: 100px;
}
.btn-container {
  position: relative;
  /*display: flex;
  align-items: center;*/
}
@media (min-width: 992px) {
  position: sticky;
  top: 0;
  .nav-center {
    width: 90%;
  }
  .logo {
    display: none;
  }
  .logo-text {
    display: block;
  }
  @media (max-width: 992px) {
    
    .logo {
      display: block;
    }
    .logo-text {
      display: none;
    }
}
`;