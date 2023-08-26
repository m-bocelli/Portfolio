import Link from 'next/link';
import styles from './NavButton.module.css';

interface NavButtonProps {
    page: string;
    path: string;
}

export default function NavButton(props: NavButtonProps): JSX.Element {
    const href = '/'.concat(props.page.toLowerCase());
    const active = href === props.path;
    return (
        <Link className={active ? styles.active : styles.passive} href={href}>
            {props.page.toUpperCase()}
        </Link>
    );
}
