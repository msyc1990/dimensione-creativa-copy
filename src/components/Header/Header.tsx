import logo from './assets/logo.webp';
import s from './Header.module.css';
import { ReactComponent as MenuIcon } from './assets/menu-icon.svg';
import { useState } from 'react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuIcon = () => {
    setMenuOpen(!menuOpen)
  }
  const navLinks = [
    'Start',
    'Opinie',
    'O nas',
    'Realizacje',
    'Co oferujemy',
    'Krzyśći z DC',
    'Technologie',
    'Proces budowania',
    'SM',
  ];


  return (
    <header className={s.container}>
      <div className={s.logoContainer}>
        <img 
          className='cursor-pointer'
          width='115px'
          src={logo} 
          alt="logo"
         />

        <MenuIcon 
          className={s.menuIcon}
          onClick={handleMenuIcon}
        />
      </div>

      <nav className={`${s.links} ${menuOpen ? s.open : ''}`}>
        {navLinks.map((link, index) => (
          <p 
            className={`${s.link}`}
            key={index}
          >
            {link}
          </p>
        ))}

        <button className={s.btn}>
          <p className='uppercase font-bold'>Zróbmy to razem</p>
        </button>

      </nav>
      

    </header>
  )
}

export default Header