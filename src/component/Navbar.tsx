import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { ToggleShow,ToggleMode,Mode } = useAppContext();
  const Wrapper = styled.nav`
height: var(--nav-height);
display: flex;
align-items: center;
justify-content: center;

background:${ Mode === 'dark' ? 'var(--background-color)':'var(--background-secondary-color)'};
.nav-center {
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
}

.searchbox{
  background:${ Mode === 'dark' ? 'var(--background-box-color)':'var(--background-secondary-box-color)'};
  height:40px;
  width:300px;
  border-radius: 15px;
  padding: 2px 20px;
}
.window{
  display:none;
  width : 360px;
}
.menus{
  width :250px;
  display: none;
}

.img{
  height: 40px;
  width: 40px;
  border-radius: 50%;
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
    width: 95%;
  }
  .logo {
    display: none;
  }

  .window{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .phone{
    display:none;
  }
  .menus{
    display:flex;
    justify-content: space-around;
    align-items: center;
  }

  .logo-text {
    display: block;
  }
  @media (max-width: 992px) {
    .window{
      display: none;
    }
    .menus{
      display: none;
    }

    .phone{
      display:block;
    }
    .logo {
      display: block;
    }
    .logo-text {
      display: none;
    }
}
`;
  return (
    <Wrapper>
      <div className='nav-center'>

        <div className="window" >
          <div onClick={ToggleShow} className="text-[40px] text-[#8C8DF3]"><i className='bx bx-menu'></i></div>
          <input placeholder={` ${'\u{1F50D}'} Search`} className="searchbox" type="text" name="search" />
        </div>

        <div className="logo">
          <img src="https://res.cloudinary.com/dabh5hsuk/image/upload/v1725365097/unknown_artist_wlofav.jpg" className="img" alt="user" />
        </div>

        <div className="menus">
          <NavLink
            to={'live'}
            // onClick={ToggleShow}
            className="bg-gradient-to-b from-[#ff6a6a] to-[#fb4b4b] w-[70px] h-[30px] text-white text-[20px] rounded-[10px] flex justify-center items-center"
          >
            <i className='bx bxs-circle text-[10px] mr-[3px]' ></i>
            Live
          </NavLink>
          <i onClick={ToggleMode} className='bx bx-moon text-[20px] text-[#8C8DF3]'></i>
          <i className='bx bx-bell text-[20px] text-[#8C8DF3]' ></i>
          <NavLink
            to={'profile'}
          >
            <img src="https://res.cloudinary.com/dabh5hsuk/image/upload/v1725365097/unknown_artist_wlofav.jpg" className="img" alt="user" />
          </NavLink>
        </div>

        <div className="phone" >
          <div onClick={ToggleShow} className="text-[40px] text-[#8C8DF3]"><i className='bx bx-menu'></i></div>
        </div>

      </div>
    </Wrapper>
  )
}
export default Navbar

// box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);  stayling of defualt styled nav

