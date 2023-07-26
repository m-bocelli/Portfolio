import '../styles/Navbar.css';
import { NavButton } from '../utilities';

export function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav__title'>MB</div>
      <div className='nav__list-container'>
        <ul className='nav__list'>
          <NavButton pageName={'home'}></NavButton>
          <NavButton pageName={'projects'}></NavButton>
          <NavButton pageName={'models'}></NavButton>
          <NavButton pageName={'resume'}></NavButton>
        </ul>
      </div>
    </nav>
  );
}
