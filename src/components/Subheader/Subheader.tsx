import styles from './Subheader.module.css';

export default function Subheader({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <h3 className={styles.subheader}>{children}</h3>;
}
