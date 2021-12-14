import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar bg-white'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://www.dinterweb.com/wp-content/uploads/2021/04/logo.png" className="" alt="" />
           
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active bg-white' : 'nav-menu' } >
          <li className='nav-item  bg-white'>
              <Link
                to='/react-dinterweb'
                className='nav-links  font-bold md:text-7xl '
                onClick={closeMobileMenu}
              >
                Pagina 1
              </Link>
            </li>
            <li className='nav-item bg-white '>
              <Link to='/Dinterweb2' className='nav-links  font-bold md:text-7xl' onClick={closeMobileMenu}>
              Pagina 2
              </Link>
            </li>
            <li className='nav-item bg-white'>
              <Link
                to='/Dinterweb3'
                className='nav-links  font-bold md:text-7xl '
                onClick={closeMobileMenu}
              >
                  Pagina 3
              </Link>
            </li>

          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
