import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Header.css';
import { IconContext } from 'react-icons/lib';

function Header(props) {

    // sidebar
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //to change background color of navbar on scroll
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff ' }}>
                <div className={navbar ? 'navbar active' : 'navbar'}>
                    <div className="nav-title">
                        <h3><Link to='/'>SLEEKCVS</Link></h3>
                    </div>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle' onClick={showSidebar}>
                            <Link to="#" className='menu-bars-close'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>




        // <div>
        //     <header id="header" className="alt">
        //         <h1><Link to="/" z>Sleekcvs</Link></h1>
        //         <nav id="nav">
        //             <ul>
        //                 <li className="special">
        //                     <Link to="#" className="menuToggle"><span>Menu</span></Link>
        //                     <div id="menu">
        //                         < ul >
        //                             <li><Link to="/">Home</Link></li>
        //                             <li><Link to="#">About Us</Link></li>
        //                             <li><Link to="#">Sign Up</Link></li>
        //                             <li><Link to="#">Log In</Link></li>
        //                         </ul>
        //                     </div>

        //                 </li>
        //             </ul>
        //         </nav >
        //     </header >

        // </div >
    );
}

export default Header;