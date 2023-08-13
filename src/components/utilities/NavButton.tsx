import '../../styles/NavButton.css';
import { NavLink } from 'react-router-dom';

export function NavButton({ pageName }: { pageName: string }): JSX.Element {
    return (
        <>
            <li className='navButton'>
                <NavLink
                    to={'./'.concat(pageName.toLowerCase())}
                    className={({ isActive }) =>
                        isActive
                            ? 'nav-button__text--active'
                            : 'nav-button__text--passive'
                    }
                >
                    {pageName.toUpperCase()}
                </NavLink>
            </li>
        </>
    );
}
