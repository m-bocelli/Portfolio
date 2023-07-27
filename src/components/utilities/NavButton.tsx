import '../styles/NavButton.css';
import { NavLink } from 'react-router-dom';

export function NavButton({ pageName }: { pageName: string }): JSX.Element {
  return (
    <>
      <li className='navButton'>
        <NavLink
          to={'./'.concat(pageName.toLowerCase())}
          className={'nav-button__text'}
        >
          {pageName.toUpperCase()}
        </NavLink>
      </li>
    </>
  );
}
