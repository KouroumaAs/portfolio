import React, { useEffect, useState } from 'react'
import { FaReact , FaBars } from "react-icons/fa";
import { Link } from  "react-router-dom";
import { HiX } from "react-icons/hi";
import "./styles.scss"
const data = [
    {
        label: "HOME",
        to : '/'
    },
    {
        label: "A PROPOS",
        to : '/about'
    },
    {
        label: "COMPETENCES",
        to : '/skills'
    },
    {
        label: "RESUME",
        to : '/resume'
    },
    {
        label: "PORTFOLIO",
        to : '/portfolio'
    },
    {
        label: "CONTACT",
        to : '/contact'
    },
  
]

function NavBar() {
  const [toggleIcon,setToggleIcon ] = useState(false);  
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  }  
  const { innerWidth: width, innerHeight: height } = window;

  
  return (
 
        <nav className={`navbar ${toggleIcon && width <= 768 ? 'see-home': ''}`}>
            <div className='navbar__container'>
                <Link to={'/'} className='navbar__container__logo'>
                  <FaReact size={30} />
                </Link>
            </div>
             <ul className={`navbar__container__menu ${toggleIcon? 'active': ''}`}>
                {
                    data.map((item,index) => (
                        <li key={index} className='navbar__container__menu__item'>
                          <Link to={item.to} className='navbar__container__menu__item__links' onClick={ handleToggleIcon}>
                             {item.label}
                          </Link>
                        </li>
                    ))
                }  
            </ul>
            <div className='nav-icon' onClick={handleToggleIcon}>
               {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
               }
           
            </div> 
        </nav>

  )
}

export default NavBar