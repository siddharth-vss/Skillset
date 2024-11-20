import './style.css'
import img from './images/profile.jpeg'
import logo from './images/logo.jpg'
import { useEffect, useState } from 'react'
const Index = () => {
    const [show, setshow] = useState(false)
    const [close, setclose] = useState(true)

    const sidebar = document.getElementsByClassName("sidebar");
    useEffect(
        () => {
            console.log(sidebar[0].classList);
        },
        []
    )


    const toggleLock = () => {
        setshow(!show)
    };

    const hideSidebar = () => {
        if (sidebar[0].classList.contains('hoverable')) {
            setclose(true);
        }
    };
    const showSidebar = () => {
        if (sidebar[0].classList.contains('hoverable')) {
            setclose(false);
          }
    };

    const toggleSidebar = () => {
        setclose(!close);
    };

    return (
        <div className="bg-[#E0F5FD] h-[100vh] w-[100vw] ">
            <div className="fixed -z-4 w-full h-screen ">
                <div
                    className="text-[#00B9F1] font-[900] text-[15vw] absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] ">
                    {/* <span className="text-[#172B75]">Skill </span>Set */}
                </div>
            </div>
            <div className=" fixed z-4 w-full h-screen  ">
                <nav onMouseEnter={showSidebar} onMouseLeave={hideSidebar} className={`sidebar ${show ? 'locked' : 'hoverable'} ${close ? 'close' : ''}`}>
                    <div className="logo_items flex">
                        <span className="nav_image">
                            <img src={logo} alt="logo_img" />
                        </span>
                        <span className="logo_name">Coders_Section</span>
                        <i onClick={toggleLock} className={` bx ${show ? 'bx-lock-alt' : 'bx-lock-open-alt'}`} id="lock-icon" title="Unlock Sidebar"></i>
                        <i onClick={toggleSidebar} className="bx bx-x" id="sidebar-close"></i>
                    </div>

                    <div className="menu_container">
                        <div className="menu_items">
                            <ul className="menu_item">
                                <div className="menu_title flex">
                                    <span className="title">Dashboard</span>
                                    <span className="line"></span>
                                </div>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-home-alt"></i>
                                        <span>Overview</span>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-grid-alt"></i>
                                        <span>All Projects</span>
                                    </a>
                                </li>
                            </ul>

                            <ul className="menu_item">
                                <div className="menu_title flex">
                                    <span className="title">Editor</span>
                                    <span className="line"></span>
                                </div>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bxs-magic-wand"></i>
                                        <span>Magic Build</span>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-folder"></i>
                                        <span>New Projects</span>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-cloud-upload"></i>
                                        <span>Upload New</span>
                                    </a>
                                </li>
                            </ul>

                            <ul className="menu_item">
                                <div className="menu_title flex">
                                    <span className="title">Setting</span>
                                    <span className="line"></span>
                                </div>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-flag"></i>
                                        <span>Notice Board</span>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-award"></i>
                                        <span>Award</span>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#" className="link flex">
                                        <i className="bx bx-cog"></i>
                                        <span>Setting</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar_profile flex">
                            <span className="nav_image">
                                <img src={img} alt="logo_img" />
                            </span>
                            <div className="data_text">
                                <span className="name">Rudra Patel</span>
                                <span className="email">ABC@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- Navbar --> */}
                <nav className="navbar flex">
                    <i onClick={toggleSidebar} className="bx bx-menu" id="sidebar-open"></i>
                    <input type="text" placeholder="Search..." className="search_box" />
                    <span className="nav_image">
                        <img src={img} alt="logo_img" />
                    </span>
                </nav>
            </div >
        </div >
    )
}

export default Index