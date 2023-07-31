import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { NavButton } from '../utilities';

export function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav__icon'>
        <NavLink to={'/'}>MB</NavLink>
      </div>
      <div className='nav__list-container'>
        <ul className='nav__list'>
          <NavButton pageName={'projects'}></NavButton>
          <NavButton pageName={'models'}></NavButton>
          <NavButton pageName={'resume'}></NavButton>
          <NavButton pageName={'blog'}></NavButton>
        </ul>
      </div>
    </nav>
  );
}
