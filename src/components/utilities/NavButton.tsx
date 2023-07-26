import '../styles/NavButton.css';
import { Link } from 'react-router-dom';

export function NavButton({ pageName }: { pageName: string }): JSX.Element {
  return (
    <>
      <li className='nav-button'>
        <Link
          to={'./'.concat(pageName.toLocaleLowerCase())}
          className='nav-button__text'
        >
          {pageName.toLocaleUpperCase()}
        </Link>
      </li>
    </>
  );
}
