import Link from 'next/link';
import NavButton from '../Navbutton/NavButton';
import styles from './Navbar.module.css';

export default function Navbar({ path }: { path: string }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__icon}>
                <Link href='/'>MB</Link>
            </div>
            <div className={styles.nav__list_container}>
                <ul className={styles.nav__list}>
                    <NavButton page='projects' path={path}></NavButton>
                    <NavButton page='models' path={path}></NavButton>
                    <NavButton page='resume' path={path}></NavButton>
                    <NavButton page='blog' path={path}></NavButton>
                </ul>
            </div>
        </nav>
    );
}
