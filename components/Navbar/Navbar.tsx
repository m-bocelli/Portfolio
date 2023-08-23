import Link from 'next/link';
import NavButton from '../Navbutton/NavButton';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav__icon'>
                <Link href='/'>MB</Link>
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
