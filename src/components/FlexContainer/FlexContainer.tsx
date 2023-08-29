import styles from './FlexContainer.module.css';

export default function FlexContainer({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <div className={styles.flex_container}>{children}</div>;
}
