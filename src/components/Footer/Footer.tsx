import styles from './Footer.module.css';

interface FooterProps {
    children: React.ReactNode;
    year: number;
}

export default function Footer(props: FooterProps) {
    return (
        <footer className={styles.footer}>
            {'© ' + props.year} {props.children}
        </footer>
    );
}
