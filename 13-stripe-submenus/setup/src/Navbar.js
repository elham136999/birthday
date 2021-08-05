import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { opensidebar, opensubmenu, closesubmenu } = useGlobalContext();
  const dispalySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    opensubmenu(page, { center, bottom });
  };
  const handlesubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closesubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handlesubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='strip' className='nav-logo' />
          <button className='btn toggle-btn' onClick={opensidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={dispalySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={dispalySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={dispalySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn' onMouseOver={dispalySubMenu}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
