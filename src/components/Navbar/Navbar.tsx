import Link from 'next/link';
import NavButton from '../Navbutton/NavButton';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__icon}>
                <Link href='/'>MB</Link>
            </div>
            <div className={styles.nav__list_container}>
                <ul className={styles.nav__list}>
                    <NavButton pageName={'projects'}></NavButton>
                    <NavButton pageName={'models'}></NavButton>
                    <NavButton pageName={'resume'}></NavButton>
                    <NavButton pageName={'blog'}></NavButton>
                </ul>
            </div>
        </nav>
    );
}
